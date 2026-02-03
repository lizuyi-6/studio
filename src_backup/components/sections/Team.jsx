import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import { SectionHeader } from '../ui';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { TEAM_MEMBERS, TEAM_STATS } from '../../utils/constants';

const iconMap = { Linkedin, Mail, Github };

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="核心团队"
          title={<>
            认识我们的<span className="text-[#0066FF]">团队</span>
          </>}
          subtitle="由资深工程师、设计师和产品专家组成的专业团队"
          className="mb-16"
        />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div key={member.name} variants={staggerItem} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-neutral-900">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([key, url]) => {
                      if (!url) return null;
                      const Icon = iconMap[key.charAt(0).toUpperCase() + key.slice(1)];
                      if (!Icon) return null;
                      return (
                        <a 
                          key={key}
                          href={url} 
                          className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#0066FF] transition-colors"
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs text-[#0066FF] uppercase tracking-wider">{member.title}</span>
                <h3 className="text-xl font-semibold text-white mt-1 mb-1">{member.name}</h3>
                <p className="text-sm text-white/40 mb-3">{member.role}</p>
                <p className="text-white/50 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {TEAM_STATS.map((stat) => (
            <div key={stat.label} className="bg-black p-8 text-center">
              <div className="text-4xl font-bold text-[#0066FF] mb-2">{stat.value}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
