import { motion } from 'framer-motion';
import { Sprout, BarChart3, FlaskConical, Globe } from 'lucide-react';

const Expertise = () => {
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
            nature: "bg-nature-50 text-nature-600 group-hover:bg-nature-600",
            gold: "bg-gold-50 text-gold-600 group-hover:bg-gold-600",
            sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-600"
        };
        return classes[color];
    };

    return (
        <section id="expertise" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        Áreas de Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-2xl mx-auto"
                    >
                        Combinando el conocimiento tradicional con las herramientas tecnológicas más disruptivas del sector agrónomo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area, idx) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group glass p-8 rounded-[2rem] border-slate-100 hover:border-nature-200 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 group-hover:text-white ${getColorClasses(area.color)}`}>
                                {area.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                                {area.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {area.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 border border-slate-100 px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
