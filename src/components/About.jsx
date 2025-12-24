import { motion } from 'framer-motion';
import { User, Target, Award } from 'lucide-react';
import karlaPic from '../assets/karla_profile_pic.png';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-12 h-12 bg-nature-100 rounded-xl flex items-center justify-center text-nature-600">
                                <User size={24} />
                            </span>
                            Sobre mí
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-pretty">
                            <p>
                                Soy Karla Rodríguez Santos, una apasionada de la innovación agrícola y el desarrollo sostenible. Con una sólida base en <strong>Ciencias Agrarias y Bioeconomía</strong> por la Universidad Politécnica de Madrid, mi enfoque se centra en integrar la tecnología con los procesos naturales para optimizar la producción de manera responsable.
                            </p>
                            <p>
                                Actualmente, estoy ampliando mis horizontes a través de un <strong>Máster en Agricultura de Precisión</strong>, explorando herramientas como el análisis de datos LiDAR, SIG y modelización estructural para enfrentar los retos climáticos y económicos del sector.
                            </p>
                            <p>
                                Mi trayectoria académica y mis primeras experiencias profesionales en empresas líderes como Syngenta y Stereocarto me han permitido desarrollar un enfoque analítico y una visión global de la cadena de valor agroalimentaria. Mi objetivo actual es seguir <strong>ganando experiencia y profesionalizar mi perfil</strong> en proyectos que integren investigación, tecnología y respeto por el medio ambiente.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-nature-50 border border-nature-100">
                                <Target size={20} className="text-nature-600 mb-2" />
                                <h4 className="font-bold text-slate-900">Visión</h4>
                                <p className="text-sm text-slate-500 italic">"Conectar datos con la tierra para cultivar un futuro más verde."</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-gold-50 border border-gold-100">
                                <Award size={20} className="text-gold-600 mb-2" />
                                <h4 className="font-bold text-slate-900">Valores</h4>
                                <p className="text-sm text-slate-500 italic">Sostenibilidad, Precisión, Innovación e Integridad Profesional.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <div className="relative">
                            {/* Decorative background for the abstract "photo" area */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nature-100 rounded-full blur-[40px] opacity-50" />

                            <div className="relative glass p-4 rounded-3xl rotate-3 shadow-2xl">
                                <div className="aspect-[4/5] bg-gradient-to-tr from-nature-200 to-sky-200 rounded-2xl flex items-center justify-center overflow-hidden">
                                    {/* Since I don't have a real photo, I'll use a placeholder icon or an abstract growth animation */}
                                    <img src={karlaPic} alt="Karla Rodríguez Santos" className="w-full h-full object-cover" />
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ x: 20, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border-nature-200"
                                >
                                    <p className="text-3xl font-bold text-nature-600">UPM</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Formación Elite</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
