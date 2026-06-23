"use client";

import { useState } from "react";
import { SearchIcon } from "./icons";

const TABS = [
  { key: "course", label: "课程名" },
  { key: "code", label: "课号" },
  { key: "teacher", label: "教师" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const PLACEHOLDERS: Record<TabKey, string> = {
  course: "试试「高等数学」「西方经济学」…",
  code: "输入课号，如 ECON101",
  teacher: "输入教师姓名，如 张伟",
};

export default function SearchBar() {
  const [tab, setTab] = useState<TabKey>("course");

  return (
    <div className="mx-auto mt-[30px] w-full max-w-[800px]">
      <div className="flex justify-center gap-2">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`rounded-full px-[18px] py-2 text-sm font-semibold transition-all ${
                active
                  ? "bg-accent text-white"
                  : "bg-transparent text-muted hover:bg-cream"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-[14px] flex items-center gap-3 rounded-2xl border-[1.5px] border-ink bg-white py-[11px] pl-[22px] pr-[11px] shadow-[0_16px_44px_rgba(19,19,17,0.09)]"
      >
        <SearchIcon className="h-[22px] w-[22px] shrink-0 text-muted" />
        <input
          type="text"
          placeholder={PLACEHOLDERS[tab]}
          aria-label="搜索课程、课号或教师"
          className="min-w-0 flex-1 border-none bg-transparent text-lg text-ink outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-accent px-5 py-[14px] text-base font-semibold text-white transition-opacity hover:opacity-85 sm:px-8"
        >
          搜索
        </button>
      </form>
    </div>
  );
}
