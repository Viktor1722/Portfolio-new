"use client";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import Nextjs from "./image/NextJS-Dark.svg";
import JavaScript from "./image/JavaScript.svg";
import Node from "./image/NodeJS-Dark.svg";
import React from "./image/React-Dark.svg";
import Swift from "./image/Swift.svg";
import Kotlin from "./image/Kotlin-Dark.svg";
import PWA from "./image/PWA.svg";
import Figma from "./image/Figma-Dark.svg";
import Angular from "./image/Angular-Dark.svg";
import Photoshop from "./image/Photoshop.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-navy-blue ">
      <div className="z-5 mx-auto z-0">
        <div className="container mx-auto m-20">
          <header className="max-w-screen-sm o">
            <h1 className="text-5xl font-bold three-d-text">
              Viktor <span className="text-sky-500">Velizarov</span>
            </h1>
            <p className="text-sm mt-5 ">Software developer & UX/UI designer</p>
          </header>

          <br />
          <hr className="border-t border-gray-600 my-2"></hr>

          <section id="about" className="my-10 ">
            <p>
              Im, a 22-year-old Software Engineer currently pursuing a bachelor
              degree in Fontys ICT Eindhoven .I specialize in making of Web
              apps, mobile apps and UX Design. As an ambitious Software Engineer
              i love building rapid and scalable products with strong design
              sensibility. Furthermore I have for excellent time management, by
              prioritizing work effectively.
            </p>
          </section>

          <hr className="border-t border-gray-600 my-2"></hr>
          <section id="skills" className="my-10">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Skills
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-9">
              <Image
                src={JavaScript}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image src={Node} alt="" width={50} className="grayscale-[80%]" />{" "}
              <Image
                src={Nextjs}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image
                src={React}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image
                src={Swift}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image
                src={Kotlin}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image src={PWA} alt="" width={50} className="grayscale-[50%]" />{" "}
              <Image
                src={Figma}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image
                src={Angular}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
              <Image
                src={Photoshop}
                alt=""
                width={50}
                className="grayscale-[80%]"
              />{" "}
            </div>
          </section>

          <hr className="border-t border-gray-600 my-2"></hr>

          <section id="projects" className="my-10">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Latest Projects
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-4 cursor-pointer">
              <a href="https://github.com/Viktor1722">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Voice Over Generator</span>
                    <p className="text-sm mt-2 text-slate-300">
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

              <a href="https://github.com/Viktor1722/IOS-Basketball-coaching-app-">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Court Vision</span>
                    <p className="text-sm mt-2 text-slate-300">
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

              <a href="https://github.com/Viktor1722/Student-Corner-">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Student Corner</span>
                    <p className="text-sm mt-2 text-slate-300">
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

              <a href="https://github.com/xXManntXx/honorsteine/tree/iOs_app?tab=readme-ov-file">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span>Honorsteine</span>
                    <p className="text-sm mt-2 text-slate-300">
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

          <section id="work experience">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Work Experience
            </h2>

            <div className="flex items-center space-x-4	m-4 p-5 border border-slate-500 rounded-lg">
              <h2 className="text-xl">Cape</h2>

              <div className="pl-5">
                <h3 class="text-x font-semibold">Fullstack Developer</h3>
                <p className="text-sm text-slate-300">
                  September 23 - February 24
                </p>

                <p className="mt-4">
                  I was part of their Ai development team as an Intern. My main
                  task was to integrate different Ai models in their system in
                  order to increase productivity{" "}
                </p>
              </div>
            </div>
          </section>

          <br />
          <hr className="border-t border-gray-600 my-2"></hr>
          <br />

          <section id="connect">
            <h2 className="text-2xl font-bold text-start three-d-text">
              Contact
            </h2>

            <ul className="list-inside">
              <li>
                <a
                  href="https://www.linkedin.com/in/viktor-velizarov-632ab1243/"
                  className="flex items-center gap-2 font-bold underline text-slate-300 hover:text-sky-500 mt-2"
                >
                  Linkedin
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
                </a>
              </li>
              <li>
                <a
                  href="mailto:viktorvelizarov17@gmail.com"
                  className="flex items-center gap-2 font-bold underline text-slate-300 hover:text-sky-500 mt-2"
                >
                  Email
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
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/v1ktor_v"
                  className="flex items-center gap-2 font-bold underline text-slate-300 hover:text-sky-500 mt-2"
                >
                  Telegram
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
                </a>
              </li>
            </ul>
          </section>
          <br />
          <hr className="border-t border-gray-600 my-2"></hr>

          <footer className="text-slate-300 text-center mt-4">
            <p>Viktor Velizarov</p>
            <p>© 2024</p>
          </footer>
        </div>
      </div>
      <ParticlesBackground />
    </main>
  );
}
