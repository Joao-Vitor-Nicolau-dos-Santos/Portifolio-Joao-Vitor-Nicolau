"use client";

import React from "react";
import { motion } from "framer-motion";
import ChangingText from "./components/ChangindText/ChangingText";
import Layout from "./components/layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import SkillsSection from "./components/SkillBar/SkillsSection";
import Reveal from "./components/Reveal/Reveal";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-dark text-white mt-8 ml-10 mr-10">
        <header className="w-full h-screen flex items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <Reveal>
              <h1 className="text-8xl font-baskervville text-center mx-auto">
                João Vitor{" "}
                <span className="text-orange-400 font-grotesk">Nicolau</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl font-regular m-4">
                Olá, sou um Desenvolvedor{" "}
                <span className="text-orange-400 font-grotesk">Front-End</span>
              </h2>
            </Reveal>
          </div>
        </header>

        <main className="flex-1 flex flex-col px-1">
          <div className="justify-center h-screen">
            <Reveal delay={0.3}>
              <p className="text-3xl text-gray max-w-2xl m-4">
                Construo interfaces{" "}
                <strong>
                  <ChangingText />
                </strong>
              </p>
            </Reveal>

            <div className="flex flex-col md:flex-row items-center  gap-12 w-full mx-auto">
              <Reveal delay={0.4}>
                <div className="md:w-1/2 text-center">
                  <h3 className="text-2xl font-bold">
                    Sobre{" "}
                    <span className="text-orange-400 font-grotesk">mim.</span>
                  </h3>
                  <div className="mt-4 max-w-2xl">
                    <p className="text-xl text-gray-300">
                      Sou um desenvolvedor Front-End apaixonado por criar
                      interfaces modernas e responsivas. Tenho conhecimentos em{" "}
                      <span className="text-orange-400 font-grotesk">
                        <strong> React, Next.js e Tailwind CSS.</strong>
                      </span>
                    </p>
                    <p className="text-xl text-gray-300 mt-4">
                      Estou sempre em busca de novos desafios e oportunidades
                      para aprender e crescer na área de desenvolvimento web.
                    </p>
                  </div>
                </div>
              </Reveal>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.5 },
                }}
                className="md:w-1/4 flex justify-center bg-radial from-black-1000 to-gray-900 rounded-full shadow-xl p-10 transition-transform duration-1000"
              >
                <div className="w-60 h-1 bg-orange-400 rounded-xl shadow-[0_0_30px_10px_rgba(255,140,30,0.6)]"></div>
              </motion.div>
            </div>
          </div>

          <Reveal delay={0.5}>
            <div className="h-screen">
              <SkillsSection />
            </div>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto w-full max-w-6xl px-4 text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Reveal delay={0.6}>
              <ProjectCard
                titulo="LandingPage - Pizzaria"
                descricao="Uma landing page para uma pizzaria, com cardápio interativo."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/PizzariaPortifolio.git"
              />
            </Reveal>

            <Reveal delay={0.7}>
              <ProjectCard
                titulo="Black Holes"
                descricao="Uma aplicação web que tem como objetivo apresentar informações sobre buracos negros, basenado-se na estética para atrair a curiosidade."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Black-Holes"
              />
            </Reveal>

            <Reveal delay={0.8}>
              <ProjectCard
                titulo="Memo Notes"
                descricao="Uma aplicação web de anotações simples com conexão com um banco de dados SQL."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/memonotes"
              />
            </Reveal>

            <Reveal delay={0.9}>
              <ProjectCard
                titulo="Spotify Clone"
                descricao="Um clone da interface do Spotify, foi o ínicio dos meus estudos em Tailwind."
                link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Sppotify-Interface-Using-TailWind"
              />
            </Reveal>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-16 py-6 text-center text-gray-400 text-sm">
          <p>
            Feito com ❤️ por João Vitor Nicolau dos Santos
            <br />
            <a
              href="https://github.com/Joao-Vitor-Nicolau-dos-Santos"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/joão-vitor-nicolau-dos-santos/"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </Layout>
  );
}
