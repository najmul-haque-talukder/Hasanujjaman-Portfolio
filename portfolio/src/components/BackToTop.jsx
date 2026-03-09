import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            title="Back to Top"
            onClick={scrollToTop}
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            style={{
                position: 'fixed',
                bottom: '8rem', // sits above the cookie banner
                right: '2rem',
                zIndex: 9998,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-main)',
                color: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                opacity: 0,
                transform: 'translateY(20px) scale(0.9)',
                pointerEvents: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <ArrowUp size={24} />

            <style>{`
                .back-to-top.visible {
                    opacity: 1 !important;
                    transform: translateY(0) scale(1) !important;
                    pointer-events: all !important;
                }
                .back-to-top:hover {
                    background-color: var(--accent-blue) !important;
                    transform: translateY(-4px) scale(1.05) !important;
                    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3) !important;
                }
                @media (max-width: 640px) {
                    .back-to-top {
                        bottom: 6rem !important; /* adjust for mobile cookie banner */
                        right: 1.25rem !important;
                    }
                }
            `}</style>
        </button>
    );
};

export default BackToTop;
