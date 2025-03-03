import Navbar from "./HeroComp/Navbar";
import WelcomeBoard from "./HeroComp/WelcomeBoard";
import AboutMe from "./HeroComp/AboutMe";
import Experience from "./HeroComp/Experience";
import ProjectCarousel from "./HeroComp/Project";
import ProjectTiles from "./HeroComp/ProjectTiles";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeBoard />
      <div id="about">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <ProjectCarousel />
        <ProjectTiles />
      </div>
      <footer className="footer footer-center bg-base-100 text-slate-300 p-4">
        <aside>
          <p>Designed and Built by Vaishnavi Pasumarthi. All right reserved. ©</p>
        </aside>
      </footer>
    </>
  );
}