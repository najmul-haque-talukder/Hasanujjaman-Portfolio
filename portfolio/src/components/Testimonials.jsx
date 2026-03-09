import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import reviewsData from '../data/testimonials.json';

const Testimonials = () => {
    const { t, language } = useLanguage();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else if (window.innerWidth < 1200) setItemsToShow(3);
            else setItemsToShow(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, reviewsData.length - itemsToShow);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section id="testimonials" style={{ padding: '4rem 0', backgroundColor: '#F8FAFC', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="pill-tag tag-purple" style={{ marginBottom: '1.5rem' }}>{t('reviews.tag')}</div>
                    <h2 className="text-hero" style={{ fontSize: '3rem' }}>
                        {t('reviews.headline').split(' ').map((word, i) => (
                            <span key={i}>
                                {word === 'Global' || word === 'বৈশ্বিক' || word === 'グローバル' ? <span className="serif-italic">{word}</span> : word}{' '}
                            </span>
                        ))}
                    </h2>
                </div>

                <div style={{ position: 'relative', margin: '0 -1rem' }}>
                    {/* Navigation Buttons */}
                    <button onClick={prevSlide} style={{ position: 'absolute', left: '-20px', top: '50%', zIndex: 10, transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} style={{ position: 'absolute', right: '-20px', top: '50%', zIndex: 10, transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                        <ChevronRight size={24} />
                    </button>

                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-out',
                        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}>
                        {reviewsData.map((review) => (
                            <div key={review.id} style={{
                                minWidth: `${100 / itemsToShow}%`,
                                padding: '1rem',
                                boxSizing: 'border-box'
                            }}>
                                <div className="bento-card" style={{
                                    backgroundColor: 'white',
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                                    borderRadius: '32px'
                                }}>
                                    <div style={{ color: 'var(--accent-purple)', opacity: 0.15, marginBottom: '1.5rem' }}>
                                        <Quote size={40} fill="currentColor" />
                                    </div>
                                    <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-main)', fontStyle: 'normal', marginBottom: '2rem', flexGrow: 1 }}>
                                        {review.text[language] || review.text.en}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', margin: 0 }}>{review.name}</h4>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.1rem', margin: 0 }}>{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1200px) {
                    div[style*="transform: translateX"] {
                        gap: 0 !important;
                    }
                    div[style*="min-width: 25%"] {
                        min-width: 100% !important; /* One card at a time on mobile */
                        padding: 0 0.5rem !important;
                    }
                    /* Ensure buttons are visible but scaled */
                    button[onClick*="Slide"] { 
                        width: 40px !important;
                        height: 40px !important;
                        top: auto !important;
                        bottom: -15px !important;
                        transform: translateY(100%) !important;
                    }
                    button[onClick*="prevSlide"] { left: 35% !important; }
                    button[onClick*="nextSlide"] { right: 35% !important; left: auto !important; }
                    
                    #testimonials h2 { font-size: 1.85rem !important; }
                    #testimonials { padding: 3rem 0 !important; padding-bottom: 5rem !important; }
                    .bento-card { margin: 0 !important; border-radius: 24px !important; }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
