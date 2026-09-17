import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import { getDictionary } from "@/lib/i18n";
import { projects, site, techStack } from "@/lib/site";

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-text-primary)" }}>
      <a href="#main" className="skip-link">{t.a11y.skipToContent}</a>

      <SiteNav lang={lang} nav={t.nav} a11y={t.a11y} />

      <main id="main">
        {/* Hero */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="container-main w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

              <div className="lg:col-span-7 order-2 lg:order-1">
                <p className="text-caption mb-6"><span className="no-uppercase">{t.hero.captionPrefix}</span> {t.hero.captionSuffix}</p>

                <h1 className="mb-8">
                  <span className="text-headline-serif block mb-2">{t.hero.greeting}</span>
                  <span className="text-display block">{t.hero.name}</span>
                </h1>

                <p className="text-body-lg max-w-xl mb-10" style={{ color: "var(--color-text-secondary)" }}>
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 lg:mb-0">
                  <a href="#projects" className="btn-primary w-full sm:w-auto">
                    {t.hero.cta1}
                    <ArrowRightIcon />
                  </a>
                  <a href="#contact" className="btn-secondary w-full sm:w-auto">
                    {t.hero.cta2}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="flex flex-col items-center lg:items-end gap-8">
                  <div className="profile-frame w-[300px] sm:w-[380px] lg:w-[480px]">
                    <div className="profile-image-wrapper">
                      <Image
                        src="/images/profile.webp"
                        alt="Emre Gemici"
                        width={1440}
                        height={1152}
                        sizes="(max-width: 639px) 300px, (max-width: 1023px) 380px, 480px"
                        className="profile-image"
                        priority
                      />
                    </div>
                  </div>

                  <ul className="flex flex-nowrap justify-center md:justify-end gap-4 md:gap-8 lg:gap-12 w-full">
                    {t.hero.stats.map((stat) => (
                      <li key={stat.label} className="text-center lg:text-right flex-[0_1_96px] sm:flex-[0_1_110px] min-w-0">
                        <span className="stat-value text-xl sm:text-2xl lg:text-3xl">{stat.value}</span>
                        <span className="stat-label text-[10px] sm:text-xs">{stat.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-caption mb-4">{t.about.title}</p>
                <h2 className="text-headline mb-8">{t.about.subtitle}</h2>
                <p className="text-body-lg mb-6" style={{ color: "var(--color-text-secondary)" }}>
                  {t.about.intro}
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                  {t.about.philosophyText}
                </p>
              </div>

              <div>
                <p className="text-caption mb-6">{t.about.approach}</p>
                <div className="space-y-4">
                  {t.about.approachItems.map((item, index) => (
                    <div key={item.title} className="card-minimal">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium mb-1">{item.title}</h3>
                          <p className="text-small" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
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

        {/* Experience */}
        <section id="experience" className="section-padding">
          <div className="container-main">
            <div className="max-w-4xl">
              <p className="text-caption mb-4">{t.experience.title}</p>
              <h2 className="text-headline mb-12">{t.experience.subtitle}</h2>

              <div>
                {t.experience.items.map((exp) => (
                  <div key={exp.company} className="experience-item">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                        <h3 className="text-title">{exp.company}</h3>
                        <span className="text-small" style={{ color: "var(--color-text-tertiary)" }}>{exp.role}</span>
                      </div>
                      <div className="text-small mb-2 md:hidden" style={{ color: "var(--color-text-tertiary)" }}>
                        {exp.period}
                      </div>
                      <div className="flex flex-wrap gap-2" lang="en">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tech-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block text-small" style={{ color: "var(--color-text-tertiary)" }}>
                      {exp.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-16" style={{ background: "var(--color-bg-secondary)" }} aria-label={t.techStack.title}>
          <div className="container-main">
            <p className="text-caption mb-8 text-center">{t.techStack.title}</p>
            <ul className="flex flex-wrap justify-center gap-3" lang="en">
              {techStack.map((tech) => (
                <li key={tech} className="tech-badge">{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-padding">
          <div className="container-main">
            <div className="mb-12">
              <p className="text-caption mb-4">{t.projects.title}</p>
              <h2 className="text-headline">{t.projects.subtitle}</h2>
            </div>

            <div className="space-y-16">
              {projects.map((project, index) => {
                const copy = t.projects.items[project.key];
                const isCodeLink = project.linkType === "github";
                return (
                  <article key={project.key} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="project-visual aspect-[4/3] rounded-2xl">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={160}
                          height={160}
                          sizes="160px"
                          className="project-visual-logo"
                        />
                        <span className="project-visual-index text-display" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="text-title mb-4">{copy.name}</h3>
                      <p className="text-small mb-6" style={{ color: "var(--color-text-tertiary)" }}>{copy.tagline}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-caption mb-1">{t.projects.labels.problem}</p>
                          <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{copy.problem}</p>
                        </div>
                        <div>
                          <p className="text-caption mb-1">{t.projects.labels.solution}</p>
                          <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{copy.solution}</p>
                        </div>
                        <div>
                          <p className="text-caption mb-1">{t.projects.labels.outcome}</p>
                          <p className="text-body font-medium" style={{ color: "var(--color-primary-text)" }}>{copy.outcome}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6" lang="en">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-small font-medium transition-all hover:gap-3"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {isCodeLink ? t.projects.viewCode : t.projects.viewProject}
                        <span className="sr-only"> — {copy.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section py-24 md:py-32">
          <div className="container-main">
            <div className="max-w-4xl">
              <p className="text-caption contact-caption mb-6">
                {t.contact.availability}
              </p>
              <h2 className="text-display-sans mb-8">
                {t.contact.title}
              </h2>
              <p className="text-body-lg mb-12">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <a href={`mailto:${site.email}`} className="btn-primary btn-on-accent">
                  {t.contact.cta}
                  <ArrowRightIcon />
                </a>
              </div>

              <ul className="flex flex-wrap gap-4 sm:gap-6">
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8ZM8 8h3.83v2.19h.05c.53-1 1.83-2.19 3.77-2.19C19.66 8 22 10.35 22 14.12V24h-4v-8.54c0-2.04-.04-4.66-2.84-4.66-2.84 0-3.28 2.22-3.28 4.51V24H8V8Z" />
                    </svg>
                    {t.contact.social.linkedin}
                  </a>
                </li>
                <li>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.12 3.21 9.46 7.66 10.99.56.11.77-.25.77-.55 0-.27-.01-1.17-.02-2.12-3.12.7-3.78-1.37-3.78-1.37-.51-1.33-1.25-1.68-1.25-1.68-1.02-.72.08-.71.08-.71 1.13.08 1.73 1.19 1.73 1.19 1 .76 2.62.54 3.26.41.1-.75.39-1.26.7-1.55-2.49-.29-5.11-1.27-5.11-5.64 0-1.25.43-2.27 1.14-3.07-.12-.29-.5-1.46.11-3.05 0 0 .93-.31 3.05 1.17a10.3 10.3 0 0 1 2.78-.39c.94 0 1.89.13 2.78.39 2.12-1.48 3.05-1.17 3.05-1.17.61 1.59.23 2.76.11 3.05.71.8 1.14 1.82 1.14 3.07 0 4.38-2.63 5.35-5.13 5.63.4.36.76 1.07.76 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.78.55 4.44-1.53 7.65-5.87 7.65-10.99C23.25 5.6 18.27.5 12 .5Z" />
                    </svg>
                    {t.contact.social.github}
                  </a>
                </li>
                <li>
                  <a href={site.social.medium} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.56 6.9a.6.6 0 0 0-.22-.53L2.8 4.55V4h5.37l4.15 9.1L16 4h5.2v.55l-1.33 1.28a.38.38 0 0 0-.14.37v11.6a.38.38 0 0 0 .14.37l1.3 1.28V20h-6.53v-.55l1.34-1.31c.13-.13.13-.17.13-.37V8.4l-3.73 11.57h-.5L7.53 8.4v7.88c-.03.24.05.49.22.67l1.75 2.12V20H2.9v-.55l1.75-2.12a.8.8 0 0 0 .2-.67V6.9Z" />
                    </svg>
                    {t.contact.social.medium}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer py-8">
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">{site.name}</span>
              <span className="site-footer-muted" aria-hidden="true">·</span>
              <span className="text-small site-footer-muted">{t.footer.role}</span>
            </div>
            <p className="text-small site-footer-muted">
              © {year} · {t.footer.location}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
