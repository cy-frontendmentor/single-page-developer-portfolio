import Image from "next/image";
const Navigation = () => {
  return (
    <nav className=" absolute top-5 left-1/2 -translate-x-1/2 md:top-[29px] md:w-full md:px-[30px] ">
      <div className=" flex flex-col items-center space-y-6 md:flex-row md:justify-between ">
        <p className=" heading-m -tracking-[0.44px] md:text-[32px] md:leading-[32px]">
          adamkeyes
        </p>
        <div className=" flex   items-center space-x-[1.625rem] md:space-x-8">
          <div className=" relative h-5 w-5 md:h-6 md:w-6">
            <Image
              src="/images/icon-github.svg"
              width={24}
              height={24}
              alt="gitHub"
              layout="responsive"
            ></Image>
          </div>
          <div className=" relative h-5 w-5 md:h-6 md:w-6">
            <Image
              src="/images/icon-frontend-mentor.svg"
              width={24}
              height={24}
              alt="gitHub"
              layout="responsive"
            ></Image>
          </div>
          <div className=" relative h-5 w-5 md:h-6 md:w-6">
            <Image
              src="/images/icon-linkedin.svg"
              width={24}
              height={24}
              alt="gitHub"
              layout="responsive"
            ></Image>
          </div>
          <div className=" relative h-5 w-5 md:h-6 md:w-6">
            <Image
              src="/images/icon-twitter.svg"
              width={24}
              height={24}
              alt="gitHub"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
