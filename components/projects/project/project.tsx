import Image from "next/image";

import Link from "next/link";

const Project = ({
  image,
  title,
  tabs,
}: {
  image: string;
  title: string;
  tabs: Array<string>;
}) => {
  return (
    <div className="grid gap-y-5">
      <div className="group pointer-events-none relative lg:pointer-events-auto ">
        <Image src={image} alt="" width={540} height={400} className=""></Image>
        <div className=" absolute top-0 left-0 grid h-0 w-full  place-content-center bg-black bg-opacity-75 transition-all group-hover:h-full ">
          <div className="hidden justify-items-center gap-y-[30px] opacity-0 transition-all group-hover:grid group-hover:opacity-100 ">
            <Link
              href="#"
              className=" inline-block  border-b-2  border-green pb-[10px] text-base font-bold uppercase  leading-[26px] tracking-[2.29px] transition-all  hover:text-green "
            >
              VIEW PROJECT
            </Link>

            <Link
              href="#"
              className=" inline-block  border-b-2   border-green pb-[10px] text-base font-bold  uppercase leading-[26px] tracking-[2.29px] transition-all hover:text-green "
            >
              VIEW CODE
            </Link>
          </div>
        </div>
      </div>

      <h4 className=" heading-m uppercase">{title}</h4>
      <p className="flex space-x-[18px] text-grey">
        {tabs.map((tab, i) => (
          <span key={i}>{tab}</span>
        ))}
      </p>
      <div className="flex space-x-[30px] sl:hidden">
        <Link
          href="#"
          className=" inline-block  border-b-2 border-green  pb-[10px] text-base font-bold uppercase  leading-[26px] tracking-[2.29px] transition-all  hover:text-green "
        >
          VIEW PROJECT
        </Link>
        <Link
          href="#"
          className=" inline-block border-b-2 border-green   pb-[10px] text-base font-bold uppercase  leading-[26px] tracking-[2.29px] transition-all hover:text-green "
        >
          VIEW CODE
        </Link>
      </div>
    </div>
  );
};

export default Project;
