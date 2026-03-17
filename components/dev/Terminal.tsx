"use client";

import { useState } from "react";
import CommandHandler from "./CommandHandler";
import { useEffect, useRef } from "react";

export default function Terminal() {

  const [history, setHistory] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const handleCommand = (e: any) => {
  if (e.key === "Enter") {

    const command = input.trim();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", value: command },
      { type: "output", value: command }
    ]);

    setInput("");
  }
};

const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [history]);

  return (
    <div className="bg-black min-h-screen flex justify-center pt-12 font-mono text-green-400">

      <div className="w-full max-w-4xl border border-green-800 rounded-lg shadow-lg">

        {/* TERMINAL HEADER */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-green-900">

          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <span className="ml-4 text-sm text-green-500">
            rahul@portfolio:~
          </span>

        </div>

        {/* TERMINAL BODY */}
        <div className="p-6 text-sm leading-relaxed">

          {/* USER INSTRUCTIONS */}
          {history.length === 0 && (
            <div className="mb-6 text-green-500">

              <p>Rahul Kushwaha Developer Terminal</p>

              <p className="mt-2">
                Type <span className="text-green-300">help</span> to see available commands.
              </p>

              <div className="mt-4 text-green-300">
                Example:
                <br />
                help
                <br />
                about
                <br />
                skills
                <br />
                projects
                <br />
                contact
                <br />
                resume
              </div>

            </div>
          )}

          {/* TERMINAL HISTORY */}
          {history.map((item, i) => (
            <div key={i}>

              {item.type === "command" && (
                <p className="text-green-300">
                  rahul@portfolio:~$ {item.value}
                </p>
              )}

              {item.type === "output" && (
                <CommandHandler command={item.value} />
              )}

            </div>
          ))}

          {/* INPUT */}
          <div className="flex gap-2 mt-2">

            <span className="text-green-300">
              rahul@portfolio:~$
            </span>

            <input
              className="bg-transparent outline-none flex-1 text-green-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />

          </div>

        </div>

      </div>
      <div ref={bottomRef} />

    </div>
  );
}