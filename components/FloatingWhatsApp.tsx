import React from 'react';

const FloatingWhatsApp: React.FC = () => (
    <a 
        className="hidden md:flex fixed bottom-10 right-10 z-50 floating-whatsapp group" 
        href="https://wa.me/573016603493?text=Hola%20Richard,%20vi%20tu%20web%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s."
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="relative bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(83,210,45,0.4)] hover:shadow-[0_0_30px_rgba(83,210,45,0.6)] transition-all">
            <span className="material-symbols-outlined text-[#131712] text-3xl filled">chat_bubble</span>
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-surface-darker text-sm font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Hablemos
            </div>
        </div>
    </a>
);

export default FloatingWhatsApp;