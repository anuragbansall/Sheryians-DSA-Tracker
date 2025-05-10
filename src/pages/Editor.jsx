import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProblemById } from "../data/Problems";
import CodeEditor from "../components/CodeEditor";
import clsx from "clsx";
import { LuExternalLink } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";

function Editor() {
  const { problemId } = useParams();
  const problem = getProblemById(parseInt(problemId));

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

  const navigate = useNavigate();

  return (
    <div className="h-fit md:h-screen w-full bg-zinc-950 flex flex-col md:flex-row p-4 gap-y-4">
      {/* Problem Section */}
      <div className="md:w-1/2 h-full md:pr-4">
        <div className="bg-zinc-900 p-4 rounded-md border-2 border-zinc-800 h-full overflow-y-auto">
          <span
            className="inline-block cursor-pointer mb-4"
            onClick={() => navigate(-1)}
          >
            <IoArrowBackOutline
              className="text-gray-400 hover:text-gray-300"
              size={20}
            />
          </span>

          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            {problem.id}. {problem.title}
          </h1>

          <div className="my-4 flex items-center gap-2">
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

          <div className="flex items-center gap-2 mt-2">
            {problem.geeksforgeeks && (
              <a
                href={problem.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-normal flex items-center"
              >
                View on GeeksforGeeks <LuExternalLink className="ml-1" />
              </a>
            )}
          </div>

          <h2 className="text-xl font-semibold text-gray-100 mt-6">
            Problem Description
          </h2>

          <div
            className="text-zinc-300 mt-4 leading-[2] text-lg"
            dangerouslySetInnerHTML={{
              __html: problem.description,
            }}
          />
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="md:w-1/2 h-screen md:h-full">
        <CodeEditor />
      </div>
    </div>
  );
}

export default Editor;
