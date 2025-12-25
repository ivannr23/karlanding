
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sprout, ArrowRight, Globe, TrendingUp, Sparkles, Target } from 'lucide-react';
import karlaPic from '../assets/karla_profile_pic.png';

const Hero = () => {
    const { scrollY } = useScroll();

    const y1 = useSpring(useTransform(scrollY, [0, 500], [0, 200]), { stiffness: 100, damping: 30 });
    const y2 = useSpring(useTransform(scrollY, [0, 500], [0, -150]), { stiffness: 100, damping: 30 });
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 md:py-24 px-6 overflow-hidden bg-white">
            {/* Background Ambient Glows */}
            <motion.div style={{ y: y1, opacity }} className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-nature-100/50 rounded-full blur-[120px] pointer-events-none" />
            <motion.div style={{ y: y2, opacity }} className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-50 text-nature-700 text-xs font-black mb-8 border border-nature-100 shadow-sm"
                    >
                        <Target size={14} className="text-nature-500 animate-pulse" />
                        <span className="uppercase tracking-widest">Agricultura de Precisión</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        Innovación <br />
                        <span className="gradient-text italic pb-2 px-6 inline-block">Sostenible</span> <br />
                        en el Campo
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium italic">
                        Karla Rodríguez Santos. Graduada en Ciencias Agrarias y Bioeconomía por la UPM. Especialista en Geoinformática y análisis de datos LiDAR.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <motion.a
                            href="#expertise"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-nature-600 text-white rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-nature-200 hover:bg-nature-700 transition-all text-sm md:text-base border-b-4 border-nature-800"
                        >
                            Ver Proyectos <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-sm text-sm md:text-base"
                        >
                            Contáctame
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Side: Organic Wave Profile Frame with COLOR */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
                        {/* The Organic Wave Background - Now with visible nature colors */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-nature-400/20 via-sky-300/20 to-gold-400/20 shadow-3xl animate-morph border border-nature-200/30"
                            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        />

                        {/* Main Glass Card with COLOR and Organic Shape */}
                        <div
                            className="relative z-10 w-[95%] h-[95%] bg-gradient-to-br from-white/90 to-nature-50/80 backdrop-blur-xl shadow-[0_32px_80px_-16px_rgba(22,163,74,0.15)] border-2 border-nature-100 p-8 flex flex-col items-center justify-center animate-morph"
                            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                        >

                            {/* Profile Pic - Centered with organic border */}
                            <div className="relative mb-8 group">
                                <div className="absolute -inset-4 bg-nature-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />
                                <div
                                    className="w-40 h-40 md:w-56 md:h-56 bg-white overflow-hidden border-4 border-nature-200 shadow-2xl relative z-10 transition-all duration-1000 animate-morph"
                                    style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                                >
                                    <img src={karlaPic} alt="Karla Rodríguez Santos" className="w-full h-full object-cover scale-110" />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 border-2 border-dashed border-nature-400 rounded-full opacity-20 pointer-events-none"
                                />
                            </div>

                            <div className="text-center mb-8 relative z-10">
                                <h3 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tighter mb-2">Karla Rodríguez Santos</h3>
                                <p className="text-[10px] md:text-xs font-black text-nature-600 uppercase tracking-[0.4em]">Ciencias Agrarias & Bioeconomía</p>
                            </div>

                            {/* Stats Banners - Colored for contrast */}
                            <div className="flex gap-4 w-full px-4 relative z-10 mt-2">
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex-1 bg-nature-600 p-4 rounded-[2rem] shadow-xl shadow-nature-200/40 flex flex-col items-center text-white border-b-4 border-nature-800"
                                >
                                    <span className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-80">Impacto</span>
                                    <span className="text-[11px] font-black uppercase">Sostenible</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex-1 bg-sky-600 p-4 rounded-[2rem] shadow-xl shadow-sky-200/40 flex flex-col items-center text-white border-b-4 border-sky-800"
                                >
                                    <span className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-80">Malla</span>
                                    <span className="text-[11px] font-black uppercase">Precisión</span>
                                </motion.div>
                            </div>

                            {/* Small floating accents */}
                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute top-12 right-12 text-gold-500"
                            >
                                <Sparkles size={24} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
