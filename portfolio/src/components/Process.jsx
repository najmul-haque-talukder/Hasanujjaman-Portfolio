import React from 'react';
import { Search, PenTool, PlayCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
    const { t } = useLanguage();
    const steps = [
        { id: 1, title: t('process.step1_title'), desc: t('process.step1_desc'), icon: <Search size={24} /> },
        { id: 2, title: t('process.step2_title'), desc: t('process.step2_desc'), icon: <PenTool size={24} /> },
        { id: 3, title: t('process.step3_title'), desc: t('process.step3_desc'), icon: <PlayCircle size={24} /> },
        { id: 4, title: t('process.step4_title'), desc: t('process.step4_desc'), icon: <CheckCircle size={24} /> },
    ];

    return (
        <section id="process" style={{ padding: '4rem 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="pill-tag tag-blue" style={{ marginBottom: '1.5rem' }}>{t('process.tag')}</div>
                    <h2 className="text-hero" style={{ fontSize: '2.5rem' }}>{t('process.headline')}</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {steps.map((step) => (
                        <div key={step.id} className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#F8FAFC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-blue)' }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #process { padding: 4rem 0 !important; }
                    .bento-card { 
                        padding: 2rem 1.5rem !important;
                        height: auto !important;
                        min-height: auto !important;
                    }
                    #process h2 { font-size: 2rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Process;
