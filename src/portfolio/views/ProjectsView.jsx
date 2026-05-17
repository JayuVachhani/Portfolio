import React from 'react';

export default function ProjectsView() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary text-glow leading-tight">
              Featured Engineering <br className="hidden md:block" /> Projects
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
              A showcase of production-grade systems, high-performance architectures, and full-stack solutions built with the MERN ecosystem and beyond.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card px-6 py-4 rounded-xl flex flex-col items-center hover:-translate-y-1 transition-transform">
              <span className="font-headline-lg text-headline-lg text-primary">5+</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Years Exp</span>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl flex flex-col items-center hover:-translate-y-1 transition-transform">
              <span className="font-headline-lg text-headline-lg text-secondary">5+</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group">
          <span className="material-symbols-outlined text-error mb-2 scale-110 group-hover:rotate-12 transition-transform">bug_report</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">30%</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Bug Reduction</p>
        </div>
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group">
          <span className="material-symbols-outlined text-primary mb-2 scale-110 group-hover:rotate-12 transition-transform">bolt</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">40%</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Performance Gain</p>
        </div>
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group">
          <span className="material-symbols-outlined text-secondary mb-2 scale-110 group-hover:rotate-12 transition-transform">rocket_launch</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">50%</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Faster Delivery</p>
        </div>
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group">
          <span className="material-symbols-outlined text-primary-fixed mb-2 scale-110 group-hover:rotate-12 transition-transform">groups</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">100k+</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Users Served</p>
        </div>
      </div>

      {/* Project Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Dealdesk Project */}
        <div className="md:col-span-12 glass-card rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-label-md text-[12px]">Real Estate</span>
                <span className="text-on-surface-variant font-label-md text-[12px]">Senior Developer</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Dealdesk</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">React.js</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">Nestjs</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">Python</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">MongoDB</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">Redis</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">SSE</span>

              </div>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
                  <span>Developed real-time communication architecture using Server-Sent Events (SSE).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
                  <span>Implemented Redis pub/sub messaging between Python and NestJS services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
                  <span>Built backend APIs, notifications, and caching layers for scale.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-card p-1">
              <img className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Cinematic modern architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXPe6cLBdiyYhJVnodkPsYe_7FstHFI-gfzGBD_uN7NvbFD7KI5uB0ODWk7QDjoRaY3fk9-JJaWbmDR9vsZ2Sz4gQgDHDjCcq9OcyGVWbGClMJpQM-4CoGpIy-O__IvHhIYC10jznL-LiDE4Th1hEe-Vud3fzDF9PloRF90LKwDiIel-JV7V6EFO4iAKG6FzoxBf4Kc_mSplPDl1i2VwF4UWaSD81AHe-X_9_fbp__SZ1vWiO5FviC4WlXf_-8hRxxmi_VlUBXOZIT" />
            </div>
          </div>
        </div>

        {/* PureAI Project */}
        <div className="md:col-span-6 glass-card rounded-3xl p-8 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-label-md text-[12px]">Healthcare</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-2">PureAI - DrChrono</h2>
            </div>
            <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">
            Designed scalable healthcare backend workflows and improved engineering speed using AI-assisted development tooling.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">React.js</span>
            <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">MongoDB</span>
          </div>
          <div className="h-40 w-full rounded-xl overflow-hidden glass-card mb-0">
            <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Data visualization dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcggQ949ay6je8C7aQDhQl7kJ0VqRXmHnm4T1czojkb98iGoAx5dDbDFFpzpTlIfkpSNjUJCAvHarG0MvX4AJl4R46O_42QGl-izfjcIZA9n8wMEadix0Soc5STPhafbszLYOuMJklguvo_Lhoa6Hy5yLIYaxrEdtqv_huWt6qLcLr8uNu9hVCTOh1tOK-I0ED8xzL5Q4FTxfe0ry51MYNhLjexPVyjkGkFFsdtrEX7Ea91xZzobQ7bTT92omeV5-b86IXWnvpX_RJ" />
          </div>
        </div>

        {/* Ivira Project */}
        <div className="md:col-span-6 glass-card rounded-3xl p-8 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-label-md text-[12px]">Healthcare SaaS</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-2">Ivira - Care Compass</h2>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl">compass_calibration</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">
            Architected healthcare SaaS platform serving 100k+ users. Optimized frontend performance and application stability.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">Redux</span>
            <span className="bg-surface-container-highest px-3 py-1 rounded-md text-on-surface-variant font-label-md text-[12px] border border-outline-variant/30">AWS</span>
          </div>
          <div className="h-40 w-full rounded-xl overflow-hidden glass-card">
            <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Server rack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVQtAnaM0-wQnZDPvgrkJ2gqvMo5aCU8TO_R-_LZgCqzOZF6gkSL9rZY_AG7Idy35yFT-40tVF9Rda9O084anEFD8XNWIpelCsDrvOjqD2N2_EJa7blHpxUk_ra6_oOU9m66KjYnKpsdOcVuoEmu0ayk9cVz2FF9x5LrVOeUPTkuzUguOFENXaeYXyBtTua3k-swj6Bf9-2RUrgeVj-u40hYjJfn7vIJRdqSzLhX0YeRYmDc2H9mQPjVon-snO1u2Y2Z-gqjdEM3ZC" />
          </div>
        </div>
      </div>
    </main>
  );
}
