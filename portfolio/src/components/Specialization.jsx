import React from 'react';
import { Video, Zap, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Specialization = () => {
    const { t } = useLanguage();

    const services = [
        { id: 1, title: t('services.video_editing'), desc: t('services.video_desc'), tag: t('hero.tags.production'), tagClass: 'tag-orange', icon: <Video size={24} /> },
        { id: 2, title: t('services.motion_graphics'), desc: t('services.motion_desc'), tag: t('hero.tags.creativity'), tagClass: 'tag-purple', icon: <Zap size={24} /> },
        { id: 3, title: t('services.vfx'), desc: t('services.vfx_desc'), tag: t('hero.tags.innovation'), tagClass: 'tag-purple', icon: <Sparkles size={24} /> },
        { id: 4, title: t('services.branding'), desc: t('services.branding_desc'), tag: t('hero.tags.strategy'), tagClass: 'tag-green', icon: <Layers size={24} /> },
        { id: 5, title: t('services.ai_title'), desc: t('services.ai_desc'), tag: t('services.ai_tag'), tagClass: 'tag-blue', icon: <Sparkles size={24} /> },
    ];

    const timeline = t('toolkit.journey_list') || [];

    return (
        <section id="services" style={{ padding: '2.5rem 0', backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 1rem', backgroundColor: '#F5F3FF', color: 'var(--accent-purple)', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '2rem' }}>
                        {t('services.tag')}
                    </div>
                    <h2 className="text-hero" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
                        {t('services.bento_headline').split(' ').map((word, i) => (
                            <span key={i}>
                                {word === 'Stunning' || word === 'অসাধারণ' || word === '驚異的な' ? <span className="serif-italic" style={{ color: 'var(--accent-blue)' }}>{word}</span> :
                                    word === 'Realities' || word === 'রিয়ালিটিতে' || word === '現実に' ? <span className="serif-italic" style={{ color: 'var(--accent-purple)' }}>{word}</span> : word}{' '}
                            </span>
                        ))}
                    </h2>
                </div>

                {/* Services Bento Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem', marginBottom: '6rem' }} className="services-bento-grid">
                    {services.map((service, index) => (
                        <div key={service.id} className="bento-card" style={{
                            gridColumn: index < 2 ? 'span 6' : 'span 4',
                            gridRow: index >= 2 ? 'span 1' : 'span 1',
                            backgroundColor: index === 0 ? 'var(--accent-blue)' : 'white',
                            color: index === 0 ? 'white' : 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ width: '64px', height: '64px', backgroundColor: index === 0 ? 'rgba(255,255,255,0.1)' : '#F1F5F9', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: index === 0 ? 'white' : 'var(--accent-blue)' }}>
                                    {service.icon}
                                </div>
                                <div className={`pill-tag`} style={{ fontSize: '0.75rem', backgroundColor: index === 0 ? 'rgba(255,255,255,0.15)' : '#F1F5F9', color: index === 0 ? 'white' : 'var(--text-muted)' }}>{service.tag}</div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: index === 0 ? 'white' : 'inherit' }}>{service.title}</h3>
                                <p style={{ color: index === 0 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional Journey - Creative Bento Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', gridAutoRows: 'minmax(180px, auto)' }} className="journey-bento-grid">
                    <div className="bento-card" style={{ gridColumn: 'span 4', backgroundColor: 'var(--accent-black)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: 'white' }}>
                            {t('services.journey_title').split(' ').map((word, i) => (
                                <span key={i}>
                                    {word === 'Journey' || word === 'বিবর্তন' || word === '歩み' ? <span className="serif-italic" style={{ color: 'var(--accent-yellow)' }}>{word}</span> : word}{' '}
                                </span>
                            ))}
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>{t('services.journey_desc')}</p>
                    </div>

                    {timeline.map((item, index) => (
                        <div key={index} className="bento-card" style={{
                            gridColumn: 'span 4',
                            gridRow: 'span 1',
                            transition: 'all 0.4s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent-blue)', marginBottom: '1.5rem' }}></div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>{item.role}</h4>
                                <p style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .bento-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-xl); }
                @media (max-width: 1024px) {
                    .services-bento-grid, .journey-bento-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.25rem !important;
                    }
                    .bento-card {
                        grid-column: 1 / -1 !important;
                        grid-row: auto !important;
                        padding: 2rem !important;
                        height: auto !important;
                        min-height: auto !important;
                    }
                    .bento-card h3 { font-size: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Specialization;
