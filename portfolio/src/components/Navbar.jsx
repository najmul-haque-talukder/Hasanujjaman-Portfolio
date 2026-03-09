import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-aesthetic container">
      <div className="nav-logo">
        <a href="#home">
          <img src={logoImg} alt="Hasanujjaman" style={{ height: '40px', width: 'auto' }} />
        </a>
      </div>

      <div className={`nav-links-aesthetic ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t('nav.portfolio')}</a>
        <a href="#reviews" onClick={() => setIsMenuOpen(false)}>{t('nav.reviews')}</a>

        {/* Mobile-only Actions */}
        <div className="mobile-actions">
          <button
            onClick={() => {
              if (language === 'en') setLanguage('bn');
              else if (language === 'bn') setLanguage('jp');
              else setLanguage('en');
              setIsMenuOpen(false);
            }}
            className="lang-toggle-mobile"
          >
            <Globe size={18} />
            <span>
              {language === 'en' ? 'বাংলা' : language === 'bn' ? '日本語' : 'English'}
            </span>
          </button>
        </div>
      </div>

      <div className="nav-actions">
        <button
          onClick={() => {
            if (language === 'en') setLanguage('bn');
            else if (language === 'bn') setLanguage('jp');
            else setLanguage('en');
          }}
          className="lang-toggle hide-mobile"
          title="Switch Language"
        >
          <Globe size={18} />
          <span>
            {language === 'en' ? 'বাংলা' : language === 'bn' ? '日本語' : 'English'}
          </span>
        </button>

        <button className="btn-pill btn-black hide-mobile" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
          {t('nav.cta')} <span style={{ marginLeft: '0.25rem' }}>↗</span>
        </button>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
