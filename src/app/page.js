import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-navy-blue ">
      <div class="z-5 mx-auto">
        <div class="container mx-auto m-20">
          <header class="max-w-screen-sm o">
            <h1 class="text-4xl font-bold three-d-text font-satoshi ">
              Viktor <span class="text-sky-500">Velizarov</span>
            </h1>
            <p class="text-sm mt-5">
              Fornt-end, Mobile developer & UX Designer
            </p>
          </header>
          <br />
          <hr class="border-t border-gray-600 my-2"></hr>
          <section id="about" className="my-10 font-satoshi">
            <p>
              I'm Viktor, a 21-year-old student at Fontys ICT Eindhoven,
              specializing in Media and Design. As an ambitious front-end
              developer with a strong design sensibility, I'm committed to
              learning and growing in the field. Known for excellent time
              management, I prioritize work effectively.
            </p>
          </section>

          <hr class="border-t border-gray-600 my-2"></hr>
          <section id="skills" className="my-10 font-satoshi">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Skills
            </h2>
            <div className="flex flex-row mt-4">
              <span>Node.js</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
