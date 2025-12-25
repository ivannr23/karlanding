
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Zap, Database, Map, BarChart,
    Binary, Users, MousePointer2, Settings,
    ShieldCheck, Leaf
} from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const skillGroups = [
        {
            title: "Técnicas Agrícolas",
            icon: <Leaf className="text-nature-600" />,
            skills: [
                { name: "Agronomía", level: 95 },
                { name: "Sanidad Vegetal", level: 90 },
                { name: "Producción Vegetal", level: 85 },
                { name: "Riego y Suelos", level: 80 }
            ]
        },
        {
            title: "Software & Análisis",
            icon: <Database className="text-sky-600" />,
            skills: [
                { name: "QGIS / SIG", level: 90 },
                { name: "MATLAB", level: 75 },
                { name: "Análisis LiDAR", level: 80 },
                { name: "Microsoft Office", level: 95 }
            ]
        },
        {
            title: "Gestión & I+D",
            icon: <Zap className="text-gold-600" />,
            skills: [
                { name: "Investigación I+D", level: 85 },
                { name: "Bioeconomía", level: 90 },
                { name: "Gestión de Datos", level: 85 },
                { name: "Trabajo en Equipo", level: 95 }
            ]
        }
    ];

    return (
        <section id="skills" ref={containerRef} className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Background Parallax Title */}
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
                className="absolute top-1/2 right-0 text-[15rem] font-black text-slate-50 select-none pointer-events-none uppercase leading-none"
            >
                Skills
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                    <div>
                        <ScrollReveal direction="left">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Habilidades <span className="gradient-text italic">Técnicas</span></h2>
                        </ScrollReveal>
                        <ScrollReveal direction="left" delay={0.2}>
                            <p className="text-slate-500 max-w-md text-lg font-medium leading-relaxed">
                                Un conjunto equilibrado de competencias teóricas y herramientas digitales para la nueva era del campo.
                            </p>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal direction="right" className="flex gap-6">
                        <div className="flex items-center gap-3 bg-nature-50 px-5 py-2.5 rounded-2xl border border-nature-100 shadow-sm">
                            <div className="w-4 h-4 rounded-full bg-nature-500 shadow-lg shadow-nature-500/50" />
                            <span className="text-xs font-black text-nature-700 uppercase tracking-widest">Avanzado</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gold-50 px-5 py-2.5 rounded-2xl border border-gold-100 shadow-sm">
                            <div className="w-4 h-4 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50" />
                            <span className="text-xs font-black text-gold-700 uppercase tracking-widest">Intermedio</span>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {skillGroups.map((group, groupIdx) => (
                        <div key={group.title} className="relative">
                            <ScrollReveal direction="up" delay={groupIdx * 0.1}>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{group.title}</h3>
                                </div>

                                <div className="space-y-10">
                                    {group.skills.map((skill, idx) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-black text-slate-700 uppercase tracking-tight text-sm">{skill.name}</span>
                                                <span className="text-xs font-black text-nature-600 bg-nature-50 px-3 py-1 rounded-full">{skill.level}%</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                                                    className={`h-full rounded-full shadow-lg ${group.title.includes('Técnicas') ? 'bg-gradient-to-r from-nature-400 to-nature-600 shadow-nature-500/20' :
                                                        group.title.includes('Software') ? 'bg-gradient-to-r from-sky-400 to-sky-600 shadow-sky-500/20' :
                                                            'bg-gradient-to-r from-gold-400 to-gold-600 shadow-gold-500/20'
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>

                {/* Novelty: Tools Carousel/Grid with premium interaction */}
                <div className="mt-32 pt-20 border-t border-slate-100">
                    <p className="text-center text-xs font-black text-slate-300 uppercase tracking-[0.5em] mb-16">Ecosystem & Stack</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-20">
                        {[
                            { icon: <Map />, name: "QGIS" },
                            { icon: <Binary />, name: "MATLAB" },
                            { icon: <MousePointer2 />, name: "LiDAR" },
                            { icon: <ShieldCheck />, name: "Syngenta GRP" },
                            { icon: <Settings />, name: "Precision Ag" }
                        ].map((tool, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.1 }}
                                    className="flex flex-col items-center gap-4 group opacity-40 hover:opacity-100 transition-all cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-nature-50 group-hover:text-nature-600 group-hover:shadow-2xl transition-all border border-transparent group-hover:border-nature-100">
                                        {tool.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{tool.name}</span>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
