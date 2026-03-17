"use client";

type Props = {
  devMode: boolean;
  setDevMode: (val: boolean) => void;
};

export default function ModeToggle({ devMode, setDevMode }: Props) {
  return (
    <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-full">

      {/* Portfolio */}
      <button
        onClick={() => setDevMode(false)}
        className={`px-4 py-1.5 rounded-full text-sm transition ${
          !devMode
            ? "bg-white shadow text-slate-900 font-medium"
            : "text-slate-500"
        }`}
      >
        Portfolio
      </button>

      {/* Developer View */}
      <button
        onClick={() => setDevMode(true)}
        className={`px-4 py-1.5 rounded-full text-sm transition ${
          devMode
            ? "bg-white shadow text-slate-900 font-medium"
            : "text-slate-500"
        }`}
      >
        Developer View
      </button>

    </div>
  );
}