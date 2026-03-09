import React from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Insights = () => {
    const { t } = useLanguage();
    const articles = [
        { id: 1, category: t('insights.categories.strategy'), title: t('insights.articles.art1'), icon: <TrendingUp size={20} /> },
        { id: 2, category: t('insights.categories.technical'), title: t('insights.articles.art2'), icon: <Zap size={20} /> },
        { id: 3, category: t('insights.categories.trends'), title: t('insights.articles.art3'), icon: <Sparkles size={20} /> },
    ];

    return (
        <section id="insights" style={{ padding: '8rem 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div className="pill-tag tag-purple" style={{ marginBottom: '1.5rem' }}>{t('insights.tag')}</div>
                    <h2 className="text-section">{t('insights.headline')}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {articles.map((item) => (
                        <div key={item.id} className="bento-card" style={{ padding: '2.5rem', border: '1px solid #F1F5F9', transition: 'all 0.3s ease', cursor: 'default' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem', display: 'block' }}>
                                {item.category}
                            </span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.4, marginBottom: '2rem', color: 'var(--accent-black)' }}>
                                {item.title}
                            </h3>
                            <button style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'gap 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                                onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                            >
                                {t('insights.read_more')} <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                #insights .bento-card:hover {
                    border-color: var(--accent-purple) !important;
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.08);
                }
                @media (max-width: 1024px) {
                    #insights { padding: 4rem 0 !important; }
                    #insights .text-section { font-size: 2.25rem !important; }
                    #insights div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Insights;
