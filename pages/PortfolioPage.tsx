import React, { useState } from 'react';

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'ia' | 'sales'>('all');

    return (
        <div className="flex flex-col items-center w-full">
            <main className="flex flex-col items-center w-full">
                <section className="w-full px-4 py-8 md:py-12 max-w-7xl">
                    <div className="relative w-full overflow-hidden rounded-2xl min-h-[400px] flex items-center justify-center bg-cover bg-center group" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCa5cKiPRLD6jT6NfAeuBV3AxIr-pDuJ3H-XYVB6jMT0TlqC2WF4xJ07FLRb06DwHxyZaOj1lOWloK6RGDWk2z67kx4JwKVgLzxe8hOiJjES-EL9izHtDK3Xb99dJzxDZJR73P_ryW9bE--PGgps3j0_p4cj9_yHAvYjjnZtZOaZbAgeeGcG5WdNUw76rk6c3-60RBNA3xz-1Z2XIkp3k24MgVtInX9fgYiDy9Ob0MOenV24jbYbHjeY1iKRCza9t-oK2yNm9sDKWk")'}}>
                        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white mb-6 backdrop-blur-sm">
                                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                Casos de éxito verificados
                            </span>
                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
                                Resultados que hablan <span className="text-primary">por sí mismos</span>
                            </h1>
                            <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl">
                                Explora cómo la IA creativa y las estrategias de cierre agresivas transforman negocios reales. Sin teoría, solo métricas y hechos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter Chips */}
                <section className="w-full px-4 pb-8 max-w-7xl sticky top-[72px] z-40 bg-background-light dark:bg-background-dark pt-2">
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <button 
                            onClick={() => setFilter('all')}
                            className={`group flex h-9 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all ${filter === 'all' ? 'bg-[#131712] text-white ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark' : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#2d372a] hover:border-primary'}`}
                        >
                            Todos
                        </button>
                        <button 
                            onClick={() => setFilter('ia')}
                            className={`group flex h-9 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all ${filter === 'ia' ? 'bg-[#131712] text-white ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark' : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#2d372a] hover:border-primary'}`}
                        >
                            <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
                            Creativos IA
                        </button>
                        <button 
                             onClick={() => setFilter('sales')}
                            className={`group flex h-9 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all ${filter === 'sales' ? 'bg-[#131712] text-white ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark' : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#2d372a] hover:border-primary'}`}
                        >
                            <span className="material-symbols-outlined text-[18px] text-blue-400">trending_up</span>
                            Sistemas Lead Gen
                        </button>
                    </div>
                </section>

                <section className="w-full px-4 pb-16 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Item 1 - Sales */}
                        {(filter === 'all' || filter === 'sales') && (
                            <div className="group relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">SaaS B2B</div>
                                        <span className="text-xs text-gray-500 font-mono">Q3 2023</span>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-black text-primary mb-1">+315%</h3>
                                        <p className="text-sm text-gray-400 font-medium">Incremento en Leads Calificados</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Implementación de sistema de Setter automatizado con IA para filtrar curiosos.
                                    </p>
                                </div>
                            </div>
                        )}
                        
                        {/* Item 2 - Sales */}
                        {(filter === 'all' || filter === 'sales') && (
                            <div className="group relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Consultoría</div>
                                        <span className="text-xs text-gray-500 font-mono">Q4 2023</span>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-black text-white mb-1">4.2x</h3>
                                        <p className="text-sm text-gray-400 font-medium">Retorno en Inversión (ROAS)</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Optimización de scripts de cierre y seguimiento multicanal.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Item 3 - IA (Added for demo) */}
                        {(filter === 'all' || filter === 'ia') && (
                            <div className="group relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">E-Commerce</div>
                                        <span className="text-xs text-gray-500 font-mono">Q1 2024</span>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-black text-white mb-1">-70%</h3>
                                        <p className="text-sm text-gray-400 font-medium">Costos de Producción</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Sustitución de sesiones de fotos físicas por generación de entornos con IA.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PortfolioPage;