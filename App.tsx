import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import CreativeServicesPage from './pages/CreativeServicesPage';
import SalesServicesPage from './pages/SalesServicesPage';
import ProcessPage from './pages/ProcessPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navigation />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servicios-creativos" element={<CreativeServicesPage />} />
                        <Route path="/servicios-comerciales" element={<SalesServicesPage />} />
                        <Route path="/proceso" element={<ProcessPage />} />
                        <Route path="/portafolio" element={<PortfolioPage />} />
                        <Route path="/contacto" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </Router>
    );
};

export default App;