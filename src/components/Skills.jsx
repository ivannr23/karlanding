import { motion } from 'framer-motion';
import {
    Zap, Database, Map, BarChart,
    Binary, Users, MousePointer2, Settings,
    ShieldCheck, Leaf
} from 'lucide-react';

const Skills = () => {
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
        <section id="skills" className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Habilidades Técnicas</h2>
                        <p className="text-slate-500 max-w-md">
                            Un conjunto equilibrado de competencias teóricas y herramientas digitales para la nueva era del campo.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-nature-500" />
                            <span className="text-xs font-bold text-slate-400 uppercase">Avanzado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold-400" />
                            <span className="text-xs font-bold text-slate-400 uppercase">Intermedio</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillGroups.map((group, groupIdx) => (
                        <div key={group.title}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {group.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (groupIdx * 0.2) + (idx * 0.1) }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-slate-700">{skill.name}</span>
                                            <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={`h-full ${group.title.includes('Técnicas') ? 'bg-nature-500' :
                                                        group.title.includes('Software') ? 'bg-sky-500' : 'bg-gold-500'
                                                    }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools Grid */}
                <div className="mt-24 pt-16 border-t border-slate-100">
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Herramientas & Herramientas de Precisión</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="flex flex-col items-center gap-2">
                            <Map size={32} />
                            <span className="text-[10px] font-bold">QGIS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Binary size={32} />
                            <span className="text-[10px] font-bold">MATLAB</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MousePointer2 size={32} />
                            <span className="text-[10px] font-bold">LiDAR</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <ShieldCheck size={32} />
                            <span className="text-[10px] font-bold">Syngenta Compliance</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Settings size={32} />
                            <span className="text-[10px] font-bold">Data Mgmt</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
