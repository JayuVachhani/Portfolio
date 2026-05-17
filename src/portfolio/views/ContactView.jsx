import React from 'react';

export default function ContactView() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-32">
      <section className="mb-12 text-center">
        <h1 className="font-display-lg text-display-lg text-primary text-glow leading-tight mb-4">
          Get In Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's build something amazing together.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <a href="mailto:vachhanij153@gmail.com" className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Email</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">vachhanij153@gmail.com</p>
        </a>

        <a href="tel:+919904775644" className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-secondary text-3xl">phone</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Phone</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">+91 9904775644</p>
        </a>

        <a href="https://linkedin.com/in/jay-vachhani-853603184/" target="_blank" rel="noreferrer" className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tertiary text-3xl">person</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">LinkedIn</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Jay Vachhani</p>
        </a>

        <a href="/Jay_Vachhani_MERN_Stack_Resume.pdf" download="Jay_Vachhani_Resume.pdf" className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-pointer border-primary/30 bg-primary/5">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl">download</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">Resume</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Download PDF</p>
        </a>
      </div>
    </main>
  );
}
