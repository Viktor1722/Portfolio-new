"use client";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import Nextjs from "./image/NextJS-Dark.svg";
import JavaScript from "./image/JavaScript.svg";
import Node from "./image/NodeJS-Dark.svg";
import React from "./image/React-Dark.svg";
import Swift from "./image/Swift.svg";
import Kotlin from "./image/Kotlin-Dark.svg";
import Supabase from "./image/supabase.svg";
import Figma from "./image/Figma-Dark.svg";
import Angular from "./image/Angular-Dark.svg";
import Photoshop from "./image/Photoshop.svg";
import Firebase from "./image/Firebase-Dark.svg";
import Vue from "./image/Vue.svg";
import Cape from "./image/Cape.svg";
import Microlab from "./image/Microlab.svg";
import TypeScript from "./image/typeScript.svg";
import MongoDB from "./image/mongoDB.svg";
import Mqtt from "./image/mqtt.svg";
import owow from "./image/owow.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-navy-blue ">
      <div className="z-5 mx-auto z-0">
        <div className="container mx-auto m-20">
          <header className="max-w-screen-sm o">
            <h1 className="text-5xl font-bold three-d-text text-white">
              Viktor <span className="text-sky-500">Velizarov</span>
            </h1>
            <p className="text-sm mt-5 text-white">Software developer</p>
          </header>

          <br />
          <hr className="border-t border-gray-600 my-2"></hr>

          <section id="about" className="my-10 ">
            <p className="max-w-5xl text-white">
              I&#39;m a 24-year-old Software Engineer currently pursuing a
              Bachelor&#39;s degree in ICT at Fontys University of Applied
              Sciences in Eindhoven. I specialize in developing web and mobile
              applications with a keen focus on UX Design. As an ambitious
              Software Engineer, I&#39;m passionate about building rapid and
              scalable products that combine robust functionality with a strong
              design sensibility.
            </p>
          </section>

          <hr className="border-t border-gray-600 my-2"></hr>
          <section id="skills" className="my-10">
            <h2 className="text-2xl font-bold text-start three-d-text text-white">
              Skills
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-9">
              <Image src={JavaScript} alt="" width={50} />{" "}
              <Image src={Node} alt="" width={50} />{" "}
              <Image src={Nextjs} alt="" width={50} />{" "}
              <Image src={React} alt="" width={50} />{" "}
              <Image src={Swift} alt="" width={50} />{" "}
              <Image src={Kotlin} alt="" width={50} />{" "}
              <Image src={Supabase} alt="" width={50} />{" "}
              <Image src={Figma} alt="" width={50} />{" "}
              <Image src={Angular} alt="" width={50} />{" "}
              <Image src={Photoshop} alt="" width={50} />{" "}
              <Image src={Firebase} alt="" width={50} />{" "}
              <Image src={Vue} alt="" width={50} />{" "}
              <Image src={TypeScript} alt="" width={50} />{" "}
              <Image src={MongoDB} alt="" width={50} />{" "}
              <Image src={Mqtt} alt="" width={50} />{" "}
            </div>
          </section>

          <hr className="border-t border-gray-600 my-2"></hr>

          <section id="projects" className="my-10">
            <h2 className="text-2xl font-bold text-start three-d-text text-white">
              Latest Projects
            </h2>
            <div className="flex flex-wrap flex-row mt-4 gap-4 cursor-pointer">
              <a href="https://github.com/Viktor1722/Voice-Over-Generator">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">Voice Over Generator</span>
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722/Ai-assistant">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">Ai assistant</span>
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722/LuckyCoffee">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">Mystic Mocha</span>
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
                        className="text-white"
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
                    <span className="text-white">Court Vision</span>
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
                        className="text-white"
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
                    <span className="text-white">Student Corner</span>
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
                        className="text-white"
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
                    <span className="text-white">Honorsteine</span>
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722/Mrr-drones">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">Mrr drones</span>
                    <p className="text-sm mt-2 text-slate-300">
                      Web development project
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722/F1webapp">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">F1 data app</span>
                    <p className="text-sm mt-2 text-slate-300">
                      Web development project
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://huggingface.co/Viktor1717/scandinavian-interior-style1">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">
                      Scandinavian-interior-style
                    </span>
                    <p className="text-sm mt-2 text-slate-300">
                      LoRA training project
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://huggingface.co/synthgen-co/baroque-interior-lora">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">Baroque-interior-lora</span>
                    <p className="text-sm mt-2 text-slate-300">
                      LoRA training project
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
                        className="text-white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Viktor1722/Pdf-storage">
                <div className="flex flex-row w-80 rounded-lg px-4 py-2 border border-slate-500 items-center justify-evenly">
                  <div className="mr-10">
                    <span className="text-white">PDF storage</span>
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
                        className="text-white"
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
            <h2 className="text-2xl font-bold text-start three-d-text text-white">
              Work Experience
            </h2>

            <div className="flex items-center space-x-4	mt-5 p-5 border border-slate-500 rounded-lg">
              <Image src={owow} alt="" width={90} />{" "}
              <div className="pl-5">
                <h3 class="text-x font-semibold text-white">
                  Software Developer - Intern
                </h3>
                <p className="text-sm text-slate-300">
                  September 08 2025- Present
                </p>

                <p className="mt-4 text-white">
                  I am part of their Software development team as an Intern. My
                  project revolves around researching and developing AI agents
                  for clients which want to automate their business processes.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4	mt-5 p-5 border border-slate-500 rounded-lg">
              <Image src={Microlab} alt="" width={90} />{" "}
              <div className="pl-5">
                <h3 class="text-x font-semibold text-white">
                  Software Developer
                </h3>
                <p className="text-sm text-slate-300">
                  August 1st 2024 - 31st July 2025
                </p>

                <p className="mt-4 text-white">
                  I was working on a software solutions that simplify the
                  working process and practices for managing and maintaining
                  large office buildings.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4	mt-5 p-5 border border-slate-500 rounded-lg">
              <Image src={Cape} alt="" width={90} />{" "}
              <div className="pl-5">
                <h3 class="text-x font-semibold text-white">
                  Fullstack Developer - Intern
                </h3>
                <p className="text-sm text-slate-300">
                  September 23 2023 - February 24 2024
                </p>

                <p className="mt-4 text-white">
                  I was part of their Software development team as an Intern. My
                  main task was to integrate different Ai models and their
                  API&#39;s in their systems in order to increase productivity
                  of the customers.{" "}
                </p>
              </div>
            </div>
          </section>

          <br />
          <hr className="border-t border-gray-600 my-2"></hr>
          <br />

          <section id="connect">
            <h2 className="text-2xl font-bold text-start three-d-text text-white">
              Contact
            </h2>

            <ul className="list-inside ">
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
                  href="velizarovvictor@gmail.com"
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
              <li>
                <a
                  href="https://github.com/Viktor1722"
                  className="flex items-center gap-2 font-bold underline text-slate-300 hover:text-sky-500 mt-2"
                >
                  GitHub
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
            <p>© 2025</p>
          </footer>
        </div>
      </div>
      <ParticlesBackground />
    </main>
  );
}
