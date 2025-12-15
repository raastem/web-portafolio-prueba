import React from 'react';
import { Link } from 'react-router-dom';

const SalesServicesPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            {/* Hero Section */}
            <div className="w-full px-4 md:px-40 py-10 flex justify-center">
                <div className="flex flex-col max-w-[960px] w-full">
                    <div className="@container">
                        <div className="flex flex-col gap-6 py-10 @[864px]:flex-row items-center">
                            <div className="flex flex-col gap-6 @[864px]:w-1/2 justify-center">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit">
                                        <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">High Ticket Sales</span>
                                    </div>
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl">
                                        Potencia tu <span className="text-primary">Pipeline</span> de Ventas
                                    </h1>
                                    <h2 className="text-text-secondary text-base font-normal leading-relaxed lg:text-lg">
                                        De la prospección al cierre. Delega tus procesos comerciales y enfócate en escalar tu negocio.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full @[864px]:w-1/2 mt-8 @[864px]:mt-0 relative group">
                                <div className="relative w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-2xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClqfLIfvxDYEvLDNahaGrV7XVJGiKjJ3aLYZt4dqyHpRS9mg5eBRLzBYLx3BA8sTdIOXnpc_IMsA_lMtQQWGVS71o20nJzEjLavNz0Bq9M7bhKR9d5_vlEwzkTzbpdyUtoupkWa3Vat4Pw19XeYbp3paArIJrMpHEyVPvfgSZP4cVupCjmhpCpVJEaT6wIsYblByhXte4BLvuGilQFTGDg0mDMDmEqsMcLURzL_hfMtuLIwzRkND2_dNWqDYtJO8TOlRU31UZ2Psg")'}}>
                                    <div className="absolute inset-0 bg-background-dark/20 rounded-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full px-4 md:px-40 py-16 flex justify-center">
                <div className="flex flex-col max-w-[960px] w-full gap-16">
                    {/* Service 1: Setter */}
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch p-6 rounded-3xl bg-surface-dark border border-border-dark hover:border-primary/30 transition-colors shadow-lg">
                        <div className="w-full lg:w-5/12 min-h-[300px] lg:min-h-auto bg-center bg-no-repeat bg-cover rounded-2xl relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1VitQoYVV8iBw4j_-sf3fEKuWDFFT_-12WHyWEECYvfYvVVPo5WjaUTXGk4t4QozlS1a-bREbIjysCldv6HcpHbohuU9Ma2lyd51lPKcPCDm3pr54LEX2x9XMIq7vek5vZBbdcsqUPasdUHOLLOxaBEAaa7ej1SOp099qaBH-HOyCJ0WCVjX6W63OoV8xDNLoJfav7CzL20t0EEApTSuFIl_1Z90fAUFj1I6dIdzN4vK1O9Z7ae8PB1w3i2Zh5c3pWjKRS4jTX_c")'}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background-dark/80 backdrop-blur text-xs font-bold text-white border border-border-dark">
                                    <span className="material-symbols-outlined text-primary text-sm">filter_alt</span>
                                    Cualificación
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center gap-6">
                            <div>
                                <h3 className="text-white text-2xl font-bold leading-tight mb-2">Setter: Generación de Oportunidades</h3>
                                <p className="text-text-secondary text-base font-normal leading-relaxed">Transformo el tráfico frío y tibio en leads cualificados listos para comprar.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="text-white text-sm font-medium">Prospección Outbound</span></div>
                                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="text-white text-sm font-medium">Nutrición de Leads</span></div>
                            </div>
                        </div>
                    </div>

                     {/* Service 2: Closer */}
                    <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch p-6 rounded-3xl bg-surface-dark border border-border-dark hover:border-primary/30 transition-colors shadow-lg" id="closer">
                        <div className="w-full lg:w-5/12 min-h-[300px] lg:min-h-auto bg-center bg-no-repeat bg-cover rounded-2xl relative overflow-hidden" data-alt="Two people shaking hands finishing a deal" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZS3WPuGjWmIRiInOVjJw-kniF2SNKoTEbMLGpqwbSWtz5_4FQYsMMwV6N76XiHHLU5DOXVEXN3V0VQ-O3RnbvDZk4BIFrkTnFrtOYjav9CE3Yd4hB3OHB9DD9Nn55Y9Uwr034JK2yGfjgQlPfVP-1EKdbREQuENJA3LoAbZqZ7iTxFhEoZdKX_gqmknwYHeN3iskXBrNvb2D8bhmkTAdrJcreWhX-n1QVQcNi4A2sNbSeQpWHWi1U5DhPy-SHKlM3oG8eDh-9XjQ")'}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-4 right-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background-dark/80 backdrop-blur text-xs font-bold text-white border border-border-dark">
                                <span className="material-symbols-outlined text-primary text-sm">handshake</span>
                                    Cierre
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center gap-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white text-2xl font-bold leading-tight mb-2">Closer: Cierre de Ventas</h3>
                                    <div className="size-10 rounded-full bg-background-dark flex items-center justify-center border border-border-dark text-primary">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                </div>
                                <p className="text-text-secondary text-base font-normal leading-relaxed">
                                    Especialista en ventas consultivas y High-Ticket. Conduzco la llamada de venta, manejo objeciones complejas y aseguro el compromiso financiero del cliente.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-white text-sm font-medium">Venta Consultiva</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-white text-sm font-medium">Manejo de Objeciones</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-white text-sm font-medium">Llamadas 1 a 1</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-white text-sm font-medium">Seguimiento Post-Venta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full px-4 md:px-40 py-16 flex justify-center bg-surface-darker">
                <div className="max-w-[960px] w-full bg-surface-dark border border-border-dark rounded-3xl p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-white text-3xl font-bold relative z-10">¿Listo para escalar tu facturación?</h2>
                    <p className="text-text-secondary max-w-lg relative z-10">No dejes dinero en la mesa. Implementa un sistema de ventas probado.</p>
                    <Link to="/contacto" className="flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary hover:bg-white text-[#131712] transition-all transform hover:scale-105 text-lg font-bold shadow-lg relative z-10">
                        <span>Agendar Llamada</span>
                        <span className="material-symbols-outlined">calendar_month</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SalesServicesPage;