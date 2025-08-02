'use client';

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Emre Gemici
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('nav.about')}
              </a>
              <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('nav.experience')}
              </a>
              <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('nav.projects')}
              </a>
              <a href="#blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('nav.blog')}
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('nav.contact')}
              </a>
              
              {/* Language Toggle */}
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/EmreGemici-PP2.jpeg"
                  alt="Emre Gemici"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('hero.viewWork')}
              </a>
              <a href="#contact" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('hero.getInTouch')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('about.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('about.buildingTitle')}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Swift</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">UIKit</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">SwiftUI</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Core Data</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">RESTful APIs</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">MVVM Pattern</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Auto Layout</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Expert</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Git & Agile</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Advanced</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Figma Design</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Intermediate</p>
                </div>
              </div>
              
              {/* Education Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t('about.education')}
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-slate-900 dark:text-white">
                      Bachelor's Degree - Computer Engineering
                    </h5>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      İstanbul Aydın Üniversitesi
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      2020 – 2024 | GPA: 3.46/4.00 (Honor Degree)
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-slate-900 dark:text-white">
                      Associate's Degree - Computer Systems Technology
                    </h5>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Turkish National Defense University
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      2013 – 2015 | GPA: 3.69/4.00 (Honor Degree)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Certificates Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t('about.certificates')}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Advanced Programming in Swift
                    </h5>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      Meta (Coursera)
                    </p>
                    <a 
                      href="https://www.coursera.org/account/accomplishments/certificate/7XX3JV7HMZZK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Google Project Management
                    </h5>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                      Google (Professional Certificate)
                    </p>
                    <a 
                      href="https://coursera.org/share/5e1b70d54c754dc8b26addd39922269e" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Swift iOS Programming 101-301
                    </h5>
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                      Turkcell Geleceği Yazanlar
                    </p>
                    <a 
                      href="https://drive.google.com/file/d/1VVDjUFnKKuDw1KLFzUB8K10v96BsyJnj/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                      English Level C2
                    </h5>
                    <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">
                      Microfon Academy
                    </p>
                    <a 
                      href="https://academy.microfon.co/certificate/907067" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      {t('about.viewCertificate')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-semibold mb-4">{t('about.approach')}</h3>
              <ul className="space-y-3">
                {t('about.approachItems').map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
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
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    iOS Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Abonesepeti
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  01/2024 - Present | İstanbul, Türkiye
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Redesigned the entire app interface across 40+ screens, significantly enhancing usability and user engagement, 
                resulting in a 15% increase in user retention. Developed in-app wallet features, improved onboarding flow, 
                implemented credit card payments, integrated Pro membership experience, affiliate system, widget support, 
                and story flow with graphical visualizations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  iOS Development
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  UI/UX Design
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Payment Integration
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  CI/CD
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Graduate
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Google Game and Application Academy
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  11/2023 - 08/2024 | İstanbul, Türkiye
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Completed a comprehensive program on mobile application development, covering Flutter, project management, 
                technology entrepreneurship, and career development. Built a Flutter-based mobile application, integrating 
                AI-driven solutions and advanced data models to enhance decision-making and optimize business processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  Flutter
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  AI Integration
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  Project Management
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    System Administrator
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    TSK (Turkish Armed Forces)
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  2015 - 2019 | Ankara, Turkey
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Managed a 1,000+ user IT system as the sole administrator, ensuring seamless operation and high availability. 
                Operated and maintained a Data Center, overseeing critical IT infrastructure. Configured and maintained Cisco 
                networking technologies, developed automation scripts, and improved network security and system performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  System Administration
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Cisco Technologies
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Data Center
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Automation
                </span>
              </div>
            </div>
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
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📱</span>
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
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📦</span>
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
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">🎓</span>
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
                        <span className="text-white text-sm">📧</span>
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        emregemici5@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">💼</span>
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        LinkedIn: /in/emre-gemici
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🐙</span>
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        GitHub: /gemiciemre
                      </span>
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
              &copy; 2024 Emre Gemici. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
