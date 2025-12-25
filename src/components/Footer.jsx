import { Leaf, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-nature-600 rounded-full flex items-center justify-center text-white">
                        <Leaf size={16} />
                    </div>
                    <span className="font-bold text-white tracking-tight">
                        Karla Rodríguez Santos
                    </span>
                </div>

                <div className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Karla Rodríguez. Todos los derechos reservados.
                </div>

                <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
                    <a href="#" className="hover:text-nature-400 transition-colors">Inicio</a>
                    <a href="#about" className="hover:text-nature-400 transition-colors">Bio</a>
                    <a href="#experience" className="hover:text-nature-400 transition-colors">Portfolio</a>
                    <Link
                        to="/admin"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                        onClick={() => trackEvent('view_admin_panel')}
                    >
                        <BarChart3 size={14} />
                        Analytics
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

