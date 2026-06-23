const NAV = ["课程库", "课程评价", "教师库", "智能排课"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-[14px]">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#" className="flex items-center gap-[11px]">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-[15px] font-bold text-white">
            财
          </span>
          <span className="text-[17px] font-bold tracking-[-0.01em]">
            SWUFE 选课社区
          </span>
        </a>

        <nav className="hidden items-center gap-[30px] text-[15px] font-medium text-[#4a4a45] md:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]">
          <a
            href="#"
            className="rounded-[10px] px-[14px] py-[9px] text-[15px] font-medium text-[#4a4a45] transition-colors hover:bg-cream"
          >
            登录
          </a>
          <a
            href="#"
            className="rounded-[11px] bg-accent px-[18px] py-[10px] text-[15px] font-semibold text-white transition-opacity hover:opacity-85"
          >
            注册
          </a>
        </div>
      </div>
    </header>
  );
}
