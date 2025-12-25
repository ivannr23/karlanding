
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const steps = [
        {
            title: "Máster en Agricultura de Precisión",
            institution: "Universidad Politécnica de Madrid (UPM)",
            period: "Sept 2024 - Junio 2026",
            location: "Madrid, España",
            description: "Especialización avanzada en el uso de tecnologías de precisión, sensores multiespectrales, LiDAR y Big Data aplicados a la sostenibilidad agrícola.",
            skills: ["Análisis de datos", "Agricultura de precisión", "Teledetección"],
            current: true
        },
        {
            title: "Grado en Ciencias Agrarias y Bioeconomía",
            institution: "Universidad Politécnica de Madrid (UPM)",
            period: "Sept 2018 - 2024",
            location: "Madrid, España",
            description: "Formación integral en agronomía, gestión de recursos naturales, economía agraria y biotecnología aplicada.",
            skills: ["Agronomía", "Sanidad Vegetal", "Bioeconomía"],
            current: false
        }
    ];

    return (
        <section id="education" ref={containerRef} className="py-32 px-6 bg-nature-50 relative overflow-hidden">
            {/* Background Parallax Title */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                className="absolute top-0 right-0 text-[12rem] font-black text-slate-200/40 select-none pointer-events-none uppercase leading-none"
            >
                Education
            </motion.div>

            <div className="max-w-4xl mx-auto relative z-10">
                <ScrollReveal>
                    <h2 className="text-5xl font-black text-slate-900 mb-20 text-center flex items-center justify-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-nature-600">
                            <GraduationCap size={32} />
                        </div>
                        Formación Académica
                    </h2>
                </ScrollReveal>

                <div className="relative">
                    {/* Novelty: Animated Vertical Progress Line */}
                    <motion.div
                        style={{ scaleY: useTransform(scrollYProgress, [0.1, 0.8], [0, 1]) }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-nature-400 via-sky-400 to-gold-400 origin-top -translate-x-1/2 rounded-full"
                    />

                    {/* Fixed background line for reference */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1.5 bg-slate-200 -translate-x-1/2 rounded-full opacity-50" />

                    <div className="space-y-24">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                {/* Pulse Dot */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-nature-600 shadow-[0_0_20px_rgba(22,163,74,0.4)] -translate-x-1/2 z-20 flex items-center justify-center">
                                    {step.current && (
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-nature-400 rounded-full"
                                        />
                                    )}
                                    <div className="w-2 h-2 bg-nature-600 rounded-full" />
                                </div>

                                {/* Content Card with ScrollReveal */}
                                <ScrollReveal
                                    direction={idx % 2 === 0 ? 'left' : 'right'}
                                    className="w-full md:w-[45%]"
                                >
                                    <div className="glass p-10 rounded-[2.5rem] border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer bg-white/60">
                                        <div className={`flex items-center gap-2 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <Calendar size={16} className="text-nature-500" />
                                            <span className="text-xs font-black text-nature-600 uppercase tracking-widest bg-nature-50 px-3 py-1 rounded-full">
                                                {step.period}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-nature-600 transition-colors uppercase tracking-tight">{step.title}</h3>
                                        <p className="text-gold-600 font-bold mb-6 flex items-center gap-2">
                                            {step.institution}
                                        </p>

                                        <div className={`flex items-center gap-1 text-slate-400 text-sm mb-6 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <MapPin size={14} />
                                            <span className="font-medium tracking-wide">{step.location}</span>
                                        </div>

                                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                            {step.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            {step.skills.map(skill => (
                                                <span key={skill} className="px-4 py-1.5 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-500 tracking-tighter shadow-sm group-hover:border-nature-200 transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Spacer */}
                                <div className="hidden md:block w-[10%]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final status badge */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-32 p-10 glass rounded-[3rem] border-nature-200 border-4 overflow-hidden relative shadow-2xl group">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-nature-100 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform"
                        />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-nature-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                                    Punto de Control
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Finalización Prevista: Junio 2026</h4>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Actualmente inmersa en la investigación aplicada. El TFM es el punto culminante donde la <span className="text-nature-600 font-bold uppercase">modelización estructural QSM</span> se une con los datos de campo para redefinir la gestión de frutales.
                                </p>
                            </div>
                            <div className="shrink-0 relative">
                                <svg className="w-24 h-24 transform -rotate-90">
                                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-nature-100" />
                                    <motion.circle
                                        cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent"
                                        strokeDasharray="251.2"
                                        initial={{ strokeDashoffset: 251.2 }}
                                        whileInView={{ strokeDashoffset: 251.2 * 0.15 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        className="text-nature-600"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-slate-800">
                                    85%
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Education;
