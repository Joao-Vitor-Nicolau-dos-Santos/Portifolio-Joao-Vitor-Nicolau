"use client";
import { motion } from "framer-motion";

export default function SkillBar({ nome, proporcao = "0%" }) {
  // Dica: Use valores numéricos ou strings de porcentagem para mais controle
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm font-medium text-slate-300">
        <span>{nome}</span>
      </div>
      
      <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: proporcao }}
          transition={{ duration: 1.2, ease: "circOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}