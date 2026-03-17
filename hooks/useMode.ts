import { useState } from "react";

export default function useMode() {
  const [devMode, setDevMode] = useState(false);

  const toggleMode = () => {
    setDevMode((prev) => !prev);
  };

  return {
    devMode,
    toggleMode,
    setDevMode,
  };
}