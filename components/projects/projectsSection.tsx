import Link from "next/link";
import Project from "./project/project";

const DUMMY_DATA = [
  {
    image: "/images/thumbnail-project-1-large.webp",
    title: "Design portfolio",
    tabs: ["HTML", "CSS"],
  },
  {
    image: "/images/thumbnail-project-2-large.webp",
    title: "E-learning landing page",
    tabs: ["HTML", "CSS"],
  },
  {
    image: "/images/thumbnail-project-3-large.webp",
    title: "Todo web app",
    tabs: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/images/thumbnail-project-4-large.webp",
    title: "Entertainment web app",
    tabs: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/images/thumbnail-project-5-large.webp",
    title: "Memory Game",
    tabs: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/images/thumbnail-project-6-large.webp",
    title: " Art gallery showcase",
    tabs: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section className=" my-20 mx-auto max-w-[1110px] md:mt-0">
      <div className=" px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className=" -leading-[1.14px] sl:heading-xl text-[40px] font-bold leading-[40px] -tracking-[2.05px] md:text-[72px] md:leading-[72px]">
            Projects
          </h2>
          <Link
            href="#"
            className=" z-40  cursor-pointer border-b-2 border-green pb-[10px] text-base font-bold  leading-[26px] tracking-[2.29px] transition-all hover:text-green  "
          >
            CONTACT ME
          </Link>
        </div>
        <div className="grid justify-center gap-y-10 md:grid-cols-2 md:gap-y-[60px] md:gap-x-[22px] sl:gap-y-[69px] sl:gap-x-[30px] ">
          {DUMMY_DATA.map(({ image, title, tabs }, i) => (
            <Project image={image} title={title} tabs={tabs} key={i}></Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
