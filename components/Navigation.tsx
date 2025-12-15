import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const isActive = (path: string) => location.pathname === path ? "text-primary" : "text-white hover:text-primary";
    const handleLinkClick = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#2d372a] bg-background-dark/95 backdrop-blur-md">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-3">
                <div className="w-full max-w-[1280px] flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 text-white" onClick={handleLinkClick}>
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">smart_toy</span>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Richard Avalon</h2>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex flex-1 justify-center gap-8">
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/')}`} to="/">Inicio</Link>
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/servicios-creativos')}`} to="/servicios-creativos">Creativos IA</Link>
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/servicios-comerciales')}`} to="/servicios-comerciales">Ventas</Link>
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/proceso')}`} to="/proceso">Proceso</Link>
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/portafolio')}`} to="/portafolio">Portafolio</Link>
                        <Link className={`transition-colors text-sm font-medium leading-normal ${isActive('/contacto')}`} to="/contacto">Contacto</Link>
                    </nav>

                    <div className="flex justify-end gap-2">
                        <Link to="/contacto" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-[#131712] hover:bg-white transition-colors text-sm font-bold leading-normal tracking-[0.015em]" onClick={handleLinkClick}>
                            <span className="truncate">Contactar</span>
                        </Link>
                        <button 
                            className="md:hidden text-white ml-4"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-border-dark p-4 flex flex-col gap-4 animate-fade-in shadow-2xl">
                    <Link className={`text-base font-medium py-2 ${isActive('/')}`} to="/" onClick={handleLinkClick}>Inicio</Link>
                    <Link className={`text-base font-medium py-2 ${isActive('/servicios-creativos')}`} to="/servicios-creativos" onClick={handleLinkClick}>Creativos IA</Link>
                    <Link className={`text-base font-medium py-2 ${isActive('/servicios-comerciales')}`} to="/servicios-comerciales" onClick={handleLinkClick}>Ventas</Link>
                    <Link className={`text-base font-medium py-2 ${isActive('/proceso')}`} to="/proceso" onClick={handleLinkClick}>Proceso</Link>
                    <Link className={`text-base font-medium py-2 ${isActive('/portafolio')}`} to="/portafolio" onClick={handleLinkClick}>Portafolio</Link>
                    <Link className={`text-base font-medium py-2 ${isActive('/contacto')}`} to="/contacto" onClick={handleLinkClick}>Contacto</Link>
                </div>
            )}
        </header>
    );
};

export default Navigation;