import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';

import { cn } from '../utils/cn';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre mí', href: '#about' },
        { name: 'Formación', href: '#education' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'glass py-3' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-10 h-10 bg-nature-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-nature-200">
                        <Leaf size={20} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-nature-900 hidden sm:block">
                        Karla Rodríguez Santos
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm font-medium text-slate-600 hover:text-nature-600 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nature-500 transition-all group-hover:w-full" />
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-5 py-2 bg-nature-600 text-white rounded-full text-sm font-semibold hover:bg-nature-700 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        Conectar
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-nature-900 focus:outline-none"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md mt-4 rounded-2xl overflow-hidden shadow-2xl border border-nature-100"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        setMobileMenuOpen(false);
                                        // If we are on home page, let the default anchor behavior work
                                        // But sometimes it needs a nudge if the menu transition is slow
                                        if (window.location.pathname !== '/') {
                                            window.location.href = '/' + link.href;
                                        }
                                    }}
                                    className="text-left text-lg font-black text-slate-700 hover:text-nature-600 transition-colors px-6 py-4 rounded-2xl hover:bg-nature-50 border border-transparent hover:border-nature-100 flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-nature-500" />
                                </a>
                            ))}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
