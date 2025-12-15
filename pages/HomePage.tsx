import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="relative flex w-full flex-col">
            
            {/* Hero Section */}
            <section className="relative flex flex-col justify-center min-h-[85vh] px-4 md:px-10 lg:px-40 py-5" id="inicio">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-aSyVR2BWjEYPB82ZAJJnDpa7wTpycGJ9c4uycuInu-13e6nQIJhzUzUReG6JiulrwcESOq7izjRIb2lazsEy-xZMhOL-z4CWGniPE8nP9479nh24N8hBdH2xU4g0IrunvFqhGWxa3NcYWLMgqJfa7PTvXmLgv7yIlZxbv6LFy9QI1p4_jU1nzAQBkhb1XyZwSNOCGhwH3GxoyWJb4v257lmT__UqLK4vjeZG7rdITzMImA2kVmOFSBZJjvRWtfeGMKs6U4gg4So")'}}>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent"></div>
                <div className="relative z-10 layout-content-container flex flex-col max-w-[960px] mx-auto w-full h-full justify-center">
                    <div className="flex flex-col gap-8 max-w-[720px]">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit border border-white/10">
                            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                            <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Potencia tu Crecimiento</span>
                        </div>
                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                            Potencia tu Negocio con <span className="text-primary">IA</span> y Estrategias de Venta de <span className="text-white underline decoration-primary decoration-4 underline-offset-4">Alto Valor</span>
                        </h1>
                        <h2 className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
                            IA + UGC + Ventas. Generación de leads cualificados y creatividad automatizada para escalar tu facturación sin perder el toque humano.
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a 
                                href="https://wa.me/573016603493?text=Hola%20Richard,%20me%20interesa%20potenciar%20mi%20negocio."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary hover:bg-white text-[#131712] transition-all transform hover:scale-105 text-base font-bold shadow-[0_0_20px_rgba(83,210,45,0.3)]"
                            >
                                <span className="material-symbols-outlined">chat</span>
                                <span>Hablemos por WhatsApp</span>
                            </a>
                            <Link to="/servicios-creativos" className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors text-base font-bold backdrop-blur-sm">
                                <span>Ver Servicios</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-600 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqs4rqyGUyvfBZm7SSQf-x0jooJ7pCNWS5wKSJTvwdUpUNU7MwwBCPP-v-HFDC84w8orWVMgVs-SFRdzmKGALchqIWPZxMG-yUPhW2Mp7PVBrF4uR3vwOHzAlU6zMGYe8U765A2tjhNWJN192uut7AptQPoUPtxr1-saMx8itIf_qSTN6pcCEr6uHJCFJSlETv2qZoagVyg35jCNVOqBspoYoY5dY49FYmkiieYoivdlR5H2lht44tswPSuoMMDRxS0q3JCQpH28M")'}}></div>
                                <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-500 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrE4rVQ1mF6BqtfOS19lXBd0alYJBf0K6DClkSYhhYUOX271pEvXJwQ6h9h4fIQgaD3KFcYGS_mZNnNy1m98KEO-LB5Wl7ogJfwlsamqqiwuaxfNf_xFTPHEiqZd3QBimvSLqU3z4gtBQIBSK8oZCxmYj8OwZZT2SQRM786aDBb0WtoAWHUeWHIMgb8gIept5ciXAQS7WiwIJrXbCWYMS5GAyYFllVvWhrJWliykpWmg6zNt3RI5QVoO949jG-ERsO_notIzrlL9A")'}}></div>
                                <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-400 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEptrDNZhEPjUtDQ9QFt-9lzh6J8UpCGVf-zeFP3gJOAqTZi5m9SWrA6BA1QmFymPzOROUivtDnbC86bQ2KRDkp_czfZXVnzPPCry640pmErYS43zOYViSVmzoFqZcYXaj8mF6laXJshhaJyWuU97gMrsPUCtF4gyaV96lMhRTklHTp6V2jJUu9moS1pu2nx4wGsyLFwVGAZlDI2OG0WwEsqISFdqM15VJ02LJcWKJ2LpJrgkVjErPz9lKDLDP8PwtRN3qyhS9olQ")'}}></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-primary">
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                </div>
                                <span className="text-sm text-gray-400 font-medium">Resultados comprobados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section Header */}
            <div className="px-4 md:px-10 lg:px-40 py-10 bg-surface-darker" id="servicios">
                <div className="layout-content-container max-w-[960px] mx-auto flex flex-col items-center text-center gap-4">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Mis Especialidades</span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Soluciones Integrales para Escalar</h2>
                    <p className="text-gray-400 max-w-[600px]">Fusiono la tecnología más avanzada con la psicología de ventas para ofrecer un servicio híbrido único en el mercado.</p>
                </div>
            </div>

            {/* Creative AI Services Preview */}
            <section className="px-4 md:px-10 lg:px-40 py-10 bg-surface-darker">
                <div className="layout-content-container max-w-[960px] mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                        <h3 className="text-white text-2xl font-bold">Servicios Creativos con IA</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link to="/servicios-creativos" className="group flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-2xl bg-surface-dark p-1 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border border-white/5">
                            <div className="flex flex-col justify-between p-5 gap-4 flex-1">
                                <div className="flex flex-col gap-2">
                                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-primary">
                                        <span className="material-symbols-outlined">videocam</span>
                                    </div>
                                    <h4 className="text-white text-xl font-bold leading-tight">Generación UGC</h4>
                                    <p className="text-[#a5b6a0] text-sm leading-relaxed">Videos auténticos guionizados por IA para maximizar engagement.</p>
                                </div>
                                <button className="text-white text-sm font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                                    Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="w-full md:w-40 bg-cover bg-center rounded-xl min-h-[160px]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoLC_AtjEFC2uU0iZa7bmX2iUOnvH5blmQz2up2HsTZ_mvhcshbL6wzU8HEcm4HuqviT7AoDDhqrYkzD52LY3IOzlBE20IKmzIuEK1ipAlcZBOTN34ABmD6tH820Gc6j03HuNpOD0cJi2m9EIpLWQ3lefztrN9sGVPCixH_LqDUT0MSYwbi1U7_kb4Djr-olHUzQ6Bobb3YD1QTep6bjfFJ4aKuIldJPiWj6W5mDnGhh5PqcsxC0Aby2sp3K3uGaXXPWF2XCzDo8c")'}}></div>
                        </Link>

                        <Link to="/servicios-creativos" className="group flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-2xl bg-surface-dark p-1 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border border-white/5">
                            <div className="flex flex-col justify-between p-5 gap-4 flex-1">
                                <div className="flex flex-col gap-2">
                                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-primary">
                                        <span className="material-symbols-outlined">brush</span>
                                    </div>
                                    <h4 className="text-white text-xl font-bold leading-tight">Automatización Visual</h4>
                                    <p className="text-[#a5b6a0] text-sm leading-relaxed">Diseño gráfico y edición asistida por IA para flujos de trabajo 10x.</p>
                                </div>
                                <button className="text-white text-sm font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                                    Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="w-full md:w-40 bg-cover bg-center rounded-xl min-h-[160px]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYZwJHkEeUCWZH0Q2NPvIrz0qjQTOacAubICMXVDAWvBu7Jn3GRzijAlWZ9EGZS76ACJfFQUACV5QmuSIzz9wc6uvsDcHIbk4YikgJtnTKIh_Skg5uLQCwPpWqKzSDfbDr0T5rlJ4CyM-q8sFu_vsE_3VwHTk4cEycmAaYEC6BmwQgSKRDeT1J4cByQaoz_YzXTDUPLwu_477Sh-qtKH53U3aiKH7wkNCoFlFzrsPDPLGkSTQGAmxLVX26U08hJgcWzBPJ3TtP_Rc")'}}></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="px-4 md:px-10 lg:px-40 py-20 bg-background-dark" id="sobre-mi">
                <div className="layout-content-container max-w-[960px] mx-auto">
                    <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/10">
                        <div className="shrink-0 relative">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-surface-darker shadow-2xl relative z-10">
                                <img alt="Richard Avalon" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Rwi9eN6fv8Uejp6Zn8FBvP0rY8_UOkgRka-tF7qqVC0-SCSypJLWiRHDsA7LljRwOr_OLhkoyyuLFVtu2MlEb_0CX5a1El8-5ZBiLUfqoNsaP0bltLLgmHuaNwbHLbWz-CmcppE142Ut-SisP9tO_EmbKlWCaTrJxEqkInrGjYdM7nNhhcer38tUdOmq2aaV811olgjC8x-R4EiqiLTf58jE5FwmShErc1wI7Rho6ZuZfn10AJT84VcYJodS55ssDfayfT9BorI"/>
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full rounded-full border-2 border-primary/30 z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-full border-2 border-primary/30 z-0"></div>
                        </div>
                        <div className="flex flex-col text-center md:text-left">
                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Sobre mí</span>
                            <h2 className="text-white text-3xl font-bold mb-4">Más que un proveedor, tu socio de crecimiento.</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Hola, soy Richard. Me especializo en la intersección donde la creatividad tecnológica se encuentra con los resultados comerciales tangibles. No solo genero contenido bonito; creo sistemas que venden.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-2 rounded-full bg-surface-darker border border-white/10 text-xs font-medium text-gray-400">Certificado en IA</span>
                                <span className="px-4 py-2 rounded-full bg-surface-darker border border-white/10 text-xs font-medium text-gray-400">Closer de Elite</span>
                                <span className="px-4 py-2 rounded-full bg-surface-darker border border-white/10 text-xs font-medium text-gray-400">+500k generados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;