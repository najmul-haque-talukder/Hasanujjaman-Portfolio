import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const steps = [
        { title: t('process.step1_title'), desc: t('process.step1_desc') },
        { title: t('process.step2_title'), desc: t('process.step2_desc') },
        { title: t('process.step3_title'), desc: t('process.step3_desc') },
        { title: t('process.step4_title'), desc: t('process.step4_desc') },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" style={{ padding: '8rem 0', backgroundColor: 'white' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '6rem' }}>

                <div>
                    <div className="pill-tag tag-orange" style={{ marginBottom: '1.5rem' }}>{t('process.tag')}</div>
                    <h2 className="text-section" style={{ marginBottom: '2rem' }}>{t('process.headline')}</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                        {t('process.subheadline')}
                    </p>
                    <a href="mailto:mdhasanbp@gmail.com" className="btn-pill btn-white" style={{ fontSize: '0.9375rem' }}>
                        {t('hero.cta')} <span style={{ marginLeft: '0.5rem' }}>↗</span>
                    </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #F3F4F6', padding: '1.5rem 0' }}>
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '1rem 0' }}
                            >
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: openIndex === index ? 'var(--accent-blue)' : 'var(--text-main)', transition: 'color 0.3s ease' }}>{step.title}</span>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: openIndex === index ? 'var(--accent-blue)' : '#F9FAFB', color: openIndex === index ? 'white' : 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            {openIndex === index && (
                                <p style={{ color: 'var(--text-muted)', paddingBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.0625rem', maxWidth: '500px', animation: 'fadeIn 0.5s ease-out' }}>
                                    {step.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <style>{`
                @media (max-width: 1024px) {
                    #faq { padding: 4rem 0 !important; }
                    #faq .container {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    #faq h2 { font-size: 2.25rem !important; }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
