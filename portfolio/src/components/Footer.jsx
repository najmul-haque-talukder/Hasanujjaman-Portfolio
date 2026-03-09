import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Figma, Github, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';
import LegalModal from './LegalModal';

const Footer = () => {
    const { t } = useLanguage();
    const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

    return (
        <>
            <footer style={{ backgroundColor: '#F9FAFB', padding: '5rem 0 3rem' }}>
                <div className="container footer-grid-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem',
                    paddingLeft: 'clamp(1rem, 5vw, 4rem)',
                    paddingRight: 'clamp(1rem, 5vw, 4rem)'
                }}>

                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 2' }} className="footer-brand">
                        <img src={logoImg} alt="Hasanujjaman" style={{ height: '40px', width: 'auto', marginBottom: '1.75rem' }} />
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '400px' }}>
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem' }}>{t('footer.sitemap')}</h4>
                        <ul className="footer-links">
                            <li><a href="#home">{t('nav.home')}</a></li>
                            <li><a href="#services">{t('services.tag')}</a></li>
                            <li><a href="#about">{t('nav.about')}</a></li>
                            <li><a href="#portfolio">{t('nav.portfolio')}</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem' }}>{t('footer.socials')}</h4>
                        <ul className="footer-links">
                            <li><a href="https://www.linkedin.com/in/engr-hasanbp" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/engr.hasanbp?igsh=bnIwOWV1ZHFpdnpl&utm_source=qr" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a></li>
                            <li><a href="https://www.facebook.com/engr.hasanbp" target="_blank" rel="noopener noreferrer"><Facebook size={16} /> Facebook</a></li>
                            <li><a href="https://www.behance.net/engr-hasanbp" target="_blank" rel="noopener noreferrer"><Figma size={16} /> Behance</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.75rem' }}>{t('footer.contact')}</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:mdhasanbp@gmail.com"><Mail size={16} /> mdhasanbp@gmail.com</a></li>
                            <li><a href="tel:+8801675007398"><Phone size={16} /> +880 1675-007398</a></li>
                            <li><span style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9375rem' }}><MapPin size={16} /> Kita-ku, Tokyo, Japan</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-container" style={{
                    borderTop: '1px solid rgba(229, 231, 235, 0.5)',
                    padding: '2.5rem clamp(1rem, 5vw, 4rem) 2.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    margin: '0 auto',
                    backgroundColor: 'rgba(249, 250, 251, 0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        &copy; 2026 Hasanujjaman. {t('footer.rights')}
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <button
                            onClick={() => setLegalModal('privacy')}
                            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-purple)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            {t('footer.privacy')}
                        </button>
                        <button
                            onClick={() => setLegalModal('terms')}
                            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-purple)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            {t('footer.terms')}
                        </button>
                    </div>
                </div>

                <style>{`
                .footer-links {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .footer-links a {
                    text-decoration: none;
                    color: var(--text-muted);
                    font-size: 0.9375rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    transition: color 0.3s ease;
                }
                .footer-links a:hover {
                    color: var(--accent-blue);
                }
                @media (max-width: 1024px) {
                    footer .container > div:first-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 640px) {
                    footer .container > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            </footer>

            {legalModal && (
                <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
            )}
        </>
    );
};

export default Footer;
