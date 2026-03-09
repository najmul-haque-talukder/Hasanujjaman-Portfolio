import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const RiskFreeCTA = () => {
    const { t } = useLanguage();

    return (
        <section style={{ padding: '3rem 0', backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '2.5rem 1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.01)' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 1rem', backgroundColor: '#F5F3FF', color: 'var(--accent-purple)', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                            {t('cta.tag')}
                        </div>
                        <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            {t('cta.headline_talk')} <span className="serif-italic" style={{ color: 'var(--accent-blue)' }}>{t('cta.headline_build')}</span> {t('cta.headline_incredible')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                            {t('cta.subheadline')}
                        </p>
                        <a href="mailto:mdhasanbp@gmail.com" className="btn-pill" style={{
                            padding: '0.6rem 1.75rem',
                            backgroundColor: 'var(--accent-blue)',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            borderRadius: '999px'
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            {t('cta.primary_btn')} <ArrowUpRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #risk-free-cta { padding: 4rem 1.25rem !important; margin: 0 !important; }
                    #risk-free-cta > div { padding: 3rem 1.5rem !important; border-radius: 24px !important; }
                    #risk-free-cta h2 { font-size: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default RiskFreeCTA;
