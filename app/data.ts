export type Course = {
  rank: string;
  name: string;
  tags: string[];
  teacher: string;
  dept: string;
  credits: number;
  time: string;
  rating: string;
  reviews: number;
};

export type Review = {
  course: string;
  teacher: string;
  dept: string;
  score: string;
  body: string;
  meta: string;
};

export const HOT_KEYWORDS = ["高等数学", "西方经济学", "计量经济学", "大学英语"];

export const FILTERS = [
  "院系",
  "学分",
  "上课时间",
  "课程类型",
  "评分",
  "给分",
  "难度",
];

export const POPULAR_COURSES: Course[] = [
  {
    rank: "01",
    name: "西方经济学",
    tags: ["给分高", "通识"],
    teacher: "李建国",
    dept: "经济学院",
    credits: 3,
    time: "周二 3–4节",
    rating: "4.8",
    reviews: 326,
  },
  {
    rank: "02",
    name: "计量经济学",
    tags: ["硬核", "收获大"],
    teacher: "王敏",
    dept: "统计学院",
    credits: 4,
    time: "周四 1–2节",
    rating: "4.6",
    reviews: 198,
  },
  {
    rank: "03",
    name: "公司金融",
    tags: ["干货多"],
    teacher: "陈晓",
    dept: "金融学院",
    credits: 3,
    time: "周一 5–6节",
    rating: "4.7",
    reviews: 254,
  },
  {
    rank: "04",
    name: "高等数学（上）",
    tags: ["偏难"],
    teacher: "张伟",
    dept: "数学学院",
    credits: 5,
    time: "周三 1–2节",
    rating: "4.2",
    reviews: 412,
  },
  {
    rank: "05",
    name: "会计学原理",
    tags: ["作业多"],
    teacher: "刘洋",
    dept: "会计学院",
    credits: 3,
    time: "周五 3–4节",
    rating: "4.5",
    reviews: 176,
  },
];

export const LATEST_REVIEWS: Review[] = [
  {
    course: "西方经济学",
    teacher: "李建国",
    dept: "经济学院",
    score: "5.0",
    body: "讲得特别清楚，考试不为难人，给分也很大方，推荐当通识来上。",
    meta: "匿名同学 · 2 小时前",
  },
  {
    course: "计量经济学",
    teacher: "王敏",
    dept: "统计学院",
    score: "4.5",
    body: "内容很硬核，跟下来收获很大，但每周作业要花不少时间，做好心理准备。",
    meta: "大三 · 经济学院 · 昨天",
  },
  {
    course: "公司金融",
    teacher: "陈晓",
    dept: "金融学院",
    score: "4.0",
    body: "案例丰富，老师很负责，作业稍多但都很有针对性，期末考查得比较细。",
    meta: "匿名同学 · 2 天前",
  },
];
