import React from 'react';
import { Monitor, Cpu, HardDrive } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Studio = () => {
    const { t } = useLanguage();

    // Fallback icons map
    const iconMap = {
        0: <Cpu size={24} />,
        1: <Monitor size={24} />,
        2: <HardDrive size={24} />,
        3: <Monitor size={24} />
    };

    const specs = t('toolkit.studio.specs') || [];

    return (
        <section id="studio" style={{ padding: '4rem 0', backgroundColor: 'var(--accent-black)', color: 'white', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div>
                        <div className="pill-tag" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent-yellow)', marginBottom: '1.5rem' }}>{t('toolkit.studio.tag')}</div>
                        <h2 className="text-hero" style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                            {t('toolkit.studio.headline_part1')} <span className="serif-italic" style={{ color: 'var(--accent-yellow)' }}>{t('toolkit.studio.headline_part2')}</span> {t('toolkit.studio.headline_part3')}
                        </h2>
                        <p style={{ opacity: 0.7, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                            {t('toolkit.studio.desc')}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="studio-stats">
                            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ color: 'var(--accent-yellow)', fontWeight: 800 }}>{t('toolkit.studio.stats.stat1_val')}</h4>
                                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{t('toolkit.studio.stats.stat1_label')}</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ color: 'var(--accent-blue)', fontWeight: 800 }}>{t('toolkit.studio.stats.stat2_val')}</h4>
                                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{t('toolkit.studio.stats.stat2_label')}</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ color: 'var(--accent-purple)', fontWeight: 800 }}>{t('toolkit.studio.stats.stat3_val')}</h4>
                                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{t('toolkit.studio.stats.stat3_label')}</p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ color: 'var(--accent-green)', fontWeight: 800 }}>{t('toolkit.studio.stats.stat4_val')}</h4>
                                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{t('toolkit.studio.stats.stat4_label')}</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        {specs.map((item, index) => (
                            <div key={index} className="bento-card" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                                <div style={{ minWidth: '48px', height: '48px', backgroundColor: 'rgba(255,249,234,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)' }}>
                                    {iconMap[index]}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '0.2rem' }}>{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    #studio { padding: 5rem 0 !important; }
                    #studio h2 { font-size: 1.85rem !important; margin-bottom: 1.25rem !important; }
                    #studio .container > div {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 3rem !important;
                    }
                    .studio-stats {
                        grid-template-columns: repeat(2, 1fr) !important;
                        width: 100% !important;
                    }
                    #studio div[style*="grid-template-columns: 1fr"] {
                        gap: 1.25rem !important;
                        width: 100% !important;
                    }
                    .bento-card { padding: 1.5rem !important; }
                }
                @media (max-width: 480px) {
                    .studio-stats {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Studio;
