import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, ArrowRight, Globe, TrendingUp } from 'lucide-react';
import karlaPic from '../assets/karla_profile_pic.png';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-nature-200/40 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Parallax Floating Shapes */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-20 right-[15%] w-32 h-32 bg-nature-400/20 organic-shape hidden md:block"
            />
            <motion.div
                style={{ y: y2, rotate: -rotate }}
                className="absolute bottom-40 left-[10%] w-48 h-48 bg-gold-400/20 organic-shape hidden md:block"
            />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-100 text-nature-700 text-sm font-bold mb-6 border border-nature-200 shadow-sm">
                        <Sprout size={16} />
                        <span>Innovación & Sostenibilidad</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                        Liderando el futuro de la <span className="gradient-text">Agricultura Inteligente</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Karla Rodríguez Santos. Graduada en Ciencias Agrarias y Bioeconomía. Especializándose en Agricultura de Precisión para transformar el sector mediante datos y sostenibilidad.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#expertise"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-nature-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-nature-200 hover:bg-nature-700 transition-all"
                        >
                            Ver Proyectos <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
                        >
                            Sobre mí
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900 flex items-center gap-1">
                                <Globe className="text-sky-500" size={24} /> 2026
                            </span>
                            <span className="text-sm text-slate-500 font-medium">Master Completion</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900 flex items-center gap-1">
                                <TrendingUp className="text-gold-500" size={24} /> Precision
                            </span>
                            <span className="text-sm text-slate-500 font-medium">AgTech Specialist</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 organic-shape bg-gradient-to-br from-nature-400 via-sky-400 to-gold-400 shadow-2xl opacity-80 animate-growth" />
                        <div className="absolute inset-4 organic-shape glass flex items-center justify-center p-8 text-center">
                            <div className="relative z-10">
                                <div className="w-32 h-32 mx-auto bg-nature-100 rounded-full flex items-center justify-center mb-6 shadow-inner overflow-hidden border-4 border-white">
                                    <img src={karlaPic} alt="Karla Rodríguez" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Karla Rodríguez</h3>
                                <p className="text-slate-500 font-medium italic">Ciencias Agrarias & Bioeconomía</p>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="p-4 rounded-2xl bg-white/50 border border-white shadow-sm">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Impacto</p>
                                        <p className="font-bold text-nature-600">Sostenible</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/50 border border-white shadow-sm">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Malla</p>
                                        <p className="font-bold text-sky-600">Precisión</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
