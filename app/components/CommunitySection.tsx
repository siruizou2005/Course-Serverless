import { LATEST_REVIEWS, POPULAR_COURSES } from "../data";
import { StarIcon } from "./icons";

function PopularCourses() {
  return (
    <div>
      <div className="mb-[6px] flex items-baseline justify-between">
        <h2 className="text-[22px] font-bold tracking-[-0.01em]">热门课程</h2>
        <a
          href="#"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          查看全部 →
        </a>
      </div>

      {POPULAR_COURSES.map((course, i) => (
        <a
          key={course.rank}
          href="#"
          className={`flex items-center gap-[18px] py-[18px] transition-opacity hover:opacity-[0.62] ${
            i < POPULAR_COURSES.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <span className="w-[26px] text-[15px] font-medium text-faint">
            {course.rank}
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base font-bold">{course.name}</span>
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-chip px-2 py-[2px] text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-[5px] text-[13px] text-[#8a8a83]">
              {course.teacher} · {course.dept} · {course.credits}学分 ·{" "}
              {course.time}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">{course.rating}</div>
            <div className="text-xs text-faint">{course.reviews} 评价</div>
          </div>
        </a>
      ))}
    </div>
  );
}

function LatestReviews() {
  return (
    <div>
      <div className="mb-[18px] flex items-baseline justify-between">
        <h2 className="text-[22px] font-bold tracking-[-0.01em]">最新评价</h2>
        <a
          href="#"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          查看更多 →
        </a>
      </div>

      <div className="rounded-2xl border border-line bg-white px-[22px] py-[2px]">
        {LATEST_REVIEWS.map((review, i) => (
          <div
            key={`${review.course}-${i}`}
            className={`py-5 ${
              i < LATEST_REVIEWS.length - 1 ? "border-b border-line-soft" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[15px] font-semibold">{review.course}</div>
                <div className="mt-[3px] text-xs text-faint">
                  {review.teacher} · {review.dept}
                </div>
              </div>
              <div className="flex flex-none items-center gap-[5px]">
                <StarIcon className="h-3 w-3 text-accent" />
                <span className="text-sm font-semibold">{review.score}</span>
              </div>
            </div>
            <p className="mt-[11px] text-sm leading-[1.7] text-[#57574f]">
              {review.body}
            </p>
            <div className="mt-[9px] text-xs text-[#AAAAA2]">{review.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="flex flex-1 items-start border-t border-line bg-cream [scroll-margin-top:69px]"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.45fr_1fr] lg:gap-[60px]">
        <LatestReviews />
        <PopularCourses />
      </div>
    </section>
  );
}
