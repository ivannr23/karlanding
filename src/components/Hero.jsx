import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, ArrowRight, Globe, TrendingUp } from 'lucide-react';
import karlaPic from '../assets/karla_profile_pic.png';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <section className="relative min-h-[110vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-32 md:pt-20 px-6">
            {/* Background Elements */}
            <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-nature-200/40 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-sky-200/40 rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-1000" />

            {/* Parallax Floating Shapes - Disabled on Mobile for better performance/simplicity */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-20 right-[15%] w-32 h-32 bg-nature-400/20 organic-shape hidden md:block"
            />
            <motion.div
                style={{ y: y2, rotate: -rotate }}
                className="absolute bottom-40 left-[10%] w-48 h-48 bg-gold-400/20 organic-shape hidden md:block"
            />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left order-2 md:order-1 pt-8 md:pt-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-100 text-nature-700 text-sm font-bold mb-6 border border-nature-200 shadow-sm mx-auto md:mx-0">
                        <Sprout size={16} />
                        <span>Innovación & Sostenibilidad</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                        Liderando el futuro de la <span className="gradient-text">Agricultura Inteligente</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Karla Rodríguez Santos. Graduada en Ciencias Agrarias y Bioeconomía. Especializándose en Agricultura de Precisión para transformar el sector mediante datos y sostenibilidad.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <motion.a
                            href="#expertise"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-nature-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-nature-200 hover:bg-nature-700 transition-all text-sm md:text-base"
                        >
                            Ver Proyectos <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm text-sm md:text-base"
                        >
                            Sobre mí
                        </motion.a>
                    </div>

                    <div className="mt-12 flex justify-center md:justify-start items-center gap-8 border-t border-slate-200 pt-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-1">
                                <Globe className="text-sky-500" size={24} /> 2026
                            </span>
                            <span className="text-xs md:text-sm text-slate-500 font-medium">Master Completion</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-1">
                                <TrendingUp className="text-gold-500" size={24} /> Precision
                            </span>
                            <span className="text-xs md:text-sm text-slate-500 font-medium">AgTech Specialist</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-1 md:order-2 mb-4 md:mb-0"
                >
                    <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                        <div className="absolute inset-[-4%] organic-shape bg-gradient-to-br from-nature-400 via-sky-400 to-gold-400 shadow-2xl opacity-70 animate-growth md:scale-110" />
                        <div className="absolute inset-0 organic-shape bg-white/95 backdrop-blur-md flex items-center justify-center p-6 md:p-8 text-center border border-white shadow-xl">
                            <div className="relative z-10 w-full flex flex-col items-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-nature-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md overflow-hidden border-4 border-white">
                                    <img src={karlaPic} alt="Karla Rodríguez Santos" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1 leading-tight">Karla Rodríguez Santos</h3>
                                <p className="text-[10px] md:text-sm text-slate-500 font-medium italic mb-6">Ciencias Agrarias & Bioeconomía</p>

                                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full px-2">
                                    <div className="p-2 md:p-4 rounded-xl bg-nature-50 border border-nature-100 shadow-sm flex flex-col items-center justify-center">
                                        <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-widest mb-1">Impacto</p>
                                        <p className="font-bold text-nature-600 text-[10px] md:text-sm">Sostenible</p>
                                    </div>
                                    <div className="p-2 md:p-4 rounded-xl bg-sky-50 border border-sky-100 shadow-sm flex flex-col items-center justify-center">
                                        <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-widest mb-1">Malla</p>
                                        <p className="font-bold text-sky-600 text-[10px] md:text-sm">Precisión</p>
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
