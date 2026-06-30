import { useState } from "react";
import SmoothScrollProvider from "./components/layout/SmoothScrollProvider";
import LoadingScreen from "./components/layout/LoadingScreen";
import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";
import HeroScene from "./components/hero/HeroScene";
import AboutScene from "./components/about/AboutScene";
import SkillsForest from "./components/skills/SkillsForest";
import ProjectsKingdom from "./components/projects/ProjectsKingdom";
import JourneyTimeline from "./components/timeline/JourneyTimeline";
import ExperienceHall from "./components/experience/ExperienceHall";
import ContactSunset from "./components/contact/ContactSunset";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScrollProvider>
      <LoadingScreen onFinish={() => setLoading(false)} />
      <ScrollProgress />
      <Navbar />
      <main aria-hidden={loading}>
        <HeroScene />
        <AboutScene />
        <SkillsForest />
        <ProjectsKingdom />
        <JourneyTimeline />
        <ExperienceHall />
        <ContactSunset />
      </main>
    </SmoothScrollProvider>
  );
}
