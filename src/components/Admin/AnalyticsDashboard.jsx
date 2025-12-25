import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    Users, Eye, Clock, Smartphone, Monitor, Globe,
    ArrowUpRight, ArrowDownRight, Activity, MousePointer2
} from 'lucide-react';
import { getInsights, getAnalyticsData } from '../../utils/analytics';
import { motion } from 'framer-motion';

const COLORS = ['#16a34a', '#0284c7', '#d97706', '#9333ea'];

import Login from './Login';

const AnalyticsDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('karlanding_auth') === 'true'
    );
    const [insights, setInsights] = useState(null);
    const [rawData, setRawData] = useState(null);

    useEffect(() => {
        if (!isAuthenticated) return;

        const data = getInsights();
        const raw = getAnalyticsData();
        setInsights(data);
        setRawData(raw);

        // Refresh interval
        const interval = setInterval(() => {
            setInsights(getInsights());
        }, 10000);

        return () => clearInterval(interval);
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Login onLogin={() => setIsAuthenticated(true)} />;
    }

    if (!insights) return <div className="p-10 text-center">Loading insights...</div>;

    const handleLogout = () => {
        localStorage.removeItem('karlanding_auth');
        setIsAuthenticated(false);
    };


    const chartData = insights.chartData;

    const deviceData = [
        { name: 'Desktop', value: insights.desktopUsers },
        { name: 'Mobile', value: insights.mobileUsers },
    ];

    const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
        const colorClasses = {
            nature: 'bg-nature-500/10 text-nature-600',
            sky: 'bg-sky-500/10 text-sky-600',
            gold: 'bg-gold-500/10 text-gold-600',
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-3xl border border-white/40 shadow-xl shadow-nature-900/5"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${colorClasses[color] || colorClasses.nature}`}>
                        <Icon size={24} />
                    </div>
                </div>
                <div>
                    <p className="text-slate-500 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">{value}</h3>
                </div>
            </motion.div>
        );
    };


    return (
        <div className="min-h-screen bg-nature-50 p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                            Analítica <span className="gradient-text">Web</span>
                        </h1>
                        <p className="text-slate-500 mt-2 font-medium">Información en tiempo real para la plataforma Karlanding</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
                        >
                            Volver al Sitio
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95 flex items-center gap-2"
                        >
                            Cerrar Sesión
                        </button>
                        <button
                            onClick={() => {
                                if (confirm('¿Seguro que quieres borrar todos los datos de analítica?')) {
                                    localStorage.removeItem('karlanding_analytics');
                                    window.location.reload();
                                }
                            }}
                            className="px-6 py-3 rounded-full bg-red-50 text-red-600 border border-red-100 font-semibold hover:bg-red-100 transition-all active:scale-95"
                        >
                            Reset Datos
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        title="Sesiones Totales"
                        value={insights.totalViews}
                        icon={Eye}
                        color="nature"
                    />
                    <StatCard
                        title="Visitantes Únicos"
                        value={insights.uniqueVisitors}
                        icon={Users}
                        color="sky"
                    />
                    <StatCard
                        title="Usuarios PC"
                        value={insights.desktopUsers}
                        icon={Monitor}
                        color="gold"
                    />
                    <StatCard
                        title="Usuarios Móvil"
                        value={insights.mobileUsers}
                        icon={Smartphone}
                        color="nature"
                    />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    <div className="lg:col-span-2 glass p-8 rounded-[32px] border border-white/50">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Resumen de Tráfico</h3>
                                <p className="text-slate-500 text-sm">Tráfico de visitantes en los últimos 7 días</p>
                            </div>
                            <select className="bg-transparent border-none text-sm font-semibold text-nature-600 focus:ring-0 cursor-pointer">
                                <option>Últimos 7 Días</option>
                                <option>Últimos 30 Días</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            borderRadius: '20px',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                            padding: '12px'
                                        }}
                                        formatter={(value) => [value, 'Visitas']}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="visits"
                                        stroke="#16a34a"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#colorVisits)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[32px] border border-white/50 flex flex-col justify-between">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Dispositivos</h3>
                        <div className="h-[200px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={deviceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={8}
                                        dataKey="value"
                                    >
                                        {deviceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <p className="text-2xl font-bold text-slate-900">{insights.desktopUsers ? Math.round((insights.desktopUsers / (insights.desktopUsers + insights.mobileUsers || 1)) * 100) : 0}%</p>
                                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">Ordenador</p>
                            </div>
                        </div>
                        <div className="space-y-4 mt-6">
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-nature-600"></div>
                                    <span className="font-medium text-slate-600">Ordenador</span>
                                </div>
                                <span className="font-bold text-slate-900">{insights.desktopUsers}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-sky-600"></div>
                                    <span className="font-medium text-slate-600">Móvil/Tablet</span>
                                </div>
                                <span className="font-bold text-slate-900">{insights.mobileUsers}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Events & Locations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-[32px] border border-white/50">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Actividad en Vivo</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 animate-pulse">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                EN VIVO
                            </div>
                        </div>
                        <div className="space-y-6">
                            {insights.recentEvents.length > 0 ? (
                                insights.recentEvents.map((event, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-nature-100 group-hover:text-nature-600 transition-colors">
                                                <MousePointer2 size={18} />
                                            </div>
                                            {i !== insights.recentEvents.length - 1 && (
                                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-100"></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{event.event.replace(/_/g, ' ').toUpperCase()}</p>
                                            <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                                                <Globe size={12} /> {event.platform} • {new Date(event.timestamp).toLocaleTimeString()}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-10 text-center text-slate-400 italic">No hay eventos registrados. ¡Prueba a interactuar con el sitio!</div>
                            )}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[32px] border border-white/50">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Ubicaciones Principales</h3>
                        <div className="space-y-6">
                            {Object.keys(insights.topLocations).length > 0 ? (
                                Object.entries(insights.topLocations).map(([country, count], i) => {
                                    const percentage = Math.round((count / (insights.totalViews || 1)) * 100);
                                    return (
                                        <div key={i}>
                                            <div className="flex justify-between items-center text-sm mb-2">
                                                <span className="font-bold text-slate-800 flex items-center gap-2">
                                                    <Globe size={16} className="text-nature-600" /> {country}
                                                </span>
                                                <span className="text-slate-500 font-medium">{count} visitas ({percentage}%)</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${percentage}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-nature-500 to-sky-500 rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-center py-10 text-slate-400 italic">Esperando datos de ubicación...</div>
                            )}
                        </div>

                        <div className="mt-10 p-4 rounded-2xl bg-gold-50 border border-gold-200">
                            <h4 className="text-gold-900 font-bold text-sm mb-1 uppercase tracking-wider">💡 Insight de la semana</h4>
                            <p className="text-gold-800/80 text-sm">La mayoría de los usuarios visitan desde ordenadores entre las 18:00 y las 21:00. Considera optimizar la sección Hero para monitores de alta resolución.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AnalyticsDashboard;
