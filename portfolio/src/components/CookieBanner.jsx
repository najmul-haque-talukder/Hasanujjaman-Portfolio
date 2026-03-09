import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import legalData from '../data/legal.json';

const CookieBanner = () => {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Slight delay before showing so it isn't too jarring
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    const content = legalData.cookieBanner;

    return (
        <div className="cookie-banner" style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            zIndex: 9999,
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.05)',
            padding: '1.5rem',
            maxWidth: '380px',
            animation: 'slideUpBanner 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                {content.title[language] || content.title.en}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {content.message[language] || content.message.en}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                    onClick={handleAccept}
                    style={{
                        flex: 1,
                        backgroundColor: 'var(--accent-blue)',
                        color: 'white',
                        border: 'none',
                        padding: '0.6rem 1rem',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    {content.acceptAll[language] || content.acceptAll.en}
                </button>
                <button
                    onClick={handleDecline}
                    style={{
                        backgroundColor: '#F3F4F6',
                        color: 'var(--text-main)',
                        border: 'none',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                >
                    {content.decline[language] || content.decline.en}
                </button>
            </div>

            <style>{`
                @keyframes slideUpBanner {
                    from { transform: translateY(100px); opacity: 0; }
                    to   { transform: translateY(0); opacity: 1; }
                }
                @media (max-width: 640px) {
                    .cookie-banner {
                        bottom: 1rem !important;
                        left: 1rem !important;
                        right: 1rem !important;
                        max-width: none !important;
                        width: auto !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CookieBanner;
