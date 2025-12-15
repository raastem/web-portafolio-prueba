import React from 'react';

const ProcessPage: React.FC = () => {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
            <main className="flex-grow flex flex-col items-center w-full">
                <section className="w-full px-4 md:px-10 lg:px-40 py-10 md:py-20 flex justify-center">
                    <div className="w-full max-w-[960px] flex flex-col items-center text-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark text-primary text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Metodología
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white max-w-[800px]">
                            De la Idea a la <span className="text-primary">Realidad Tangible</span>
                        </h1>
                        <p className="text-gray-600 dark:text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[640px]">
                            Un sistema optimizado de 5 pasos para transformar oportunidades en resultados, combinando inteligencia artificial creativa y estrategias comerciales humanas.
                        </p>
                    </div>
                </section>

                <section className="w-full px-4 md:px-10 lg:px-40 pb-20 flex justify-center">
                    <div className="w-full max-w-[800px] relative">
                        <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-border-dark via-primary/30 to-border-dark hidden md:block"></div>
                        <div className="flex flex-col gap-12 relative">
                            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                <div className="flex md:flex-col items-center gap-4 md:gap-0 min-w-[60px]">
                                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-surface-dark border border-primary text-primary shadow-[0_0_20px_rgba(83,210,45,0.15)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pt-2 w-full">
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary font-bold text-sm tracking-wider uppercase">Paso 01</span>
                                        <div className="h-[1px] bg-border-dark w-12"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contacto Inicial</h3>
                                    <p className="text-gray-600 dark:text-text-secondary leading-relaxed">
                                        El primer paso es simple. Agendamos una breve llamada o conversamos por WhatsApp para conocer tu negocio.
                                    </p>
                                </div>
                            </div>

                            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                <div className="flex md:flex-col items-center gap-4 md:gap-0 min-w-[60px]">
                                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-surface-dark border border-border-dark group-hover:border-primary text-white group-hover:text-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">analytics</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pt-2 w-full">
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary font-bold text-sm tracking-wider uppercase">Paso 02</span>
                                        <div className="h-[1px] bg-border-dark w-12"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Diagnóstico Profundo</h3>
                                    <p className="text-gray-600 dark:text-text-secondary leading-relaxed">
                                        Analizo tu infraestructura actual. Identifico cuellos de botella en tu proceso de ventas o áreas donde la IA creativa puede ayudar.
                                    </p>
                                </div>
                            </div>

                            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                <div className="flex md:flex-col items-center gap-4 md:gap-0 min-w-[60px]">
                                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary border border-primary text-background-dark shadow-[0_0_20px_rgba(83,210,45,0.4)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-3xl filled">rocket_launch</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pt-2 w-full">
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary font-bold text-sm tracking-wider uppercase">Paso 03</span>
                                        <div className="h-[1px] bg-border-dark w-12"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Entrega y Cierre</h3>
                                    <p className="text-gray-600 dark:text-text-secondary leading-relaxed">
                                        Entrega final de resultados y revisión de métricas. Nos aseguramos de que todo funcione perfectamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProcessPage;