import Image from "next/image";
import Navigation from "../navigation/navigation";
import patternRing from "../../public/images/pattern-rings.svg";
import Link from "next/link";
const Header = () => {
  return (
    <header className="relative max-w-[1110px] overflow-hidden  xl:overflow-visible ">
      <div className="absolute top-[124px] -left-[342px] md:top-[86px] md:-left-[265px] sl:top-[113px] ">
        <Image
          src={patternRing}
          alt=""
          width={530}
          height={129}
          className=""
        ></Image>
      </div>
      <div className="absolute top-[254px] right-0 translate-x-1/2 md:top-[471px] sl:right-[380px] sl:translate-x-0 ">
        <Image
          src="/images/pattern-circle.svg"
          alt=""
          width={129}
          height={129}
          className=""
        ></Image>
      </div>

      <Navigation></Navigation>

      <div className="relative grid justify-items-center px-4 pb-[80px] md:justify-items-start md:pl-8 md:pr-[290px] md:pt-[151px]  md:pb-[60px] sl:pr-[404px] sl:pt-[198px] sl:pb-[219px] xl:pl-0 ">
        <Image
          src="/images/image-profile-mobile.webp"
          alt="profile-pic"
          height={383}
          width={174}
          className="mb-10 justify-items-center md:hidden"
        ></Image>
        <div className=" absolute top-0 right-0 -z-30 hidden md:block">
          <Image
            src="/images/image-profile-tablet.webp"
            alt="profile-pic"
            height={600}
            width={322}
            className=" "
          ></Image>
        </div>
        <div className=" absolute top-0 right-0 -z-30 hidden sl:block">
          <Image
            src="/images/image-profile-desktop.webp"
            alt="profile-pic"
            height={720}
            width={445}
            className=" "
          ></Image>
        </div>
        <div className=" grid gap-y-6 text-center md:min-h-[449px]   md:gap-y-0 md:text-left">
          <h1 className=" sl:heading-xl text-[40px] leading-[40px] -tracking-[1.14px] md:mb-[60px] md:max-w-[706px] md:-translate-x-[2.05px] md:gap-y-0 md:text-[72px] md:leading-[72px] sl:mb-[43px]">
            Nice to meet you! I&apos;m {""}
            <span
              className="underline decoration-green decoration-4 underline-offset-8 md:decoration-[6px]
             md:underline-offset-[18px]"
            >
              Adam Keyes
            </span>
            .
          </h1>
          <p className="leading-[26px] md:mb-[34px] md:max-w-[445px] sl:mb-[66px]">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Link
            href="#contact"
            className=" inline-block justify-self-center border-b-2 border-green pb-[10px] text-base  font-bold leading-[26px] tracking-[2.29px] md:justify-self-start md:text-left "
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
