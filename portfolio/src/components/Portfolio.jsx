import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import caseStudiesData from '../data/case_studies.json';

// Static image map — required by Vite to bundle assets at build time
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';
import project_4 from '../assets/project_4.png';

const imageMap = { project_1, project_2, project_3, project_4 };

const Portfolio = () => {
    const { t, language } = useLanguage();

    return (
        <section id="portfolio" style={{ padding: '4rem 0', backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }} className="portfolio-header">
                    <div style={{ maxWidth: '600px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 1rem', backgroundColor: '#F5F3FF', color: 'var(--accent-purple)', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                            {t('portfolio.tag')}
                        </div>
                        <h2 className="text-hero" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'var(--text-main)', letterSpacing: '-0.04em' }}>
                            {t('portfolio.headline')}
                        </h2>
                    </div>
                </div>

                {/* Portfolio Bento Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem', gridAutoRows: '400px' }} className="portfolio-bento-grid">
                    {caseStudiesData.map((project) => (
                        <div key={project.id} className="bento-card" style={{
                            gridColumn: 'span 6',
                            gridRow: 'span 1',
                            padding: 0,
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={imageMap[project.image]}
                                alt={project.name[language] || project.name.en}
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                className="project-img"
                            />

                            {/* Content Overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', transition: 'all 0.4s ease' }} className="project-overlay">
                                <div style={{ transform: 'translateY(10px)', transition: 'all 0.4s ease' }} className="project-content">
                                    <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                                        {project.name[language] || project.name.en}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {(project.tags[language] || project.tags.en).map(tag => (
                                            <span key={tag} style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.75rem', padding: '0.4rem 1rem', borderRadius: '999px', backdropFilter: 'blur(5px)', fontWeight: 600 }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Arrow */}
                            <a href={project.link} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '48px', height: '48px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', opacity: 0, transform: 'scale(0.8)', transition: 'all 0.4s ease', textDecoration: 'none' }} className="project-arrow">
                                <ArrowUpRight size={24} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .bento-card:hover .project-img {
                    transform: scale(1.05);
                }
                .bento-card:hover .project-overlay {
                    background: linear-gradient(to top, rgba(99, 102, 241, 0.95) 0%, rgba(99, 102, 241, 0.4) 100%);
                }
                .bento-card:hover .project-content {
                    transform: translateY(0);
                }
                .bento-card:hover .project-arrow {
                    opacity: 1;
                    transform: scale(1);
                }
                @media (max-width: 1024px) {
                    .portfolio-header { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
                    .portfolio-bento-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.25rem !important;
                    }
                    .bento-card {
                        grid-column: 1 / -1 !important;
                        grid-row: auto !important;
                        height: clamp(300px, 55vw, 340px) !important;
                    }
                    .project-content h3 { font-size: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
