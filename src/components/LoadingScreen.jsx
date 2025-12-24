import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] bg-nature-50 flex flex-col items-center justify-center"
        >
            <div className="relative">
                {/* Outer Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-nature-500 rounded-full blur-3xl"
                />

                {/* Core Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-nature-600 p-8 rounded-full shadow-2xl"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Sprout size={64} className="text-white" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Text Progress */}
            <div className="mt-12 overflow-hidden w-64">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <h2 className="text-slate-900 font-bold text-xl tracking-widest uppercase">
                        Karla Rodríguez
                    </h2>
                    <p className="text-nature-600 text-xs font-mono mt-2 tracking-[0.3em]">
                        Iniciando Protocolos Agrícolas
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-nature-500"
                    />
                </div>
            </div>

        </motion.div>
    );
};

export default LoadingScreen;
