
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-24">
      {/* 
        These placeholder divs are essential for the navbar's scrolling to work.
        Each 'id' corresponds to a link in your Navbar component.
        'h-screen' makes each section take up the full screen height for testing.
      */}

      <div id="intro" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Intro Section</h1>
        <p>This is where the intro content will go.</p>
      </div>

      <div id="skills" className="h-screen w-full pt-24">
        <h1 className="text-4xl font-bold">Skills Section</h1>
        <p>This is where the skills content will go.</p>
      </div>

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