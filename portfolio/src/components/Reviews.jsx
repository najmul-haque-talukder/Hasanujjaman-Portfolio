import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Reviews = () => {
    const { t } = useLanguage();

    const tools = [
        { name: 'Premiere Pro', char: 'Pr', color: '#00005C', angle: 285, radius: 210 },
        { name: 'After Effects', char: 'Ae', color: '#03001C', angle: 330, radius: 280 },
        { name: 'Photoshop', char: 'Ps', color: '#31A8FF', angle: 15, radius: 220 },
        { name: 'Illustrator', char: 'Ai', color: '#FF9A00', angle: 60, radius: 275 },
        { name: 'Capcut', char: 'Cc', color: '#000', angle: 110, radius: 200 },
        { name: 'Gemini', char: 'G', color: '#4E86FF', angle: 160, radius: 285 },
        { name: 'ChatGPT', char: 'Ai', color: '#74AA9C', angle: 210, radius: 190 },
        { name: 'DaVinci', char: 'Dr', color: '#FF4B2B', angle: 245, radius: 270 },
    ];

    return (
        <section id="reviews" style={{ padding: '4rem 0', backgroundColor: 'var(--primary-bg)', overflow: 'hidden', position: 'relative' }}>
            {/* Background Decorative Element */}
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', position: 'relative', zIndex: 20 }}>
                    <div className="pill-tag tag-blue" style={{ marginBottom: '1.25rem' }}>{t('services.ai_tag')}</div>
                    <h2 className="text-hero" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                        {t('services.bento_headline').split('Into')[0]} <br /> <span className="serif-italic" style={{ color: 'var(--accent-blue)' }}>{t('services.tag')}</span> {t('services.bento_headline').split('Into')[1]}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                        {t('reviews.subheadline')}
                    </p>
                </div>

                {/* Circular Social Proof Orbit */}
                <div className="orbit-container" style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Central Hub */}
                    <div className="orbit-hub" style={{
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        border: '2px solid rgba(0,0,0,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        position: 'relative',
                        zIndex: 10,
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-purple)', margin: '0', letterSpacing: '-0.05em', lineHeight: 1 }}>75+</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', marginTop: '0.25rem' }}>{t('services.journey_title')}</p>
                        </div>
                    </div>

                    {/* Orbit Paths (Dashed) */}
                    <div className="orbit-paths" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', zIndex: 0 }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', borderRadius: '50%', border: '2px dashed rgba(75, 75, 250, 0.12)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '75%', height: '75%', borderRadius: '50%', border: '2px dashed rgba(168, 85, 247, 0.1)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', height: '50%', borderRadius: '50%', border: '2px dashed rgba(75, 75, 250, 0.08)' }}></div>
                    </div>

                    {/* Orbiting Elements (Fixed on Path) */}
                    <div className="orbit-logos" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        {tools.map((tool, index) => {
                            const radian = (tool.angle * Math.PI) / 180;
                            const x = tool.radius * Math.cos(radian);
                            const y = tool.radius * Math.sin(radian);

                            return (
                                <div key={index} className="orbit-element" style={{
                                    position: 'absolute',
                                    top: `calc(50% + ${y}px)`,
                                    left: `calc(50% + ${x}px)`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 11,
                                    pointerEvents: 'auto'
                                }}>
                                    <div className="tool-logo-wrapper" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            backgroundColor: tool.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
                                            overflow: 'hidden',
                                            border: '2px solid white'
                                        }}>
                                            <span style={{ color: 'white', fontWeight: 900, fontSize: '0.9rem' }}>{tool.char}</span>
                                        </div>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-main)', backgroundColor: 'rgba(255,255,255,0.95)', padding: '0.1rem 0.5rem', borderRadius: '999px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                            {tool.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float-orbit {
                    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    50% { transform: translate(-50%, -50%) translateY(-10px); }
                }
                .orbit-element {
                    animation: float-orbit 6s ease-in-out infinite;
                }
                .orbit-element:nth-child(even) { animation-delay: 1.5s; }
                
                .tool-logo-wrapper:hover {
                    transform: scale(1.1) !important;
                    z-index: 100;
                }

                @media (max-width: 1024px) {
                    .orbit-container { 
                        height: auto !important; 
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 2.5rem !important;
                        margin: 2rem 0 !important;
                        padding: 0 !important;
                    }
                    .orbit-hub { 
                        position: relative !important;
                        margin: 0 auto !important; 
                        width: 180px !important;
                        height: 180px !important;
                        flex-shrink: 0 !important;
                    }
                    .orbit-hub h3 { font-size: 2.5rem !important; }
                    
                    .orbit-paths { display: none !important; }
                    
                    .orbit-logos {
                        position: relative !important;
                        width: 100% !important;
                        height: auto !important;
                        display: grid !important;
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 1.5rem !important;
                        padding: 2.5rem 1.5rem !important;
                        background: rgba(255,255,255,0.4) !important;
                        border-radius: 32px !important;
                        border: 1px solid rgba(0,0,0,0.02) !important;
                        pointer-events: auto !important;
                        top: auto !important;
                        left: auto !important;
                    }
                    
                    .orbit-element { 
                        position: static !important; 
                        transform: none !important; 
                        animation: none !important; 
                        display: flex !important;
                        justify-content: center !important;
                    }
                    
                    .tool-logo-wrapper { scale: 1 !important; transform: none !important; }
                }
                @media (max-width: 600px) {
                    .orbit-logos { 
                        grid-template-columns: repeat(3, 1fr) !important;
                    }
                }
                @media (max-width: 400px) {
                    .orbit-logos { 
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Reviews;
