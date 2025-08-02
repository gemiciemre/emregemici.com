'use client';

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { language, changeLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Toggle mobile menu with animation
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('mobile-menu-closed')) {
      mobileMenu.classList.remove('mobile-menu-closed');
      mobileMenu.classList.add('mobile-menu-open');
      setIsMobileMenuOpen(true);
    } else {
      mobileMenu.classList.remove('mobile-menu-open');
      mobileMenu.classList.add('mobile-menu-closed');
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('mobile-menu-open');
    mobileMenu.classList.add('mobile-menu-closed');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* CSS for animations */}
      <style jsx global>{`
        .mobile-menu-closed {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.3s ease;
          padding-top: 0;
          padding-bottom: 0;
        }
        .mobile-menu-open {
          max-height: 500px;
          opacity: 1;
          transition: max-height 0.5s ease, opacity 0.3s ease;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        /* Hamburger Animation */
        .hamburger {
          width: 24px;
          height: 24px;
          position: relative;
          cursor: pointer;
        }
        
        .hamburger-line {
          display: block;
          height: 2px;
          width: 100%;
          background: currentColor;
          border-radius: 1px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
          position: absolute;
        }
        
        .hamburger-line:nth-child(1) {
          top: 6px;
        }
        
        .hamburger-line:nth-child(2) {
          top: 12px;
        }
        
        .hamburger-line:nth-child(3) {
          top: 18px;
        }
        
        /* When menu is open (X shape) */
        .hamburger.open .hamburger-line:nth-child(1) {
          top: 12px;
          transform: rotate(135deg);
        }
        
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .hamburger.open .hamburger-line:nth-child(3) {
          top: 12px;
          transform: rotate(-135deg);
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Emre Gemici
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.experience')}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.blog')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.contact')}
              </button>
              
              {/* Desktop Language Toggle */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'tr'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  TR
                </button>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label="Toggle menu"
              >
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div id="mobileMenu" className="mobile-menu-closed md:hidden border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  closeMobileMenu();
                }} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('experience');
                  closeMobileMenu();
                }} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.experience')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('projects');
                  closeMobileMenu();
                }} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('blog');
                  closeMobileMenu();
                }} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.blog')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  closeMobileMenu();
                }} 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-4 pt-2">
                <span className="text-slate-700 dark:text-slate-300">{language === 'en' ? 'Language:' : 'Dil:'}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      language === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage('tr')}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      language === 'tr'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    TR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/EmreGemici-PP2.jpeg"
                  alt="Emre Gemici"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                {t('hero.viewWork')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                {t('hero.getInTouch')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
                  {t('about.buildingTitle')}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {t('about.description')}
                </p>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/swift-256x256_2x.png" className="w-6 h-6 mr-3" alt="Swift" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">Swift</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/Uikit-Logo.png" className="w-6 h-6 mr-3" alt="UIKit" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">UIKit</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/swiftui-256x256_2x.png" className="w-6 h-6 mr-3" alt="SwiftUI" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">SwiftUI</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/coredata-alt-icon.svg" className="w-6 h-6 mr-3" alt="Core Data" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">Core Data</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/restful-api-icon.svg" className="w-6 h-6 mr-3" alt="RESTful APIs" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">RESTful APIs</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/mvvm-pattern-icon.svg" className="w-6 h-6 mr-3" alt="MVVM Pattern" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">MVVM Pattern</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/auto-layout-icon.svg" className="w-6 h-6 mr-3" alt="Auto Layout" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">Auto Layout</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <img src="/git-icon.svg" className="w-6 h-6 mr-3" alt="Git" />
                      <h5 className="font-semibold text-slate-900 dark:text-white">Git & Agile</h5>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                      </svg>
                      <h5 className="font-semibold text-slate-900 dark:text-white">Figma Design</h5>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Education Section */}
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
                  {t('about.education')}
                </h4>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Bachelor's Degree - Computer Engineering
                    </h5>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      İstanbul Aydın Üniversitesi
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      2020 – 2024 | GPA: 3.46/4.00 (Honor Degree)
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Associate's Degree - Computer Systems Technology
                    </h5>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-1">
                      Turkish National Defense University
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      2013 – 2015 | GPA: 3.69/4.00 (Honor Degree)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Certificates Section */}
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
                  {t('about.certificates')}
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                      Advanced Programming in Swift
                    </h5>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      Meta (Coursera)
                    </p>
                    <a 
                      href="https://www.coursera.org/account/accomplishments/certificate/7XX3JV7HMZZK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                      Google Project Management
                    </h5>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                      Google (Professional Certificate)
                    </p>
                    <a 
                      href="https://coursera.org/share/5e1b70d54c754dc8b26addd39922269e" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:underline transition-colors"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                      Swift iOS Programming 101-301
                    </h5>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      Turkcell Geleceği Yazanlar
                    </p>
                    <a 
                      href="https://drive.google.com/file/d/1VVDjUFnKKuDw1KLFzUB8K10v96BsyJnj/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:underline transition-colors"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                      English Level C2
                    </h5>
                    <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">
                      Microfon Academy
                    </p>
                    <a 
                      href="https://academy.microfon.co/certificate/907067" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:underline transition-colors"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Approach */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 rounded-3xl text-white sticky top-24 shadow-2xl border border-white/10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">{t('about.approach')}</h3>
                </div>
                <div className="space-y-6">
                  {t('about.approachItems').map((item, index) => {
                    const icons = [
                      // SOLID principles icon
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>,
                      // Agile development icon
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>,
                      // Performance optimization icon
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>,
                      // User experience icon
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ];
                    
                    return (
                      <div key={index} className="group">
                        <div className="flex items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-white/30 transition-colors">
                            {icons[index]}
                          </div>
                          <div>
                            <span className="text-white font-medium leading-relaxed block">{item}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Always learning, always improving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('experience.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('experience.subtitle')}
            </p>
          </div>
          <div className="space-y-8">
            {t('experience.experiences').map((exp, index) => {
              const colorClasses = [
                { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-200', company: 'text-blue-600 dark:text-blue-400' },
                { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-200', company: 'text-green-600 dark:text-green-400' },
                { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-800 dark:text-purple-200', company: 'text-purple-600 dark:text-purple-400' }
              ];
              const colors = colorClasses[index % colorClasses.length];
              
              return (
                <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className={`${colors.company} font-medium`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('projects.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center p-2 shadow-sm">
                <img src="/abonesepeti-logo.png" alt="Abonesepeti Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Abonesepeti
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t('projects.abonesepeti.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                  iOS
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                  App Store
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                  10K+ Users
                </span>
              </div>
              <a 
                href="https://apps.apple.com/tr/app/abonesepeti-abonelik-y%C3%B6netimi/id1603237503?l=tr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                {t('projects.abonesepeti.link')} →
              </a>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center p-2 shadow-sm">
                <img src="/Inventally-logo.png" alt="Inventally Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Inventally (Beta)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t('projects.inventally.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                  SwiftUI
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                  Barcode Scanning
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                  In Development
                </span>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm">
                {t('projects.inventally.status')}
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center p-2 shadow-sm">
                <img src="/swiftui-256x256_2x.png" alt="SwiftUI Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                100 Days of SwiftUI
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t('projects.swiftui100.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                  SwiftUI
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                  Learning Projects
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                  Open Source
                </span>
              </div>
              <a 
                href="https://github.com/gemiciemre/iOS_100DaysOfSwiftUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
              >
                {t('projects.swiftui100.link')} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('blog.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                SwiftUI Best Practices for 2024
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Discover the latest SwiftUI patterns and techniques for building modern iOS apps.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Dec 15, 2023
                </span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('blog.readMore')}
                </a>
              </div>
            </article>
            <article className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                iOS Performance Optimization Tips
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Learn how to optimize your iOS apps for better performance and user experience.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Dec 8, 2023
                </span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('blog.readMore')}
                </a>
              </div>
            </article>
            <article className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Core Data vs CloudKit: Which to Choose?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A comprehensive comparison of Apple's data persistence solutions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Nov 30, 2023
                </span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('blog.readMore')}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {t('contact.getInTouch')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                      </span>
                      <a 
                        href="mailto:emregemici5@gmail.com" 
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        emregemici5@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                          <path d="M3 5.012H0V15h3V5.012Z"/>
                        </svg>
                      </span>
                      <a 
                        href="https://linkedin.com/in/emre-gemici" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        LinkedIn: /in/emre-gemici
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      <a 
                        href="https://github.com/gemiciemre" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        GitHub: /gemiciemre
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {t('contact.services')}
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    {t('contact.servicesList').map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Emre Gemici</h3>
              <p className="text-slate-300 mb-1">{t('footer.title')}</p>
              <p className="text-slate-400">{t('footer.location')}</p>
            </div>
            <p className="text-slate-400">
              &copy; 2025 Emre Gemici. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
