import Image from "next/image";
import Navbar from "./HeroComp/Navbar";
import WelcomeBoard from "./HeroComp/WelcomeBoard";
import AboutMe from "./HeroComp/AboutMe";
import Experience from "./HeroComp/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeBoard />
      <AboutMe/>
      <Experience/>
      
    </>
  );
}
