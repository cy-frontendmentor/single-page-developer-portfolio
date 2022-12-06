import Image from "next/image";

import patternRing from "../../public/images/pattern-rings.svg";

const SkillSection = () => {
  return (
    <section className="relative  max-w-[1110px]  px-4 ">
      <div className="absolute -bottom-[65px] -right-[358px] md:top-[387px] md:-right-[362px] ">
        <Image
          src={patternRing}
          alt=""
          width={530}
          height={129}
          className=""
        ></Image>
      </div>
      <div className=" roy-grid  gap-y-6 border-y-[1px] py-10 md:gap-y-[52px]  md:border-b-0 md:pt-[52px] md:pb-[100px] sl:pb-[140px] ">
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            HTML
          </h5>
          <p className="  font-medium leading-[26px] text-grey">
            4 Years Experience
          </p>
        </div>
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            CSS
          </h5>
          <p className=" font-medium leading-[26px] text-grey">
            4 Years Experience
          </p>
        </div>
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            JavaScript
          </h5>
          <p className=" font-medium leading-[26px] text-grey">
            4 Years Experience
          </p>
        </div>
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            Accessibility
          </h5>
          <p className=" font-medium leading-[26px] text-grey">
            4 Years Experience
          </p>
        </div>
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            React
          </h5>
          <p className=" font-medium leading-[26px] text-grey">
            3 Years Experience
          </p>
        </div>
        <div className=" grid gap-y-[1px] text-center md:gap-y-[14px] md:text-left">
          <h5 className=" md:heading-l -translate-x-[1px] text-[32px] font-bold leading-[40px]">
            Sass
          </h5>
          <p className=" font-medium leading-[26px] text-grey">
            3 Years Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
