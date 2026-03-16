"use client";

import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (cmd: string) => {

    if (cmd === "help") {
      setOutput([...output, "Commands: about, projects, contact"]);
    }

    else if (cmd === "about") {
      setOutput([
        ...output,
        "Rahul Kushwaha - React & React Native Developer"
      ]);
    }

    else if (cmd === "projects") {
      setOutput([
        ...output,
        "CityZen - AI city dashboard",
        "Echo - Real time chat app"
      ]);
    }

    else {
      setOutput([...output, "Command not found"]);
    }

  };

  return (
    <div className="bg-black text-green-400 h-screen p-10 font-mono">

      <div>
        {output.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="flex mt-4">

        <span>{">"}</span>

        <input
          className="bg-black outline-none ml-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommand(input);
              setInput("");
            }
          }}
        />

      </div>

    </div>
  );
}