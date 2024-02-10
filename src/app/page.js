"use client";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-navy-blue ">
      <div className="z-5 mx-auto z-0">
        <div className="container mx-auto m-20">
          <header className="max-w-screen-sm o">
            <h1 className="text-5xl font-bold three-d-text">
              Viktor <span className="text-sky-500">Velizarov</span>
            </h1>
            <p className="text-sm mt-5">Software Mobile & UX/UI designer</p>
          </header>
          <br />
          <hr className="border-t border-gray-600 my-2"></hr>
          <section id="about" className="my-10 ">
            <p>
              Im Viktor, a 21-year-old student at Fontys ICT Eindhoven,
              specializing in Media and Design. As an ambitious front-end
              developer with a strong design sensibility, Im committed to
              learning and growing in the field. Known for excellent time
              management, I prioritize work effectively.
            </p>
          </section>

          <hr className="border-t border-gray-600 my-2"></hr>
          <section id="skills" className="my-10">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Skills
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-4">
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                JavaScript
              </span>
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Node.js
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                React.js
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Swift
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Kotlin
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                PWA
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Figma
              </span>{" "}
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Vue/Nuxt
              </span>
              <span className="text-slate-500 rounded border px-4 py-2 border-slate-500">
                Adobe Photoshop
              </span>
            </div>
          </section>
          <hr className="border-t border-gray-600 my-2"></hr>

          <section id="projects" className="my-10">
            <div></div>
          </section>
        </div>
      </div>
      <ParticlesBackground />
    </main>
  );
}
