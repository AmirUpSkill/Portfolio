import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { IntroSection } from "@/components/sections/Intro-section";
import { SkillsSection } from "@/components/sections/skills-sections";

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-between pt-40">
          <IntroSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
          <SkillsSection/>
      <hr className="w-full border-gary-300/90 dark:border-gray-300/10 mt-10"/>

      <div id="projects" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Projects Section</h1>
        <p>This is where the projects content will go.</p>
      </div>
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10"/>
        <ExperienceSection/>
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10 "/>
        <AchievementsSection/>
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10"/>
      <ContactSection/>
      
    </main>
  );
}