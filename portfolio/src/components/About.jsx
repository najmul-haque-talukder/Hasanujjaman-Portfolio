import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import my_story_1 from '../assets/my_story_1.png';
import my_story_2 from '../assets/my_story_2.png';
import my_story_3 from '../assets/my_story_3.png';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" style={{ padding: '4rem 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(180px, auto)', gap: '1.25rem' }} className="about-bento-grid">

                    {/* Hero Info Card */}
                    <div className="bento-card" style={{ gridColumn: 'span 8', gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--accent-black)', color: 'white' }}>
                        <h2 className="text-hero" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', marginBottom: '2rem', lineHeight: 1.1 }}>
                            {t('about.bento_title').split(' ').map((word, i) => (
                                <span key={i}>
                                    {word === 'Motion' || word === 'মোশন' || word === 'モーション' ? <span className="serif-italic" style={{ color: 'var(--accent-blue)' }}>{word}</span> :
                                        word === 'Design' || word === 'ডিজাইনের' || word === 'デザイン' ? <span className="serif-italic" style={{ color: 'var(--accent-purple)' }}>{word}</span> : word}{' '}
                                </span>
                            ))}
                        </h2>
                        <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <p>{t('about.body_p1')}</p>
                            <p>{t('about.body_p2')}</p>
                        </div>
                    </div>

                    {/* Image 1 (Primary) */}
                    <img src={my_story_1} alt={t('about.tag')} className="about-img" style={{ gridColumn: 'span 4', gridRow: 'span 2', width: '100%', height: '100%', minHeight: '100%', objectFit: 'cover', aspectRatio: '3/4', display: 'block', borderRadius: 'var(--radius-lg)' }} />

                    {/* Experience Highlights */}
                    <div className="bento-card" style={{ gridColumn: 'span 4', gridRow: 'span 2', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: '#F0F9FF', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>🏆</div>
                            <div>
                                <h4 style={{ fontWeight: 800 }}>{t('about.quality_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('about.quality_desc')}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: '#F5F3FF', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>⚡</div>
                            <div>
                                <h4 style={{ fontWeight: 800 }}>{t('about.delivery_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('about.delivery_desc')}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: '#FFFBEB', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)' }}>💡</div>
                            <div>
                                <h4 style={{ fontWeight: 800 }}>{t('about.strategy_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('about.strategy_desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <img src={my_story_2} alt={t('about.tag')} className="about-img" style={{ gridColumn: 'span 4', gridRow: 'span 2', width: '100%', height: '100%', minHeight: '100%', objectFit: 'cover', aspectRatio: '1/1', display: 'block', borderRadius: 'var(--radius-lg)' }} />

                    {/* Image 3 */}
                    <img src={my_story_3} alt={t('about.tag')} className="about-img" style={{ gridColumn: 'span 4', gridRow: 'span 2', width: '100%', height: '100%', minHeight: '100%', objectFit: 'cover', aspectRatio: '1/1', display: 'block', borderRadius: 'var(--radius-lg)' }} />

                    {/* Mission Card */}
                    <div className="bento-card mission-card" style={{ gridColumn: 'span 8', gridRow: 'span 1', backgroundColor: 'var(--accent-purple)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'white' }}>{t('about.mission_title')}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                            {t('about.mission_body')}
                        </p>
                    </div>

                    {/* Languages Card */}
                    <div className="bento-card languages-card" style={{ gridColumn: 'span 4', gridRow: 'span 1', backgroundColor: '#F9FAFB', border: '1px solid var(--accent-blue)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.25rem' }}>
                        <h4 style={{ fontWeight: 800, color: 'var(--accent-blue)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{t('about.languages_tag')}</h4>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>{t('about.languages')}</p>
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .about-bento-grid {
                        grid-template-columns: 1fr !important;
                        grid-auto-rows: auto !important;
                        gap: 1.25rem !important;
                    }
                    .bento-card {
                        grid-column: 1 / -1 !important;
                        grid-row: auto !important;
                        padding: 1.5rem !important;
                    }
                    .about-img {
                        grid-column: 1 / -1 !important;
                        grid-row: auto !important;
                    }
                    .mission-card, .languages-card {
                        padding: 1.25rem !important;
                        min-height: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
