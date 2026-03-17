import { useState } from "react";

export default function useTerminal() {

  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const runCommand = (command: string) => {

    if (command === "clear") {
      setHistory([]);
      return;
    }

    setHistory((prev) => [...prev, `rahul@portfolio:~$ ${command}`]);
  };

  return {
    history,
    setHistory,
    input,
    setInput,
    runCommand,
  };
}