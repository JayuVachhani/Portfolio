import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-12 mt-section-gap">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline-md text-primary">Jay Vachhani</span>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">© 2026 Jay Vachhani • Engineered with MERN Stack</p>
        </div>
        <div className="flex gap-6">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary-fixed transition-opacity opacity-80 hover:opacity-100" href="https://linkedin.com/in/jay-vachhani-853603184/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary-fixed transition-opacity opacity-80 hover:opacity-100" href="mailto:vachhanij153@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
