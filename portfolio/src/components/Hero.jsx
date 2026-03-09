import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import authorImg from '../assets/author.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="glow-wrapper" style={{ padding: '4rem 0 2rem', position: 'relative' }}>
            <div className="glow-top-left"></div>

            <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

                <div className="animate-fade-in" style={{ maxWidth: '1000px' }}>
                    <h1 className="text-hero" style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.04em', color: 'var(--text-main)' }}>
                        {t('hero.headline_1')} <span className="serif-italic" style={{ color: 'var(--accent-blue)' }}>{t('hero.headline_2')}</span> <br />
                        {t('hero.headline_3')} <span className="serif-italic" style={{ color: 'var(--accent-purple)' }}>{t('hero.headline_4')}</span>
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                        {t('hero.subheadline')}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                        <a href="mailto:mdhasanbp@gmail.com" className="btn-pill btn-blue" style={{ fontSize: '1.125rem', padding: '1.25rem 2.8rem', borderRadius: '999px' }}>
                            {t('hero.cta')} <ArrowUpRight size={22} />
                        </a>

                        {/* Trusted By */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1.25rem', backgroundColor: 'white', borderRadius: '100px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#E2E8F0', marginLeft: '-8px', overflow: 'hidden' }}>
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', backgroundColor: 'var(--accent-blue)', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.6rem', fontWeight: 800 }}>
                                    +
                                </div>
                            </div>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>{t('hero.trusted')}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Badge section */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>

                    {/* The Arch Background */}
                    <div className="arch-bg" style={{
                        position: 'relative',
                        zIndex: 1,
                        backgroundColor: 'var(--accent-blue)',
                        width: 'clamp(300px, 50vw, 550px)',
                        height: 'clamp(400px, 65vw, 700px)',
                        borderRadius: '300px 300px 32px 32px',
                        boxShadow: '0 30px 70px rgba(99, 102, 241, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        overflow: 'visible'
                    }}>
                        <img
                            src={authorImg}
                            alt="MD Hasanujjaman"
                            style={{
                                height: '100%',
                                width: 'auto',
                                maxWidth: 'none',
                                marginBottom: '0',
                                display: 'block',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                                position: 'relative',
                                zIndex: 2
                            }}
                        />

                        {/* Experience Badge */}
                        <div className="exp-badge" style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '-15%',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '1.75rem',
                            borderRadius: '24px',
                            textAlign: 'left',
                            zIndex: 2,
                            boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                            minWidth: '200px'
                        }}>
                            <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>{t('hero.experience')}</p>
                            <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800 }}>+5 Years</h3>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .text-hero { font-size: clamp(2.5rem, 8vw, 4.5rem) !important; }
                    #home { padding: 8rem 0 4rem !important; }
                }
                @media (max-width: 768px) {
                    .text-hero { font-size: clamp(2.5rem, 10vw, 3.5rem) !important; }
                    #home { padding: 6rem 0 3rem !important; }
                    #home .container { gap: 2rem !important; }
                    .arch-bg { 
                        width: 280px !important; 
                        height: 380px !important; 
                        margin-top: 2rem !important;
                    }
                    .exp-badge {
                        right: -10px !important;
                        bottom: 0px !important;
                        padding: 1rem !important;
                        min-width: 140px !important;
                    }
                    .exp-badge h3 { font-size: 1.25rem !important; }
                }
                @media (max-width: 480px) {
                    .arch-bg { 
                        width: 240px !important; 
                        height: 320px !important; 
                    }
                    .exp-badge {
                        right: 50% !important;
                        transform: translateX(50%) !important;
                        bottom: -20px !important;
                        padding: 1rem !important;
                        min-width: 160px !important;
                        text-align: center !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
