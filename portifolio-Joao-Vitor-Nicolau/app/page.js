"use client";

import React from "react";
import { motion } from "framer-motion";
import ChangingText from "./components/ChangindText/ChangingText";
import Layout from "./components/layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import SkillsSection from "./components/SkillBar/SkillsSection";
import TimelineItem from "./components/TimelineItem/VerticalTimeline";
import Reveal from "./components/Reveal/Reveal";

export default function Home() {
  const timelineEvents = [
    {
      title: 'ETEC Dr. Júlio Cardoso',
      subtitle: '2021 - 2023',
      description: 'Eletrônica.',
    },
    {
      title: 'Fatec FRANCA | Dr. Thomaz Novelino',
      subtitle: '01/2024 - 11/2026',
      description: 'Desenvolvimento de Software Multi - Plataforma.',
    },
    {
      title: 'SoftUp ERP',
      subtitle: '(21/03/2024) - (03/06/2024)',
      description: 'Atendimento e suporte ao usuário, correção de parte tributaria para clientes, apoio no setor de implementação. ',
    },
    {
      title: 'Usina de Laticinios Jussara',
      subtitle: '(04/11/2024) - Atual',
      description: 'Manutenção no banco de dados, lançamento de atualização de sistema, suporte ao usuário.',
    },
  ];

  return (
    <Layout>
      <header className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] " />

        <div className="flex flex-col items-center text-center space-y-6">
          <Reveal>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-baskervville tracking-tight leading-none">
              João Vitor <br className="md:hidden" />
              <span className="text-orange-400 font-grotesk italic drop-shadow-sm">
                Nicolau
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-xl md:text-2xl font-light text-gray-400 max-w-xl">
              Desenvolvedor{" "}
              <span className="text-white font-medium">Front-End</span> focado
              em experiências digitais
              <span className="text-orange-400 font-grotesk ml-2">
                minimalistas e eficientes.
              </span>
            </h2>
          </Reveal>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 text-xs uppercase tracking-widest"
          >
            <span className="animate-bounce">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-orange-400 to-transparent" />
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-24">
        <section className="flex flex-col items-center justify-center min-h-[60vh]">
          <Reveal delay={0.3}>
            <div className="text-center space-y-16">
              <p className="text-3xl md:text-5xl text-gray-300 font-light leading-snug max-w-4xl mx-auto">
                Construo interfaces{" "}
                <strong className="text-white block mt-2 border-b-2 border-orange-400/50 pb-2 italic">
                  <ChangingText />
                </strong>
              </p>

              <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto border-l border-orange-400/20 pl-8">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Sou um desenvolvedor apaixonado por criar interfaces modernas
                  e responsivas, utilizando o poder do
                  <span className="text-white font-semibold">
                    {" "}
                    Next.js e React.
                  </span>
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Busco constantemente unir design limpo com performance,
                  garantindo que cada linha de código contribua para uma
                  <span className="text-orange-400 font-grotesk">
                    {" "}
                    experiência memorável.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="py-20">
          <Reveal delay={0.2}>
            <h3 className="text-center text-4xl font-bold mb-16">
              Tech <span className="text-orange-400">Stack</span>
            </h3>
          </Reveal>
          <SkillsSection />
        </section>

        <section className="max-w-4xl mx-auto py-20">
          <Reveal>
            <h3 className="text-3xl font-bold mb-16 border-l-4 border-orange-400 pl-4 uppercase tracking-tighter">
              Trajetória <span className="text-orange-400">&</span> Experiência
            </h3>
          </Reveal>
          <Reveal>
            <TimelineItem events={timelineEvents} />
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h3 className="text-3xl font-bold mb-12 border-l-4 border-orange-400 pl-4 uppercase tracking-tighter">
              Projetos em Destaque
            </h3>
          </Reveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Seus ProjectCards aqui */}
            <ProjectCard
              titulo="LandingPage - Pizzaria"
              descricao="Uma landing page para uma pizzaria, com cardápio interativo."
              link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/PizzariaPortifolio"
            />
            <ProjectCard
              titulo="Black Holes"
              descricao="Uma aplicação web que tem como objetivo apresentar informações sobre buracos negros, baseando-se na estética para atrair a curiosidade."
              link="https://github.com/Joao-Vitor-Nicolau-dos-Santos/Black-Holes"
            />
            {/* <ProjectCard titulo="Memo Notes" descricao="Uma aplicação para criar anotações rápidas e organizadas." link="..." /> */}
            {/* <ProjectCard titulo="Spotify Clone" descricao="Um clone do Spotify, com funcionalidades de reprodução de músicas." link="..." /> */}
          </motion.div>

        </section>
      </main>

      {/* Footer Minimalista */}
      <footer className=" border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-baskervville italic">
              João Vitor Nicolau.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              &copy; {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
          </div>

          <nav className="inline-flex items-center gap-8 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <a
              href="..."
              className="relative group text-gray-400 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:text-orange-400"
            >
              GitHub
              {/* Efeito de Brilho Inferior (Underline Glow) */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 shadow-[0_0_8px_#f97316] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="..."
              className="relative group text-gray-400 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:text-orange-400"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 shadow-[0_0_8px_#f97316] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
        </div>
      </footer>
      {/* </div> */}
    </Layout>
  );
}