import React from 'react';

const ContactPage: React.FC = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Construct mailto link
        const subject = `Nuevo Proyecto - ${name}`;
        const body = `Hola Richard,%0D%0A%0D%0AMi nombre es ${name} (${email}).%0D%0A%0D%0A${message}`;
        
        window.location.href = `mailto:richardalvarado1441@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow flex flex-col justify-center py-12 lg:py-20 relative">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Left Column: Context & Direct Info */}
                        <div className="flex flex-col gap-8 pt-4">
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Disponible para nuevos proyectos</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                                    Impulsa tu negocio <span className="text-primary">hoy mismo</span>
                                </h1>
                                <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-lg">
                                    Especialista en IA Creativa y Cierre de Ventas. Convierte visitantes en clientes y automatiza tu crecimiento.
                                </p>
                            </div>
                            <div className="h-px w-full bg-[#2d372a]"></div>
                            <div className="flex flex-col gap-6">
                                <p className="text-white font-semibold text-lg">Contacto directo</p>
                                <a className="group flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-[#2d372a] hover:border-primary/50 transition-all hover:bg-[#1f2d1d]" href="mailto:richardalvarado1441@gmail.com">
                                    <div className="size-12 rounded-full bg-[#1f251d] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-text-secondary">Correo electrónico</span>
                                        <span className="text-base text-white font-medium">richardalvarado1441@gmail.com</span>
                                    </div>
                                </a>
                                <a className="group flex items-center gap-4 p-4 rounded-2xl bg-surface-dark border border-[#2d372a] hover:border-primary/50 transition-all hover:bg-[#1f2d1d]" href="https://wa.me/573016603493" target="_blank" rel="noopener noreferrer">
                                    <div className="size-12 rounded-full bg-[#1f251d] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">chat</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-text-secondary">WhatsApp Business</span>
                                        <span className="text-base text-white font-medium">+57 301 660 3493</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-surface-dark border border-[#2d372a] rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/50">
                            <div className="flex flex-col gap-2 mb-8">
                                <h3 className="text-2xl font-bold text-white">Cuéntame sobre tu proyecto</h3>
                                <p className="text-text-secondary text-sm">Respondo personalmente en menos de 24 horas.</p>
                            </div>
                            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium ml-1" htmlFor="name">Nombre completo</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary">
                                            <span className="material-symbols-outlined">person</span>
                                        </div>
                                        <input required name="name" className="w-full h-14 pl-12 pr-4 bg-input-bg border border-input-border rounded-full text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" id="name" placeholder="Tu nombre" type="text"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium ml-1" htmlFor="email">Correo electrónico</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary">
                                            <span className="material-symbols-outlined">alternate_email</span>
                                        </div>
                                        <input required name="email" className="w-full h-14 pl-12 pr-4 bg-input-bg border border-input-border rounded-full text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" id="email" placeholder="ejemplo@correo.com" type="email"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium ml-1" htmlFor="message">Mensaje</label>
                                    <div className="relative group">
                                        <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-text-secondary group-focus-within:text-primary">
                                            <span className="material-symbols-outlined">edit_note</span>
                                        </div>
                                        <textarea required name="message" className="w-full min-h-36 pl-12 pr-4 py-4 bg-input-bg border border-input-border rounded-3xl text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" id="message" placeholder="¿Cómo te puedo ayudar con tu negocio?"></textarea>
                                    </div>
                                </div>
                                <button className="mt-2 w-full h-14 bg-primary hover:bg-primary-hover text-background-dark font-bold text-lg rounded-full flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(83,210,45,0.3)] hover:shadow-[0_0_30px_rgba(83,210,45,0.5)]" type="submit">
                                    <span>Enviar mensaje</span>
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;