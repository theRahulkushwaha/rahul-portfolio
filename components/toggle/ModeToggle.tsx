"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ModeToggle({ setMode }: any) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setMode(!checked ? "dev" : "hr");
  };

  return (
    <div className="flex items-center gap-2">
      <span>HR</span>
      <Switch checked={checked} onCheckedChange={handleChange} />
      <span>DEV</span>
    </div>
  );
}