import React from 'react';
import { Link } from 'react-router-dom';

const CreativeServicesPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="pt-5 flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative px-4 py-12 md:px-20 md:py-24 max-w-[1280px] mx-auto w-full">
                    <div className="flex flex-col gap-10 md:gap-16 lg:flex-row items-center">
                        <div className="flex flex-col gap-6 flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark w-fit border border-[#2d372a]">
                                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-white">Resultados Visuales con IA</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                                Transformando Ideas en <span className="text-primary">Realidad Visual</span>
                            </h1>
                            <p className="text-[#a5b6a0] text-lg leading-relaxed max-w-lg">
                                Soluciones creativas de alto impacto para marcas modernas. Desde edición de productos hasta generación de video, diseñados no solo para impresionar, sino para vender.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Link to="/portafolio" className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold hover:brightness-110 transition-all">
                                    Ver Portafolio
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50"></div>
                            <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square max-h-[500px] rounded-2xl overflow-hidden bg-surface-dark border border-[#2d372a] shadow-2xl">
                                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCM9VhXdegcGWqo6Gdz1OdSFO0o_FSYVzbp1Ke_7Gbvfg7QFwbSAsjNASEWS4mkkxRhOedrkbhSi5QcOg6a06i1Z2ob_B7O3AqaZdkPQlgRp8LRl1rjs_EaaOYaZFc2sgfL4_OvkI4prklz6_q_I9J8FM0QQJWI3sT2K9XgVp8GqpMlhK05Ga7rWmdoIA8mu7vuIvy8Ts0Iq8jXOKn0KY27VZTxzKIyFZpMlvuvEPZQ0VJieDkLLHfI-z9Nqxb6QcnlxO6dZxuguQw')"}}>
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-background-dark">auto_awesome</span>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Generación en Tiempo Real</p>
                                            <p className="text-[#a5b6a0] text-xs">Nano Banana Pro + Veo 3.1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-8 md:px-20 max-w-[1280px] mx-auto w-full">
                    <div className="border-b border-[#2d372a] pb-4 flex items-center justify-between">
                        <h2 className="text-white text-2xl font-bold">Nuestros Servicios Creativos</h2>
                        <span className="hidden md:block text-[#a5b6a0] text-sm font-medium">Potenciados por Inteligencia Artificial</span>
                    </div>
                </section>

                {/* Service 1 */}
                <section className="px-4 py-12 md:px-20 max-w-[1280px] mx-auto w-full">
                    <div className="bg-surface-dark rounded-[2rem] p-8 md:p-12 border border-[#2d372a] flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d372a] border border-white/5">
                                    <span className="material-symbols-outlined text-primary text-sm">brush</span>
                                    <span className="text-white text-xs font-bold uppercase">Nano Banana Pro</span>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Edición de Imágenes de Productos</h3>
                            <p className="text-[#a5b6a0] text-lg">Potencia tu e-commerce. Transformamos fotos de productos simples en escenarios de estilo de vida de alta conversión.</p>
                            <ul className="flex flex-col gap-3 mt-2">
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>Escenarios fotorrealistas</span></li>
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>Iluminación adaptativa</span></li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-background-dark relative group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1IW303XPkbyGKaendddwsaj5RU6PT-TBcrmrF-UaxuUfTdIKFT22qJLNWdGRY1Qtwv5oTQm0yCXRyUoHFFTZ1yjc5ljA3kl7o4EOsEj9-NYiqD8RiIZU1kK7DWQkkVt5pb5Dhs93HQn1x46HkW34D_PFj2dRPExllsxCplw91duIfsfT4bj-wmbJz7XLxPnCH3VlJDF4nhLD0QSdcaTDRym2E10EIofGuRCAIqrZn_V32Y0E-ad9DD7inrgmyy6m62gVqUfTqR6w')"}}></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-background-dark relative group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKFMHV3EO4NSDwqRWRloA3pzD-RouKLsTRoHjkWxg8AzgabnHUhSZedMRo3fuZgRwEeYy93m2Xn7asuaPdY3BLNi2U30QNzW8hdx_DDZhPJog-ohcvLuEs1kyyHPv6xSNngpGaTyMwfPAKd_qY6tDY9SCnZoNzvawU6h7BcCVyNUUg4Q4pRNdjMdGQuqNc87S1t0ehxqALCemIPPOE0mN223s_Ub8hmYsB-SzX88Oa14QNoy6sTc2Mqq-UYOz_yFOroGEcRjYAbgY')"}}></div>
                                    <div className="absolute bottom-3 left-3 bg-primary text-background-dark font-bold px-2 py-1 rounded text-xs backdrop-blur-sm">AI Generated</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service 2 - UGC */}
                <section className="px-4 py-12 md:px-20 max-w-[1280px] mx-auto w-full">
                    <div className="bg-surface-darker rounded-[2rem] p-8 md:p-12 border border-[#2d372a] flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d372a] border border-white/5">
                                    <span className="material-symbols-outlined text-primary text-sm">videocam</span>
                                    <span className="text-white text-xs font-bold uppercase">Veo 3.1</span>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Video UGC Automatizado</h3>
                            <p className="text-[#a5b6a0] text-lg">Videos cortos de alto impacto para TikTok y Reels. Guionizados, editados y generados para retener la atención.</p>
                            <ul className="flex flex-col gap-3 mt-2">
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>Guiones virales</span></li>
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>Avatares realistas</span></li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                             <div className="aspect-video rounded-2xl overflow-hidden bg-background-dark relative group border border-[#2d372a]">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoLC_AtjEFC2uU0iZa7bmX2iUOnvH5blmQz2up2HsTZ_mvhcshbL6wzU8HEcm4HuqviT7AoDDhqrYkzD52LY3IOzlBE20IKmzIuEK1ipAlcZBOTN34ABmD6tH820Gc6j03HuNpOD0cJi2m9EIpLWQ3lefztrN9sGVPCixH_LqDUT0MSYwbi1U7_kb4Djr-olHUzQ6Bobb3YD1QTep6bjfFJ4aKuIldJPiWj6W5mDnGhh5PqcsxC0Aby2sp3K3uGaXXPWF2XCzDo8c')"}}></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Service 3 - Automation */}
                <section className="px-4 py-12 md:px-20 max-w-[1280px] mx-auto w-full">
                    <div className="bg-surface-dark rounded-[2rem] p-8 md:p-12 border border-[#2d372a] flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d372a] border border-white/5">
                                    <span className="material-symbols-outlined text-primary text-sm">settings_suggest</span>
                                    <span className="text-white text-xs font-bold uppercase">Workflow AI</span>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Automatización de Creativos</h3>
                            <p className="text-[#a5b6a0] text-lg">Sistemas que generan variantes de anuncios automáticamente para tus campañas de Facebook y Google Ads.</p>
                            <ul className="flex flex-col gap-3 mt-2">
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>A/B Testing masivo</span></li>
                                <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-primary">check_circle</span><span>Adaptación de formatos</span></li>
                            </ul>
                        </div>
                         <div className="flex-1 w-full">
                             <div className="aspect-video rounded-2xl overflow-hidden bg-background-dark relative group border border-[#2d372a]">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYZwJHkEeUCWZH0Q2NPvIrz0qjQTOacAubICMXVDAWvBu7Jn3GRzijAlWZ9EGZS76ACJfFQUACV5QmuSIzz9wc6uvsDcHIbk4YikgJtnTKIh_Skg5uLQCwPpWqKzSDfbDr0T5rlJ4CyM-q8sFu_vsE_3VwHTk4cEycmAaYEC6BmwQgSKRDeT1J4cByQaoz_YzXTDUPLwu_477Sh-qtKH53U3aiKH7wkNCoFlFzrsPDPLGkSTQGAmxLVX26U08hJgcWzBPJ3TtP_Rc')"}}></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CreativeServicesPage;