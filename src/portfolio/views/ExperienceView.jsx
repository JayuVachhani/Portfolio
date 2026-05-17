import React from 'react';

export default function ExperienceView() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-24 lg:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Sidebar: Profile & Tech Stack */}
        <aside className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Hero Card */}
          <section className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="font-display-lg text-4xl md:text-4xl lg:text-5xl leading-tight mb-2">
                Jay <span className="text-primary">Vachhani</span>
              </h1>
              <p className="font-label-md text-label-md text-on-surface-variant mb-8 uppercase tracking-widest">MERN Stack Developer</p>

              {/* Visual Orbit */}
              <div className="orbit-container mx-auto mb-8 hidden sm:block">
                <div className="orbit-path w-full h-full border-dashed border-outline-variant/40"></div>
                <div className="orbit-path w-2/3 h-2/3 border-solid border-outline-variant/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 rounded-full bg-surface-container-highest/60 backdrop-blur-md border border-primary/20 w-32 h-32 flex flex-col justify-center items-center glow-cyan">
                    <span className="font-display-lg text-primary text-headline-lg">JV</span>
                    <span className="font-label-md text-[10px] text-on-surface-variant">ENGINEER</span>
                  </div>
                </div>
                {/* Tech Floating Dots */}
                <div className="orbit-item top-[10%] right-[15%] w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary text-[20px]">database</span>
                </div>
                <div className="orbit-item bottom-[20%] right-[5%] w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[24px]">code</span>
                </div>
                <div className="orbit-item bottom-[10%] left-[20%] w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center border border-tertiary/30">
                  <span className="material-symbols-outlined text-tertiary text-[16px]">cloud</span>
                </div>
              </div>

              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Full-stack Developer specialized in building high-performance scalable systems. Passionate about engineering clean code and delivering robust user experiences.
              </p>
            </div>
            {/* Background Glow Decor */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          </section>

          {/* Tech Stack Bento */}
          <section className="glass-card p-5 md:p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-5 md:mb-6">
              <h2 className="font-headline-md text-xl md:text-2xl">Tech I Work With</h2>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'React', svg: 'react/react-original.svg' },
                { name: 'Next.js', svg: 'nextjs/nextjs-original.svg' },
                { name: 'Node.js', svg: 'nodejs/nodejs-original.svg' },
                { name: 'NestJS', svg: 'nestjs/nestjs-original.svg' },
                { name: 'MongoDB', svg: 'mongodb/mongodb-original.svg' },
                { name: 'Redis', svg: 'redis/redis-original.svg' },
                { name: 'Python', svg: 'python/python-original.svg' },
                { name: 'AWS S3', svg: 'amazonwebservices/amazonwebservices-original-wordmark.svg' }
              ].map(tech => (
                <div key={tech.name} className="group bg-surface-container p-3 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.svg}`} alt={tech.name} className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="font-label-md text-[11px] text-on-surface-variant group-hover:text-on-surface">{tech.name}</span>
                </div>
              ))}

            </div>
          </section>
        </aside>

        {/* Right Content: Dashboard & Experience */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Stats Row */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="glass-card p-4 md:p-5 rounded-2xl text-center flex flex-col items-center gap-2 md:gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-error-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface">30%</h3>
                <p className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest">Bug Reduction</p>
              </div>
            </div>
            <div className="glass-card p-4 md:p-5 rounded-2xl text-center flex flex-col items-center gap-2 md:gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface">40%</h3>
                <p className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest">Performance Gain</p>
              </div>
            </div>
            <div className="glass-card p-4 md:p-5 rounded-2xl text-center flex flex-col items-center gap-2 md:gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface">50%</h3>
                <p className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest">Faster Delivery</p>
              </div>
            </div>
            <div className="glass-card p-4 md:p-5 rounded-2xl text-center flex flex-col items-center gap-2 md:gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface">100k+</h3>
                <p className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest">Users Served</p>
              </div>
            </div>
          </section>

          {/* Experience Timeline Section */}
          <section className="glass-card p-5 md:p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="material-symbols-outlined text-primary text-[28px] md:text-[32px]">history</span>
                <h2 className="font-headline-lg text-2xl md:text-3xl">Work Experience</h2>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              <div className="absolute left-[11px] md:left-[15px] top-2 bottom-0 w-[2px] timeline-line"></div>

              {/* Role 1 */}
              <div className="relative pl-8 md:pl-12 mb-12 md:mb-16 group">
                {/* Timeline Dot */}
                <div className="absolute left-[6px] md:left-[10px] top-[6px] w-[12px] h-[12px] rounded-full bg-primary glow-cyan border-[3px] border-background"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-4">
                  <div>
                    <h3 className="font-headline-md text-xl md:text-2xl text-primary">Agile Infoways</h3>
                    <p className="font-label-md text-sm md:text-base text-on-surface-variant mt-1">Software Developer • Ahmedabad</p>
                  </div>
                  <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-[11px] md:text-[12px] text-on-surface-variant border border-outline-variant/30 h-fit self-start">Oct 2022 — Present</span>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] md:text-[18px] mt-1">check_circle</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">Built scalable frontend systems for healthcare platforms serving <strong>100k+ users</strong> with high availability.</p>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] md:text-[18px] mt-1">check_circle</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">Delivered healthcare, real estate, and service-booking applications with configurable <strong>white-label architecture</strong>.</p>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] md:text-[18px] mt-1">check_circle</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">Improved application performance by <strong>40%</strong> and reduced bug frequency by <strong>30%</strong> through optimized state management.</p>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-primary/40 text-primary-fixed">React.js</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-primary/40 text-primary-fixed">Next.js</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-primary/40 text-primary-fixed">Nestjs</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-secondary/40 text-secondary">MongoDB</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-secondary/40 text-secondary">Redis</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-tertiary/40">SSE</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-primary/40 text-primary-fixed">Python</span>
                </div>
              </div>

              {/* Role 2 */}
              <div className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-[6px] md:left-[10px] top-[6px] w-[12px] h-[12px] rounded-full bg-surface-container-highest border-[3px] border-background group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-4">
                  <div>
                    <h3 className="font-headline-md text-xl md:text-2xl text-primary opacity-80 group-hover:opacity-100 transition-opacity">Tata Consultancy Services (TCS)</h3>
                    <p className="font-label-md text-sm md:text-base text-on-surface-variant mt-1">Assistant System Engineer • Bangalore</p>
                  </div>
                  <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-[11px] md:text-[12px] text-on-surface-variant border border-outline-variant/30 h-fit self-start">Nov 2020 — Oct 2022</span>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] md:text-[18px] mt-1">check_circle</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">Automated repetitive operational workflows using <strong>Python scripts</strong>, reducing manual effort by 60%.</p>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="material-symbols-outlined text-primary text-[16px] md:text-[18px] mt-1">check_circle</span>
                    <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed">Architected enterprise React-based workflows for internal resource management and deployment tracking.</p>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-primary/40 text-primary-fixed">React.js</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-tertiary/40 text-tertiary">Python</span>
                  <span className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] rounded-full text-[11px] md:text-[12px] font-label-md border border-outline-variant/40">REST APIs</span>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
