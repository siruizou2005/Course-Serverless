import { FILTERS, HOT_KEYWORDS } from "../data";
import { ChevronDown } from "./icons";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed, washed-out campus backdrop (SWUFE clock tower & lake) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/campus.jpg"
          alt=""
          fetchPriority="high"
          className="h-full w-full scale-[1.04] object-cover object-[center_45%] [filter:grayscale(0.3)_saturate(0.8)_blur(1.2px)]"
        />
        {/* White scrim: strongest through the center where text/search sit,
            lets the campus breathe faintly at the top (sky) and bottom (lake) */}
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.94)_40%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,0.86)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-69px)] max-w-[1200px] flex-col justify-center px-5 pb-[92px] pt-8 text-center sm:px-8">
        <p className="text-[13px] font-medium tracking-[0.22em] text-faint">
          西南财经大学 · 学生选课社区
        </p>
        <h1 className="mt-3 text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
          选课，先看评价
        </h1>
        <p className="mx-auto mt-[13px] max-w-[600px] text-base font-normal leading-[1.6] text-[#6E6E68]">
          真实课程评价、给分与难度数据，加上智能排课，一站式搞定每一个选课季。
        </p>

        <SearchBar />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-faint">
          <span>热门：</span>
          {HOT_KEYWORDS.map((kw, i) => (
            <span key={kw} className="flex items-center gap-2">
              <a
                href="#"
                className="text-[#4a4a45] transition-colors hover:text-ink"
              >
                {kw}
              </a>
              {i < HOT_KEYWORDS.length - 1 && (
                <span className="text-line-strong">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-[34px] flex max-w-[800px] flex-wrap justify-center gap-[10px]">
          {FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              className="flex items-center gap-[6px] rounded-full border border-line bg-white px-[15px] py-[9px] text-sm font-medium text-[#3a3a36] transition-colors hover:border-line-strong hover:bg-cream"
            >
              {label}
              <ChevronDown className="h-[13px] w-[13px] text-faint" />
            </button>
          ))}
        </div>

        <a
          href="#community"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[5px] text-xs font-medium tracking-[0.04em] text-ghost transition-colors hover:text-muted sm:flex"
        >
          <span>热门课程 · 最新评价</span>
          <ChevronDown className="h-[18px] w-[18px]" />
        </a>
      </div>
    </section>
  );
}
