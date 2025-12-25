import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, ShieldAlert, ArrowRight, Leaf } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate a small delay for premium feel
        setTimeout(() => {
            // The password requested by the user is "Paracuellos99"
            if (username.toLowerCase() === 'admin' && password === 'Paracuellos99') {
                trackEvent('admin_login_success');
                localStorage.setItem('karlanding_auth', 'true');
                onLogin();
            } else {
                trackEvent('admin_login_failed', { attempt: username });
                setError('Acceso denegado. Credenciales incorrectas.');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-nature-50 flex items-center justify-center p-6 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-nature-600 text-white mb-6 shadow-xl shadow-nature-600/20">
                        <Leaf size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin <span className="gradient-text">Access</span></h1>
                    <p className="text-slate-500 mt-2 font-medium">Inicia sesión para gestionar las métricas</p>
                </div>

                <div className="glass p-8 rounded-[32px] border border-white/50 shadow-2xl shadow-nature-900/5">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Usuario</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-slate-900 font-medium"
                                    placeholder="admin"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-slate-900 font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-center gap-2 text-red-500 text-sm font-semibold bg-red-50 p-3 rounded-xl border border-red-100"
                                >
                                    <ShieldAlert size={16} />
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-slate-900/20 group"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Entrar al Panel
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-slate-400 text-sm">
                    ¿Has perdido el acceso? Contacta con el equipo de soporte técnico.
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
