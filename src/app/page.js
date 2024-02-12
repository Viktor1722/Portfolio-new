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
            <p className="text-sm mt-5">Software developer & UX/UI designer</p>
          </header>
          <br />
          <hr className="border-t border-gray-600 my-2"></hr>
          <section id="about" className="my-10 ">
            <p>
              Im Viktor, a 22-year-old student at Fontys ICT Eindhoven,
              specializing in Media and Design. As an ambitious front-end
              developer with a strong design sensibility, I commit to learning
              and growing in the field. Known for excellent time management, I
              prioritize work effectively.
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
                Next.js
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
            <h2 className="text-2xl font-bold text-start three-d-text">
              Latest <span className="text-sky-500">Projects</span>
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-4 cursor-pointer">
              <a href="https://github.com/Viktor1722">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Voice Over Generator</span>
                    <p className="text-sm mt-2 text-slate-500">
                      Web Development project
                    </p>
                  </div>
                  <div className="border border-slate-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Court Vision</span>
                    <p className="text-sm mt-2 text-slate-500">
                      Mobile Development project
                    </p>
                  </div>
                  <div className="border border-slate-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Student Corner</span>
                    <p className="text-sm mt-2 text-slate-500">
                      Web Development project
                    </p>
                  </div>
                  <div className="border border-slate-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Honorsteine</span>
                    <p className="text-sm mt-2 text-slate-500">
                      Mobile Development project
                    </p>
                  </div>
                  <div className="border border-slate-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </section>
          <hr className="border-t border-gray-600 my-2"></hr>
          <br />
          <section id="connect">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Contact
            </h2>
          </section>
        </div>
      </div>
      <ParticlesBackground />
    </main>
  );
}
