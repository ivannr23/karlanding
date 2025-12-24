import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Education = () => {
    const steps = [
        {
            title: "Máster en Agricultura de Precisión",
            institution: "Universidad Politécnica de Madrid (UPM)",
            period: "Sept 2024 - Junio 2026 (En curso)",
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
        <section id="education" className="py-24 px-6 bg-nature-50 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center flex items-center justify-center gap-3">
                    <GraduationCap className="text-nature-600" size={32} />
                    Formación Académica
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-nature-200 -translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-nature-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10">
                                    {step.current && (
                                        <div className="absolute inset-0 bg-nature-400 rounded-full animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass p-8 rounded-3xl border-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                        <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <Calendar size={14} className="text-nature-500" />
                                            <span className="text-sm font-bold text-nature-600 uppercase tracking-wider">
                                                {step.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-gold-600 font-bold mb-4">{step.institution}</p>

                                        <div className={`flex items-center gap-1 text-slate-400 text-sm mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <MapPin size={14} />
                                            <span>{step.location}</span>
                                        </div>

                                        <p className="text-slate-600 mb-6 line-clamp-3">
                                            {step.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            {step.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-white/50 border border-slate-200 rounded-lg text-xs font-medium text-slate-500">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for desktop */}
                                <div className="hidden md:block w-[10%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 glass rounded-3xl border-nature-200 border-2 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <CheckCircle2 size={120} className="text-nature-600" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Finalización Prevista: Junio 2026</h4>
                            <p className="text-slate-600">
                                Centrada en el Trabajo de Fin de Máster (TFM) aplicando modelización estructural QSM mediante LiDAR para la optimización de cultivos arbóreos.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <div className="w-16 h-16 bg-nature-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-nature-100">
                                85%
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
