import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-nature-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-sky-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">
                            Cultivemos el <span className="text-nature-400">futuro</span> juntos.
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            Estoy abierta a nuevas oportunidades, colaboraciones en proyectos de investigación o simplemente para intercambiar ideas sobre agrotecnología.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:karla@example.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-nature-500/20 transition-colors">
                                    <Mail size={20} className="text-nature-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                                    <p className="text-lg font-medium group-hover:text-nature-400 transition-colors">karlanavadijos3012@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                                    <Linkedin size={20} className="text-sky-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                                    <p className="text-lg font-medium group-hover:text-sky-400 transition-colors">Karla Rodríguez Santos</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                                    <MapPin size={20} className="text-gold-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Ubicación</p>
                                    <p className="text-lg font-medium">Madrid, España</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-dark p-10 rounded-[2.5rem]"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Asunto</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mensaje</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full py-4 bg-nature-600 hover:bg-nature-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-nature-900/40">
                                Enviar mensaje <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
