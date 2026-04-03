"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; 

export default function ProjectCard({ titulo, descricao, link }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-md transition-all"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
        {titulo}
      </h3>
      
      <p className="text-slate-400 leading-relaxed mb-6">
        {descricao}
      </p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
      >
        Ver Projeto 
        <ExternalLink size={16} />
        <span className="absolute inset-0 z-0" /> {/* Aumenta a área clicável se desejar */}
      </a>
    </motion.div>
  );
}