import React from 'react';

const Footer: React.FC = () => (
    <footer className="w-full border-t border-[#2d372a] bg-background-dark text-center py-12 px-4">
        <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                <span className="font-bold text-lg">Richard Avalon</span>
            </div>
            <div className="flex justify-center gap-6">
                <a className="text-text-secondary hover:text-white transition-colors" href="#">LinkedIn</a>
                <a className="text-text-secondary hover:text-white transition-colors" href="#">Instagram</a>
                <a className="text-text-secondary hover:text-white transition-colors" href="#">Twitter / X</a>
            </div>
            <p className="text-text-secondary text-sm">© 2024 Richard Avalon. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;