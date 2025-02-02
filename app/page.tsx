import Image from "next/image";
import Ball from "./HeroComp/Ball";
import Navbar from "./HeroComp/Navbar";
import WelcomeBoard from "./HeroComp/WelcomeBoard";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeBoard />
      <Ball/>
    </>
  );
}
