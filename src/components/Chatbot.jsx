
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, BookOpen, Briefcase, Code, MapPin, Mail, Linkedin } from 'lucide-react';

const KNOWLEDGE_BASE = [
    {
        category: "perfil",
        keywords: ["quién", "quien", "karla", "biografía", "bio", "perfil", "mí", "mi"],
        response: "Karla Rodríguez Santos es una profesional apasionada por la agricultura inteligente y la sostenibilidad. Es graduada en Ciencias Agrarias y Bioeconomía por la UPM y actualmente se especializa con un Máster en Agricultura de Precisión. Su enfoque combina la agronomía tradicional con tecnologías de vanguardia como LiDAR y Big Data."
    },
    {
        category: "estudios",
        keywords: ["estudios", "estudió", "estudio", "formación", "universidad", "upm", "grado", "carrera", "título", "academia", "educación"],
        response: "Karla tiene una formación de élite en la Universidad Politécnica de Madrid (UPM). Es graduada en Ciencias Agrarias y Bioeconomía (2018-2024) y actualmente está cursando el Máster en Agricultura de Precisión (2024-2026), donde aplica tecnologías LiDAR para optimizar cultivos."
    },
    {
        category: "experience",
        keywords: ["experiencia", "trabajo", "trabajó", "empleo", "puesto", "empresa", "trayectoria", "profesional", "syngenta", "stereocarto", "donde"],
        response: "Su trayectoria incluye roles en empresas líderes: en Syngenta trabajó en el departamento de Seedcare (I+D y Marketing), y en Stereocarto se especializó en Geoinformática y análisis de datos LiDAR/SIG. Tiene una visión global de toda la cadena de valor agroalimentaria."
    },
    {
        category: "skills_tecnicas",
        keywords: ["habilidades", "skills", "capaz", "hace", "qué", "que", "sabes", "sabe", "técnicas", "agrónoma", "agronomía", "sanidad", "riego", "suelos"],
        response: "Como agrónoma de nueva generación, Karla domina la Sanidad Vegetal (90%), Producción Vegetal (85%) y gestión de Riego y Suelos. Su fuerte es conectar estos procesos naturales con la optimización mediante datos."
    },
    {
        category: "software",
        keywords: ["software", "programa", "herramientas", "tecnología", "digital", "qgis", "sig", "lidar", "matlab", "office", "datos", "computación"],
        response: "En el apartado digital, es experta en QGIS/SIG (90%) y análisis LiDAR (80%). También utiliza MATLAB para modelización y domina herramientas de gestión de datos y el paquete Microsoft Office completo."
    },
    {
        category: "especialidad",
        keywords: ["especialidad", "especializa", "precision", "precisión", "inteligente", "futuro", "innovación", "agtech", "teledetección", "sensores"],
        response: "Su gran especialidad es la Agricultura de Precisión. Utiliza sensores multiespectrales, LiDAR y Big Data para transformar el campo. Su TFM se centra precisamente en la modelización estructural QSM mediante LiDAR para optimizar cultivos arbóreos."
    },
    {
        category: "contacto",
        keywords: ["contacto", "contactar", "email", "correo", "escribir", "hablar", "linkedin", "redes", "teléfono", "donde"],
        response: "Puedes contactar con Karla a través de su correo: karlanavadijos3012@gmail.com o conectar con ella en su perfil profesional de LinkedIn. ¡Estará encantada de colaborar en proyectos innovadores!"
    },
    {
        category: "visión",
        keywords: ["visión", "objetivo", "meta", "valores", "filosofía", "futuro", "verde", "sostenible", "sostenibilidad"],
        response: "La visión de Karla es 'conectar los datos con la tierra para cultivar un futuro más verde'. Se guía por valores de precisión, integridad e innovación constante para enfrentar los retos climáticos actuales."
    }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: '¡Hola! Soy el asistente inteligente de Karla. Puedo detallarte su trayectoria en Syngenta, sus estudios en la UPM o sus habilidades técnicas con LiDAR y SIG. ¿Qué te gustaría saber?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [lastTopic, setLastTopic] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userMessage }]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const response = generateIntelligentResponse(userMessage);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: response }]);
            setIsTyping(false);
        }, 1200);
    };

    const generateIntelligentResponse = (text) => {
        const input = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let bestMatch = null;
        let highestScore = 0;

        // Advanced Scoring Algorithm
        KNOWLEDGE_BASE.forEach(item => {
            let score = 0;
            item.keywords.forEach(keyword => {
                const normalizedKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (input.includes(normalizedKeyword)) {
                    score += 10;
                    // Bonus for exact word match
                    const regex = new RegExp(`\\b${normalizedKeyword}\\b`, 'gi');
                    if (regex.test(input)) score += 5;
                }
            });

            // Bonus if it matches the current context/last topic
            if (lastTopic === item.category && score > 0) score += 5;

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        });

        // Semantic handling for greetings
        if (highestScore < 10) {
            if (input.match(/\b(hola|buenos dias|buenas|ey|saludos)\b/)) {
                return "¡Hola de nuevo! Estoy listo para responder cualquier duda sobre la formación, experiencia o habilidades técnicas de Karla. ¿Por dónde empezamos?";
            }
            if (input.match(/\b(gracias|genial|perfecto|ok|vale)\b/)) {
                return "¡De nada! Karla siempre busca nuevas oportunidades para aplicar la agricultura de precisión. ¿Quieres saber algo más sobre sus proyectos actuales?";
            }
        }

        if (bestMatch && highestScore >= 10) {
            setLastTopic(bestMatch.category);
            return bestMatch.response;
        }

        return "Esa es una pregunta interesante. No tengo el detalle exacto en mi base de datos, pero basándome en el perfil de Karla, te puedo contar sobre su experiencia en Syngenta, su máster en Agricultura de Precisión o sus habilidades con LiDAR. ¿Te interesa alguno de estos puntos?";
    };

    const SuggestionBadge = ({ text, onClick }) => (
        <button
            onClick={() => onClick(text)}
            className="px-3 py-1.5 bg-nature-50 hover:bg-nature-100 text-nature-700 text-xs font-bold rounded-full border border-nature-200 transition-all active:scale-95 flex items-center gap-1.5"
        >
            <Sparkles size={10} /> {text}
        </button>
    );

    const handleSuggestion = (text) => {
        setInputValue(text);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-[90vw] md:w-[420px] h-[600px] max-h-[80vh] glass rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-nature-600 p-6 flex justify-between items-center text-white relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                            />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                                    <Bot size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">AgroAsistente Karla</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                        <span className="text-[10px] uppercase tracking-widest font-black opacity-90">Inteligencia Agrónoma</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-nature-50/30">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-3 max-w-[88%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${msg.type === 'user' ? 'bg-sky-500 text-white' : 'bg-white text-nature-600 border border-nature-100'
                                            }`}>
                                            {msg.type === 'user' ? <User size={18} /> : <Bot size={18} />}
                                        </div>
                                        <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-md ${msg.type === 'user'
                                                ? 'bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-tr-none'
                                                : 'bg-white text-slate-700 rounded-tl-none border border-slate-100/50'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3 text-slate-400 italic text-xs border border-slate-100">
                                        <div className="flex gap-1">
                                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-nature-400 rounded-full" />
                                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-nature-400 rounded-full" />
                                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-nature-400 rounded-full" />
                                        </div>
                                        Analizando perfil...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        <div className="px-6 py-3 bg-white/50 border-t border-slate-100/50 flex flex-wrap gap-2">
                            <SuggestionBadge text="Experiencia" onClick={handleSuggestion} />
                            <SuggestionBadge text="Estudios UPM" onClick={handleSuggestion} />
                            <SuggestionBadge text="Duda sobre LiDAR" onClick={handleSuggestion} />
                            <SuggestionBadge text="Contacto" onClick={handleSuggestion} />
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSend} className="p-5 bg-white border-t border-slate-100">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Pregunta sobre Karla..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-4 focus:ring-nature-500/10 focus:border-nature-500 transition-all text-sm group-hover:bg-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 bg-nature-600 text-white rounded-xl hover:bg-nature-700 disabled:opacity-30 disabled:hover:bg-nature-600 transition-all shadow-lg shadow-nature-600/20 active:scale-90"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                    <BookOpen size={10} /> Knowledge Base V2.0
                                </p>
                                <div className="flex gap-4 opacity-30">
                                    <Briefcase size={12} />
                                    <Code size={12} />
                                    <MapPin size={12} />
                                </div>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(22,163,74,0.3)] transition-all duration-500 relative ${isOpen ? 'bg-slate-900 border-2 border-white/20' : 'bg-gradient-to-br from-nature-500 to-nature-700'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }}>
                            <X size={32} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -180 }} className="relative">
                            <MessageSquare size={32} fill="white" className="opacity-20 absolute inset-0 scale-125" />
                            <MessageSquare size={32} className="relative z-10" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-sky-500 rounded-full p-1.5 shadow-lg border-4 border-nature-50"
                    >
                        <Sparkles size={12} className="text-white" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
