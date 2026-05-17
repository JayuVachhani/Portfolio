import React from 'react';

export default function EducationView() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-32">
      {/* Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-background mb-2">Jay <span className="text-primary text-glow">Vachhani</span></h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant">MERN Stack Developer</p>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Metrics & Identity */}
        <div className="lg:col-span-4 space-y-8">
          {/* Profile Orbital Visual Placeholder */}
          <div className="glass-card rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            <div className="w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center relative">
              <div className="w-32 h-32 rounded-full border-2 border-primary/40 flex flex-col items-center justify-center text-center p-4">
                <span className="font-headline-lg text-headline-lg text-primary">JV</span>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">MERN Stack Developer</span>
              </div>
              {/* Decorative Orbits */}
              <div className="absolute w-6 h-6 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center -top-3 left-1/2 -translate-x-1/2">
                <span className="material-symbols-outlined text-[14px] text-primary">database</span>
              </div>
              <div className="absolute w-6 h-6 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center -bottom-3 left-1/2 -translate-x-1/2">
                <span className="material-symbols-outlined text-[14px] text-secondary">javascript</span>
              </div>
            </div>
          </div>

          {/* Impact Metrics Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl text-center">
              <span className="material-symbols-outlined text-error mb-2">pest_control</span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">30%</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Bug Reduction</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <span className="material-symbols-outlined text-primary mb-2">bolt</span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">40%</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Performance Gain</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <span className="material-symbols-outlined text-secondary mb-2">rocket_launch</span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">50%</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Faster Delivery</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <span className="material-symbols-outlined text-tertiary mb-2">group</span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">100k+</h3>
              <p className="font-label-md text-label-md text-on-surface-variant">Users Served</p>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Awards */}
        <div className="lg:col-span-8 space-y-8">
          {/* Education Section */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Education &amp; Awards</h2>
              <div className="h-px flex-1 bg-outline-variant/30"></div>
            </div>
            {/* Main Degree Card */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-primary leading-tight">Bachelor of Engineering</h3>
                    <p className="font-headline-md text-headline-md text-on-surface-variant">Information Technology</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">school</span>
                    <p className="font-body-lg text-body-lg text-on-surface italic">Sardar Vallabhbhai Patel Institute of Technology, Gujarat</p>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col gap-4">
                  <div className="bg-surface-container-high px-6 py-4 rounded-2xl border border-outline-variant/50">
                    <p className="text-[10px] text-on-surface-variant font-label-md uppercase tracking-widest mb-1">Graduation</p>
                    <p className="font-headline-md text-headline-md text-on-surface">Aug 2020</p>
                  </div>
                  <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/20">
                    <p className="text-[10px] text-primary/70 font-label-md uppercase tracking-widest mb-1">CGPA</p>
                    <p className="font-headline-md text-headline-md text-primary">8.23</p>
                  </div>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -right-12 -bottom-12 opacity-5">
                <span className="material-symbols-outlined text-[200px]">auto_awesome</span>
              </div>
            </div>
          </section>

          {/* Recognition Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Achievement Card */}
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-primary font-label-md uppercase tracking-widest">Achievement</span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Winner — Internal Company Hackathon</h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 italic">Recognized for innovative full-stack solutions.</p>
            </div>
            {/* Recognition Card */}
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-error flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-error font-label-md uppercase tracking-widest">Recognition</span>
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Firefighter Award</h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 italic">Critical Production Incident Resolution expert.</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-4 mb-6 mt-4">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Certifications</h2>
              <div className="h-px flex-1 bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <a href="/Claude_101.pdf" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl border-l-4 border-l-tertiary flex flex-col justify-between hover:bg-surface-container-high transition-all group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-tertiary font-label-md uppercase tracking-widest">Certificate</span>
                    <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">Claude 101</h4>
                </div>
                <div className="flex items-center gap-2 mt-4 text-tertiary">
                  <span className="font-label-md text-label-md">View Certificate</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
              </a>
            </div>
          </section>

          {/* Tech Highlights Chips */}
          <section className="glass-card p-6 rounded-2xl">
            <h4 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-widest">Preferred Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-surface-container-highest rounded-full text-primary border border-primary/20 font-label-md text-label-md">React.js</span>
              <span className="px-4 py-2 bg-surface-container-highest rounded-full text-secondary border border-secondary/20 font-label-md text-label-md">Node.js</span>
              <span className="px-4 py-2 bg-surface-container-highest rounded-full text-on-surface-variant border border-outline-variant font-label-md text-label-md">MongoDB</span>
              <span className="px-4 py-2 bg-surface-container-highest rounded-full text-on-surface-variant border border-outline-variant font-label-md text-label-md">TypeScript</span>


            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
