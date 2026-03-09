import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import legalData from '../data/legal.json';

const LegalModal = ({ type, onClose }) => {
    const { language } = useLanguage();
    const content = legalData[type];

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    if (!content) return null;

    return (
        <div
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1rem', animation: 'fadeIn 0.25s ease-out'
            }}
        >
            <div style={{
                backgroundColor: 'white', borderRadius: '28px',
                width: '100%', maxWidth: '700px', maxHeight: '85vh',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
                animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    padding: '2rem 2.5rem 1.5rem', borderBottom: '1px solid #F3F4F6', flexShrink: 0
                }}>
                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                            {content.title[language] || content.title.en}
                        </h2>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                            Last updated: {content.lastUpdated[language] || content.lastUpdated.en}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            border: 'none', backgroundColor: '#F3F4F6',
                            cursor: 'pointer', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', color: 'var(--text-main)',
                            transition: 'background 0.2s', flexShrink: 0
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ overflowY: 'auto', padding: '2rem 2.5rem 2.5rem', flexGrow: 1 }}>
                    {content.sections.map((section, i) => (
                        <div key={i} style={{ marginBottom: '1.75rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                {section.heading[language] || section.heading.en}
                            </h3>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                {section.body[language] || section.body.en}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default LegalModal;
