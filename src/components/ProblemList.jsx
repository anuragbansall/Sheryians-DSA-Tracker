import React from "react";
import { Problems, Categories, Difficulties } from "../data/Problems";
import ProblemCard from "./ProblemCard";

function ProblemList() {
  const [problems, setProblems] = React.useState(Problems);
  const [filteredProblems, setFilteredProblems] = React.useState(Problems);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [solvedProblems, setSolvedProblems] = React.useState([]);
  const [selectedTab, setSelectedTab] = React.useState("all");

  const toggleSolved = (problemId) => {
    const updatedSolvedProblems = solvedProblems.includes(problemId)
      ? solvedProblems.filter((id) => id !== problemId)
      : [...solvedProblems, problemId];

    setSolvedProblems(updatedSolvedProblems);
    localStorage.setItem(
      "solvedProblems",
      JSON.stringify(updatedSolvedProblems)
    );
  };

  React.useEffect(() => {
    const storedSolvedProblems = localStorage.getItem("solvedProblems");
    if (storedSolvedProblems) {
      setSolvedProblems(JSON.parse(storedSolvedProblems));
    }
  }, []);

  React.useEffect(() => {
    let filtered = problems;

    if (selectedCategory) {
      filtered = filtered.filter((problem) =>
        problem.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (selectedDifficulty) {
      filtered = filtered.filter((problem) =>
        problem.difficulty
          .toLowerCase()
          .includes(selectedDifficulty.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (problem) =>
          problem.id.toString().includes(searchTerm) ||
          problem.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim()) ||
          problem.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim()) ||
          problem.difficulty
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim())
      );
    }

    switch (selectedTab) {
      case "solved":
        filtered = filtered.filter((problem) =>
          solvedProblems.includes(problem.id)
        );
        break;
      case "unsolved":
        filtered = filtered.filter(
          (problem) => !solvedProblems.includes(problem.id)
        );
        break;
      default:
        break;
    }

    setFilteredProblems(filtered);
  }, [
    selectedCategory,
    selectedDifficulty,
    searchTerm,
    problems,
    selectedTab,
    solvedProblems,
  ]);

  return (
    <div className="flex flex-col gap-12 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search problems..."
          className="bg-zinc-950 text-white border border-zinc-700 rounded-lg p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          name="category"
          id="category"
          className="bg-zinc-950 text-white border border-zinc-700 rounded-lg p-2 w-full md:w-xl"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {Categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          name="difficulty"
          id="difficulty"
          className="bg-zinc-950 text-white border border-zinc-700 rounded-lg p-2 w-full md:w-xl"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="">Select difficulty</option>
          {Difficulties.map((difficulty) => (
            <option key={difficulty.id} value={difficulty.name}>
              {difficulty.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 w-full bg-zinc-800 p-1 rounded-lg">
        {["all", "solved", "unsolved"].map((tab) => (
          <button
            key={tab}
            className={`${
              selectedTab === tab
                ? "bg-zinc-950 text-white"
                : "bg-transparent text-zinc-300"
            } px-4 py-2 rounded-lg cursor-pointer w-full`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              setProblems={setProblems}
              solved={solvedProblems.includes(problem.id)}
              toggleSolved={toggleSolved}
              problemId={problem.id}
            />
          ))
        ) : (
          <p className="text-zinc-500">No problems found.</p>
        )}
      </div>
    </div>
  );
}

export default ProblemList;
