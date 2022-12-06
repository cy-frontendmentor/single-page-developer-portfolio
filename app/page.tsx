import SkillSection from "../components/UI/skillSection";
import Header from "../components/UI/header";
const page = () => {
  return (
    <div className=" max-w-[1440px] overflow-hidden xl:px-[165px]">
      <Header></Header>
      <SkillSection></SkillSection>
    </div>
  );
};

export default page;
