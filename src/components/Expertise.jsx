
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, BarChart3, FlaskConical, Globe } from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const Expertise = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const areas = [
        {
            title: "Agricultura Sostenible",
            description: "Implementación de prácticas que minimizan el impacto ambiental mientras optimizan el rendimiento de los cultivos a largo plazo.",
            icon: <Sprout size={32} />,
            color: "nature",
            tags: ["Rotación", "Biodiversidad", "Suelo"]
        },
        {
            title: "Bioeconomía & Gestión",
            description: "Análisis y desarrollo de modelos económicos basados en recursos biológicos renovables para una economía circular efectiva.",
            icon: <Globe size={32} />,
            color: "gold",
            tags: ["Economía Circular", "REDI", "Gestión"]
        },
        {
            title: "Investigación & I+D",
            description: "Aplicación del método científico para el desarrollo de nuevos productos fitosanitarios y técnicas de protección de cultivos.",
            icon: <FlaskConical size={32} />,
            color: "sky",
            tags: ["Ensayos", "Data Science", "Protocols"]
        },
        {
            title: "Análisis de Precisión",
            description: "Uso de sistemas LiDAR y sensores remotos para la modelización y toma de decisiones basada en datos geoespaciales.",
            icon: <BarChart3 size={32} />,
            color: "nature",
            tags: ["LiDAR", "SIG", "Python/MATLAB"]
        }
    ];

    const getColorClasses = (color) => {
        const classes = {
            nature: "bg-nature-50 text-nature-600 group-hover:bg-nature-600 shadow-nature-100",
            gold: "bg-gold-50 text-gold-600 group-hover:bg-gold-600 shadow-gold-100",
            sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 shadow-sky-100"
        };
        return classes[color];
    };

    return (
        <section id="expertise" ref={containerRef} className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Background Parallax Title */}
            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
                className="absolute bottom-0 left-0 text-[15rem] font-black text-slate-50 select-none pointer-events-none uppercase leading-none"
            >
                Expertise
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                            Áreas de <span className="gradient-text italic">Expertise</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                            Combinando el conocimiento tradicional con las herramientas tecnológicas más disruptivas del sector agrónomo.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area, idx) => (
                        <ScrollReveal
                            key={area.title}
                            delay={idx * 0.1}
                            direction={idx % 2 === 0 ? "up" : "down"}
                        >
                            <motion.div
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group glass p-10 rounded-[3rem] border-slate-100/50 hover:border-nature-200 transition-all duration-500 cursor-pointer h-full relative overflow-hidden bg-white/50"
                            >
                                {/* Hover background decorative circle */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${area.color}-500`} />

                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:text-white group-hover:shadow-2xl group-hover:rotate-6 ${getColorClasses(area.color)} shadow-xl`}>
                                    {area.icon}
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-nature-600 transition-colors leading-tight">
                                    {area.title}
                                </h3>
                                <p className="text-slate-500 mb-10 text-base leading-relaxed font-medium">
                                    {area.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {area.tags.map((tag, i) => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 group-hover:border-nature-200 group-hover:text-nature-600 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
