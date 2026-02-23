'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { language, changeLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const experiences = t('experience.items') || [];

  const techStack = [
    "Swift", "SwiftUI", "UIKit", "Combine", "Core Data", 
    "MVVM", "VIPER", "Clean Architecture", "CI/CD", "Git"
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}
        style={{ 
          background: isScrolled ? 'var(--color-bg)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--color-border-light)' : 'none'
        }}
      >
        <div className="container-main">
          <div className="flex justify-between items-center">
            <a href="#" className="text-lg font-medium">
              Emre Gemici
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('about')} className="nav-link">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                {t('nav.experience')}
              </button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                {t('nav.projects')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                {t('nav.contact')}
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded transition-all ${language === 'en' ? 'font-medium' : 'opacity-50'}`}
                >
                  EN
                </button>
                <span style={{ color: 'var(--color-text-tertiary)' }}>/</span>
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`px-2 py-1 rounded transition-all ${language === 'tr' ? 'font-medium' : 'opacity-50'}`}
                >
                  TR
                </button>
              </div>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition-all hover:opacity-70"
                style={{ background: 'var(--color-bg-secondary)' }}
              >
                {isDark ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('about')} className="nav-link text-left text-lg">
                  {t('nav.about')}
                </button>
                <button onClick={() => scrollToSection('experience')} className="nav-link text-left text-lg">
                  {t('nav.experience')}
                </button>
                <button onClick={() => scrollToSection('projects')} className="nav-link text-left text-lg">
                  {t('nav.projects')}
                </button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left text-lg">
                  {t('nav.contact')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-main w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="text-caption mb-6"><span className="no-uppercase">{t('hero.captionPrefix')}</span> {t('hero.captionSuffix')}</p>
              
              <h1 className="mb-8">
                <span className="text-headline-serif block mb-2">{t('hero.greeting')}</span>
                <span className="text-display block">{t('hero.name')}</span>
              </h1>
              
              <p className="text-body-lg max-w-xl mb-10" style={{ color: 'var(--color-text-secondary)' }}>
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12 lg:mb-0">
                <button onClick={() => scrollToSection('projects')} className="btn-primary">
                  {t('hero.cta1')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                  {t('hero.cta2')}
                </button>
              </div>
            </div>
            
            {/* Right - Profile Image & Stats */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="flex flex-col items-center lg:items-end gap-8">
                {/* Profile Image */}
                <div className="profile-frame">
                  <div className="profile-image-wrapper">
                    <Image 
                      src="/EmreGemici-PP2.jpeg"
                      alt="Emre Gemici"
                      width={320}
                      height={400}
                      className="profile-image"
                      priority
                    />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex gap-8 lg:gap-12">
                  {t('about.stats')?.slice(0, 3).map((stat, index) => (
                    <div key={index} className="stat-card text-center lg:text-right">
                      <div className="stat-value text-2xl lg:text-3xl">{stat.value}</div>
                      <div className="stat-label text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-caption mb-4">{t('about.title')}</p>
              <h2 className="text-headline mb-8">{t('about.subtitle')}</h2>
              <p className="text-body-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.intro')}
              </p>
              <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.philosophyText')}
              </p>
            </div>
            
            <div>
              <p className="text-caption mb-6">{t('about.approach')}</p>
              <div className="space-y-4">
                {t('about.approachItems')?.map((item, index) => (
                  <div key={index} className="card-minimal">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-small" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                      </div>
                      <span className="text-caption">0{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl">
            <p className="text-caption mb-4">{t('experience.title')}</p>
            <h2 className="text-headline mb-12">{t('experience.subtitle')}</h2>
            
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                      <h3 className="text-title">{exp.company}</h3>
                      <span className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>{exp.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tech-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>
                    {exp.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container-main">
          <p className="text-caption mb-8 text-center">{t('techStack.title')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-caption mb-4">{t('projects.title')}</p>
              <h2 className="text-headline">{t('projects.subtitle')}</h2>
            </div>
          </div>
          
          <div className="space-y-16">
            {t('projects.items')?.map((project, index) => (
              <article key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div 
                    className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--color-bg-secondary)' }}
                  >
                    <span className="text-display opacity-10">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-title">{project.name}</h3>
                    {project.linkType === 'beta' && (
                      <span className="tech-badge" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                        Beta
                      </span>
                    )}
                  </div>
                  <p className="text-small mb-6" style={{ color: 'var(--color-text-tertiary)' }}>{project.tagline}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-caption mb-1">{t('projects.labels.problem')}</p>
                      <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-caption mb-1">{t('projects.labels.solution')}</p>
                      <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-caption mb-1">{t('projects.labels.outcome')}</p>
                      <p className="text-body font-medium" style={{ color: 'var(--color-primary)' }}>{project.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-small font-medium transition-all hover:gap-3"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {project.linkType === 'appstore' || project.linkType === 'website' ? t('projects.viewProject') : t('projects.viewCode')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Bold Footer Style */}
      <section 
        id="contact" 
        className="py-24 md:py-32"
        style={{ background: 'var(--color-primary)', color: 'white' }}
      >
        <div className="container-main">
          <div className="max-w-4xl">
            <p className="text-caption mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('contact.availability')}
            </p>
            <h2 className="text-display-sans mb-8" style={{ color: 'white' }}>
              {t('contact.title')}
            </h2>
            <p className="text-body-lg mb-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {t('contact.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a 
                href={`mailto:${t('contact.email')}`}
                className="btn-primary"
                style={{ background: 'white', color: 'var(--color-primary)' }}
              >
                {t('contact.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://linkedin.com/in/emre-gemici"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                aria-label={t('contact.social.linkedin')}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8ZM8 8h3.83v2.19h.05c.53-1 1.83-2.19 3.77-2.19C19.66 8 22 10.35 22 14.12V24h-4v-8.54c0-2.04-.04-4.66-2.84-4.66-2.84 0-3.28 2.22-3.28 4.51V24H8V8Z" />
                </svg>
                {t('contact.social.linkedin')}
              </a>
              <a 
                href="https://github.com/gemiciemre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                aria-label={t('contact.social.github')}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.12 3.21 9.46 7.66 10.99.56.11.77-.25.77-.55 0-.27-.01-1.17-.02-2.12-3.12.7-3.78-1.37-3.78-1.37-.51-1.33-1.25-1.68-1.25-1.68-1.02-.72.08-.71.08-.71 1.13.08 1.73 1.19 1.73 1.19 1 .76 2.62.54 3.26.41.1-.75.39-1.26.7-1.55-2.49-.29-5.11-1.27-5.11-5.64 0-1.25.43-2.27 1.14-3.07-.12-.29-.5-1.46.11-3.05 0 0 .93-.31 3.05 1.17a10.3 10.3 0 0 1 2.78-.39c.94 0 1.89.13 2.78.39 2.12-1.48 3.05-1.17 3.05-1.17.61 1.59.23 2.76.11 3.05.71.8 1.14 1.82 1.14 3.07 0 4.38-2.63 5.35-5.13 5.63.4.36.76 1.07.76 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.78.55 4.44-1.53 7.65-5.87 7.65-10.99C23.25 5.6 18.27.5 12 .5Z" />
                </svg>
                {t('contact.social.github')}
              </a>
              <a 
                href="https://medium.com/@gemiciemre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                aria-label={t('contact.social.medium')}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.56 6.9a.6.6 0 0 0-.22-.53L2.8 4.55V4h5.37l4.15 9.1L16 4h5.2v.55l-1.33 1.28a.38.38 0 0 0-.14.37v11.6a.38.38 0 0 0 .14.37l1.3 1.28V20h-6.53v-.55l1.34-1.31c.13-.13.13-.17.13-.37V8.4l-3.73 11.57h-.5L7.53 8.4v7.88c-.03.24.05.49.22.67l1.75 2.12V20H2.9v-.55l1.75-2.12a.8.8 0 0 0 .2-.67V6.9Z" />
                </svg>
                {t('contact.social.medium')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ background: 'var(--color-bg-dark)', color: 'white' }}>
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Emre Gemici</span>
              <span style={{ color: 'var(--color-text-tertiary)' }}>·</span>
              <span className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>{t('footer.role')}</span>
            </div>
            <p className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>
              © 2025 · {t('footer.location')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
