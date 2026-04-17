"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ events }) => {
  if (!events || !Array.isArray(events) || events.length === 0) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center max-w-4xl mx-auto px-4">
      {/* Linha Central Vertical */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-orange-400/50 via-blue-500/20 to-transparent" />

      <div className="w-full space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col`}
          >
            {/* Espaçador para manter o equilíbrio no desktop */}
            <div className="hidden md:block w-5/12" />

            {/* Bolinha com Glow Laranja */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_#f97316] border-2 border-slate-950" />
            </div>

            {/* Card de Vidro */}
            <div className="w-full md:w-5/12 z-10">
              <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-500 shadow-2xl">
                {/* Detalhe de luz no topo do card */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-400">
                  {event.subtitle}
                </span>
                
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-orange-50 group-transition-colors">
                  {event.title}
                </h3>
                
                <p className="mt-4 text-slate-400 text-sm leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;