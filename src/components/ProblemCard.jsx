import React, { useState } from "react";
import clsx from "clsx";
import { LuExternalLink } from "react-icons/lu";

function ProblemCard({ problem, solved, toggleSolved }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    const colorClasses = {
      easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      medium:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };
    return (
      colorClasses[difficulty.toLowerCase()] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    );
  };

  const truncatedDescription = problem.description.slice(0, 200);
  const isDescriptionLong = problem.description.length > 200;

  return (
    <div
      className={clsx(
        "border rounded-md p-6 bg-zinc-950",
        solved ? "border-green-500" : "border-white"
      )}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <input
              type="checkbox"
              checked={solved}
              onChange={() => toggleSolved(problem.id)}
              className="cursor-pointer appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-green-500 checked:border-transparent focus:outline-none shrink-0"
            />
            <span>
              {problem.id}. {problem.title}
            </span>
          </h2>
          <span className="flex gap-4 items-center my-2">
            {problem.leetcode ? (
              <a
                href={problem.leetcode}
                target="_blank"
                className="text-blue-500 hover:underline text-sm font-normal"
              >
                LeetCode <LuExternalLink className="inline-block ml-1" />
              </a>
            ) : null}
            {problem.geeksforgeeks ? (
              <a
                href={problem.geeksforgeeks}
                target="_blank"
                className="text-blue-500 hover:underline text-sm font-normal"
              >
                GeeksforGeeks <LuExternalLink className="inline-block ml-1" />
              </a>
            ) : null}
          </span>
        </div>

        <div className="my-4 md:my-0 flex flex-row md:flex-col gap-2 items-end">
          <span
            className={clsx(
              "font-semibold rounded-full px-3 py-1 text-xs",
              getDifficultyColor(problem.difficulty)
            )}
          >
            {problem.difficulty}
          </span>
          <span className="font-semibold rounded-full px-3 py-1 text-xs border border-white text-white">
            {problem.category}
          </span>
        </div>
      </div>

      <div
        className="text-zinc-300"
        dangerouslySetInnerHTML={{
          __html: isExpanded
            ? problem.description
            : `${truncatedDescription} ${isDescriptionLong ? "..." : ""}`,
        }}
      />

      {isDescriptionLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 mt-2 text-sm cursor-pointer hover:underline"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}

      <p className="mt-6 text-sm text-zinc-500">
        {solved ? "Solved" : "Not Solved"}
      </p>
    </div>
  );
}

export default ProblemCard;
