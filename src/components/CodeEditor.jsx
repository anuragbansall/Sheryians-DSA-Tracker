import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `console.log("Hello, Welcome to Sheryians DSA Tracker");`
  );
  const [output, setOutput] = useState("");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    const originalLog = console.log;

    console.log = (message) => {
      setOutput((prevOutput) => prevOutput + `${message}\n`);
      originalLog(message);
    };

    try {
      eval(code);
    } catch (error) {
      console.error("Error executing code:", error);
      console.log(`Error: ${error.message}`);
    } finally {
      console.log = originalLog;
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  return (
    <div className="relative h-full">
      <div className="h-1/2 w-full rounded-md overflow-hidden border-2 border-zinc-700">
        <MonacoEditor
          language="javascript"
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
        />
      </div>
      <div
        className="relative border-2 border-zinc-700 h-1/2 w-full bg-zinc-900 text-gray-100 font-mono text-sm overflow-y-auto rounded-md"
        style={{ whiteSpace: "pre-wrap" }}
      >
        <div className="sticky top-0 flex gap-4 items-center bg-zinc-900 border-b-2 border-zinc-700 p-4">
          <button
            onClick={runCode}
            className="block px-6 py-2 bg-zinc-800 text-white rounded-md cursor-pointer hover:bg-zinc-700"
          >
            Run Code
          </button>
          <button
            onClick={clearOutput}
            className="block px-6 py-2 bg-zinc-800 text-white rounded-md cursor-pointer hover:bg-zinc-700"
          >
            Clear Output
          </button>
        </div>
        <div className="p-4">{output}</div>
      </div>
    </div>
  );
};

export default CodeEditor;
