import SkillSection from "../components/UI/skillSection";
import Header from "../components/UI/header";
import ProjectsSection from "../components/projects/projectsSection";
import Footer from "../components/UI/footer";
const page = () => {
  return (
    <div className=" mx-auto flex max-w-[1440px] flex-col overflow-hidden  ">
      <Header></Header>

      <SkillSection></SkillSection>
      <ProjectsSection></ProjectsSection>

      <Footer></Footer>
    </div>
  );
};

export default page;
