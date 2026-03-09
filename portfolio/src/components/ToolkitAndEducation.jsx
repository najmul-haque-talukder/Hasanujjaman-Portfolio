import React from 'react';
import { PenTool, Video, Layers, Monitor, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ToolkitAndEducation = () => {
    const { t } = useLanguage();

    // Defensive split helper
    const splitTitle = (path) => {
        const text = t(path);
        if (typeof text !== 'string') return [path, ''];
        const parts = text.split(' ');
        return [parts[0], parts.slice(1).join(' ')];
    };

    const toolkit = [
        { id: 1, category: t('toolkit.categories.vfx'), tools: 'Adobe After Effects, Vyond Animation', icon: <Video size={20} /> },
        { id: 2, category: t('toolkit.categories.post'), tools: 'Adobe Premiere Pro', icon: <Layers size={20} /> },
        { id: 3, category: t('toolkit.categories.vector'), tools: 'Adobe Illustrator, Photoshop', icon: <PenTool size={20} /> },
        { id: 4, category: t('toolkit.categories.mgmt'), tools: 'MS Office Suite, Notion, Slack', icon: <Monitor size={20} /> },
        { id: 5, category: t('toolkit.categories.it_solutions'), tools: 'Windows/Linux Admin, Hardware Repair', icon: <Monitor size={20} /> },
        { id: 6, category: t('toolkit.categories.it_networking'), tools: 'Cisco Routing, MikroTik, LAN/WAN', icon: <Layers size={20} /> },
        { id: 7, category: t('toolkit.categories.motion'), tools: 'Storyboarding, Keyframing, Rendering', icon: <Video size={20} /> },
        { id: 8, category: t('toolkit.categories.tech'), tools: 'API Connectivity, System Syncing', icon: <Layers size={20} /> },
    ];

    const education = t('toolkit.edu_list') || [];
    const certifications = t('toolkit.cert_list') || [];
    const techSystems = t('toolkit.tech_systems') || [];

    const [tkH1, tkH2] = splitTitle('toolkit.headline');
    const [eduH1, eduH2] = splitTitle('toolkit.edu_headline');

    return (
        <section id="toolkit-education" style={{ padding: '6rem 0', backgroundColor: 'var(--primary-bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                    {/* Left Column: Technical Toolkit */}
                    <div>
                        <div className="pill-tag tag-green" style={{ marginBottom: '1.5rem' }}>{t('toolkit.tag')}</div>
                        <h2 className="text-section" style={{ marginBottom: '2rem' }}>
                            {tkH1} <span className="serif-italic">{tkH2}</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '500px' }}>
                            {t('toolkit.desc')}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {toolkit.map((item) => (
                                <div key={item.id} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: '#F9FAFB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.category}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.tools}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column: Academic Background & Certs */}
                    <div>
                        {/* Language Proficiency (Area 1) */}
                        <div className="pill-tag tag-purple" style={{ marginBottom: '1.25rem' }}>{t('toolkit.lang_proficiency')}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)', marginBottom: '3rem' }}>
                            {/* English */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>English</span>
                                    <span style={{ color: 'var(--accent-blue)', fontSize: '0.8rem' }}>{t('toolkit.levels.fluent')}</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--accent-blue)' }}></div>
                                </div>
                            </div>
                            {/* Japanese */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Japanese</span>
                                    <span style={{ color: 'var(--accent-purple)', fontSize: '0.8rem' }}>{t('toolkit.levels.fluent')}</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--accent-purple)' }}></div>
                                </div>
                            </div>
                            {/* Bangla */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Bangla</span>
                                    <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem' }}>{t('toolkit.levels.native')}</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-green)' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="pill-tag tag-orange" style={{ marginBottom: '1.5rem' }}>{t('toolkit.edu_tag')}</div>
                        <h2 className="text-section" style={{ marginBottom: '2rem' }}>
                            {eduH1} <span className="serif-italic">{eduH2}</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            {Array.isArray(education) && education.map((edu, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'white', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{edu.degree}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.institute}</p>
                                    </div>
                                    <div className="pill-tag tag-purple" style={{ whiteSpace: 'nowrap', fontSize: '0.7rem' }}>{edu.year}</div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications Subsection */}
                        <div className="pill-tag tag-blue" style={{ marginBottom: '1.5rem' }}>{t('toolkit.prof_certs')}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {Array.isArray(certifications) && certifications.map((cert, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', backgroundColor: '#F9FAFB', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.02)' }}>
                                    <div>
                                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{cert.name}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{cert.issuer}</p>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{cert.year}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://drive.google.com/drive/folders/1cUpdqhBb79u4hlXxkEta2rISwOAClXUE"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                color: 'var(--accent-purple)',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                padding: '1rem',
                                borderRadius: '16px',
                                border: '1px dashed var(--accent-purple)',
                                justifyContent: 'center'
                            }}
                        >
                            {t('toolkit.cert_btn')} <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Right Column: Callout & Extra (Area 2 & 3) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Core Philosophy (Area 2) */}
                        <div className="bento-card philosophy-card" style={{ padding: '2rem', backgroundColor: 'white', border: '2px solid var(--accent-purple)', borderRadius: '32px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--accent-purple)' }}>{t('toolkit.philosophy_title')}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{t('toolkit.philosophy_text')}</p>
                        </div>

                        <div style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--accent-black) 0%, #333 100%)', borderRadius: '32px', color: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Monitor size={24} color="var(--accent-green)" />
                                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 800 }}>{t('toolkit.workstation_title')}</h3>
                            </div>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                {t('toolkit.workstation_desc')}
                            </p>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: 700 }}>{t('toolkit.workstation_status')}</p>
                            </div>
                        </div>

                        {/* Design Methodology Card (FILL GAP) */}
                        <div className="bento-card methodology-card" style={{ padding: '1.5rem', backgroundColor: '#F0F9FF', borderRadius: '24px', border: '1px solid #BAE6FD' }}>
                            <h4 style={{ fontWeight: 800, color: '#0369A1', marginBottom: '0.5rem' }}>{t('toolkit.methodology_title')}</h4>
                            <p style={{ fontSize: '0.8rem', color: '#075985' }}>{t('toolkit.methodology_text')}</p>
                        </div>

                        {/* Global Timezone (Area 3) */}
                        <div className="bento-card availability-card" style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>🌍</div>
                            <div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{t('toolkit.availability_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('toolkit.availability_text')}</p>
                            </div>
                        </div>

                        <div className="bento-card" style={{ padding: '1.5rem', backgroundColor: 'var(--accent-black)', borderRadius: '24px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '60px', height: '60px', background: 'var(--accent-blue)', opacity: 0.1, borderRadius: '50%' }}></div>
                            <h4 style={{ fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{t('toolkit.tech_systems_title')}</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem' }}>{t('toolkit.tech_systems_desc')}</p>
                            <ul style={{ fontSize: '0.8rem', opacity: 0.9, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {Array.isArray(techSystems) && techSystems.map((sys, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>✔</span> {sys}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    #toolkit-education .container { padding: 0 1.5rem !important; }
                    #toolkit-education .container > div {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 3.5rem !important;
                    }
                    #toolkit-education .container > div > div {
                        width: 100% !important;
                        height: auto !important;
                    }
                    .bento-card { height: auto !important; min-height: auto !important; }
                    #toolkit-education h2 { font-size: 1.85rem !important; }
                }
                @media (max-width: 768px) {
                    #toolkit-education div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ToolkitAndEducation;
