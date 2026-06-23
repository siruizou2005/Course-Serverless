const LINKS = ["关于社区", "意见反馈", "管理后台"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5 py-9 sm:px-8">
        <div className="flex items-center gap-[10px]">
          <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-ink text-[13px] font-bold text-white">
            财
          </span>
          <span className="text-sm text-faint">
            SWUFE 选课社区 · 学生自治，仅供选课参考
          </span>
        </div>
        <div className="flex gap-[26px] text-sm font-medium text-muted">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors hover:text-ink"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
