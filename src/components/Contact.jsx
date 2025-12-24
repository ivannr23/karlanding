import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Globe, MapPin, Send, ShieldCheck, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // FormSubmit Endpoint (using the one from neoncore for consistency)
            const response = await fetch('https://formsubmit.co/ajax/karlanavadijos3012@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _subject: `🌱 Nuevo mensaje de contacto: ${data.name}`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            const result = await response.json();
            if (result.success === "true") {
                setStatus('success');
                formRef.current?.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                            <a href="mailto:karlanavadijos3012@gmail.com" className="flex items-center gap-4 group">
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
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-12 text-center"
                                >
                                    <div className="flex justify-center mb-6 text-nature-400">
                                        <ShieldCheck size={80} className="animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
                                    <p className="text-slate-400 mb-8">
                                        Gracias por contactar. Te responderé lo antes posible.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 bg-nature-600 text-white font-bold rounded-xl hover:bg-nature-500 transition-colors"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Nombre</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1">Asunto</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mensaje</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nature-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-4 bg-nature-600 hover:bg-nature-500 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-nature-900/40"
                                    >
                                        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                                        <Send size={18} />
                                    </button>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-400 justify-center text-xs mt-4">
                                            <AlertCircle size={14} />
                                            Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                                        </div>
                                    )}
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
