import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Database, Zap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Stereocarto",
            role: "Procesamiento de datos LiDAR (Prácticas)",
            period: "Dic 2025 - Actualidad",
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
            location: "Madrid, España (Híbrido)",
            details: [
                "Apoyo directo a expertos en Protección de Cultivos, colaborando en el seguimiento y en la recopilación de datos para el desarrollo de diferentes tipos de productos fitosanitarios.",
                "Gestión de datos y analíticas para la cuantificación del Límite Máximo de Residuos.",
                "Gestión de datos de ensayos de las estaciones de España y Portugal."
            ],
            icon: <Database size={24} />,
            color: "nature"
        },
        {
            company: "JM Escolar",
            role: "Viverista (Prácticas)",
            period: "Feb 2023 - Jun 2023",
            location: "Fuenlabrada, Madrid",
            details: [
                "Control de siembra y plantación de planta hortícola y ornamental.",
                "Técnicas de cultivo y desarrollo de plantas en invernadero.",
                "Manejo de riegos y fertilización.",
                "Monitorización y control de plagas y enfermedades.",
                "Preparación de pedidos y atención al cliente."
            ],
            icon: <Briefcase size={24} />,
            color: "gold"
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 bg-nature-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-16 flex items-center gap-3">
                    <Briefcase className="text-nature-600" size={32} />
                    Experiencia Profesional
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative"
                        >
                            <div className="h-full glass p-8 rounded-[2.5rem] border-white shadow-lg flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Visual Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 bg-${exp.color}-500`} />

                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-white shadow-sm text-${exp.color}-600`}>
                                        {exp.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{exp.company}</h3>
                                <p className={`text-sm font-bold text-${exp.color}-600 mb-6`}>{exp.role}</p>

                                <div className="space-y-4 flex-grow">
                                    {exp.details.map((detail, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300" />
                                            <p className="text-sm text-slate-600 leading-snug">{detail}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                                    <span className="text-xs text-slate-400 font-medium">{exp.location}</span>
                                    <ExternalLink size={16} className="text-slate-300 group-hover:text-nature-600 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
