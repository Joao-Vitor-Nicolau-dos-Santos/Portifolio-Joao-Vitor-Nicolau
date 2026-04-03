"use client";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function SkillsSection() {
  const categories = [
    {
      title: "Soft",
      skills: [
        { nome: "Criatividade", proporcao: "100%" },
        { nome: "Comunicação", proporcao: "87%" },
        { nome: "Trabalho em equipe", proporcao: "100%" },
        { nome: "Liderança", proporcao: "87.5%" },
        { nome: "Proatividade", proporcao: "90%" },
      ]
    },
    {
      title: "Hard",
      skills: [
        { nome: "HTML, CSS e JavaScript", proporcao: "95%" },
        { nome: "Next.js & React", proporcao: "85%" },
        { nome: "Tailwind CSS", proporcao: "90%" },
        { nome: "Java / Spring", proporcao: "70%" },
        { nome: "Node.js", proporcao: "75%" },
      ]
    }
  ];

  return (
    <section className="py-24 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 rounded-2xl  bg-slate-900/50 p-8 backdrop-blur-md transition-all">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">
              <span className="text-orange-500">{cat.title}</span> Skills
            </h2>
            
            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <motion.div key={skill.nome} variants={itemVariants}>
                  <SkillBar nome={skill.nome} proporcao={skill.proporcao} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}