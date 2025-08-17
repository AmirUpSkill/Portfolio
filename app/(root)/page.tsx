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

      <div id="experience" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Experience Section</h1>
        <p>This is where the experience content will go.</p>
      </div>

      <div id="achievements" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Achievements Section</h1>
        <p>This is where the achievements content will go.</p>
      </div>

      <div id="contact" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Contact Section</h1>
        <p>This is where the contact content will go.</p>
      </div>
    </main>
  );
}