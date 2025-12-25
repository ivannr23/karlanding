
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, ExternalLink, Database, Zap } from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const experiences = [
        {
            company: "Stereocarto",
            role: "Procesamiento de datos LiDAR (Prácticas)",
            period: "Dic 2024 - Actualidad",
            location: "Madrid, España (Híbrido)",
            details: [
                "Participación en proyectos de estimación de LAI y modelización estructural (QSM) en cultivos arbóreos mediante LiDAR y sensores multiespectrales."
            ],
            icon: <Zap size={24} />,
            color: "sky"
        },
        {
            company: "Syngenta",
            role: "Crop Protection Data Management Support (Prácticas)",
            period: "Dic 2023 - Jul 2024",
            location: "Madrid, España",
            details: [
                "Apoyo directo a expertos en Protección de Cultivos, colaborando en el seguimiento y en la recopilación de datos para el desarrollo de fitosanitarios.",
                "Gestión de datos de ensayos de las estaciones de España y Portugal."
            ],
            icon: <Database size={24} />,
            color: "nature"
        },
        {
            company: "JM Escolar",
            role: "Viverista (Prácticas)",
            period: "Feb 2023 - Jun 2023",
            location: "Madrid, España",
            details: [
                "Control de siembra y plantación de planta hortícola y ornamental.",
                "Técnicas de cultivo y desarrollo de plantas en invernadero.",
                "Monitorización y control de plagas y enfermedades."
            ],
            icon: <Briefcase size={24} />,
            color: "gold"
        }
    ];

    return (
        <section id="experience" ref={containerRef} className="py-32 px-6 bg-nature-50 relative overflow-hidden">
            {/* Background Parallax Title */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
                className="absolute top-1/2 left-0 text-[18rem] font-black text-slate-200/50 select-none pointer-events-none uppercase leading-none -translate-y-1/2 -rotate-90 origin-center"
            >
                Path
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <h2 className="text-5xl font-black text-slate-900 mb-20 flex items-center gap-4 uppercase tracking-tighter">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-nature-600">
                            <Briefcase size={32} />
                        </div>
                        Experiencia Profesional
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {experiences.map((exp, idx) => (
                        <ScrollReveal
                            key={exp.company}
                            delay={idx * 0.15}
                            direction="up"
                        >
                            <motion.div
                                whileHover={{ y: -20 }}
                                className="group relative h-full cursor-pointer"
                            >
                                <div className="h-full glass p-10 rounded-[3rem] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col hover:shadow-2xl transition-all duration-700 overflow-hidden bg-white/60 backdrop-blur-3xl">
                                    {/* Animated accent gradient */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 -translate-y-20 translate-x-20 rounded-full opacity-10 group-hover:scale-[3] group-hover:opacity-20 transition-all duration-1000 bg-gradient-to-br from-${exp.color}-400 to-${exp.color}-600 blur-2xl`} />

                                    <div className="flex justify-between items-start mb-10 relative z-10">
                                        <div className={`p-5 rounded-3xl bg-white shadow-xl text-${exp.color}-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                            {exp.icon}
                                        </div>
                                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-nature-600 transition-colors leading-none">
                                            {exp.company}
                                        </h3>
                                        <p className={`text-sm font-black text-${exp.color}-600 mb-8 uppercase tracking-widest`}>
                                            {exp.role}
                                        </p>

                                        <div className="space-y-5">
                                            {exp.details.map((detail, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-nature-200 group-hover:bg-nature-500 transition-colors" />
                                                    <p className="text-base text-slate-600 leading-snug font-medium italic">
                                                        "{detail}"
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center relative z-10">
                                        <span className="text-xs text-slate-400 font-black uppercase tracking-widest">{exp.location}</span>
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-nature-600 group-hover:text-white transition-all shadow-inner">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
