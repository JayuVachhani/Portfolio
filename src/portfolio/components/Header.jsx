import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const navItems = ['Experience', 'Projects', 'Education', 'Contact'];

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 w-full top-0 sticky z-50 shadow-[0_0_20px_rgba(47,217,244,0.1)]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-primary font-bold tracking-tighter text-headline-md">JV Cockpit</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`font-label-md text-label-md transition-colors duration-300 ${
                activeTab === item.toLowerCase()
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="/Jay_Vachhani_MERN_Stack_Resume.pdf" download="Jay_Vachhani_Resume.pdf" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md scale-95 active:scale-90 transition-transform hover:shadow-[0_0_15px_rgba(47,217,244,0.4)] cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            Resume
          </a>
          <div className="flex items-center gap-2 sm:hidden">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">code</span>
          </div>
        </div>
      </div>
    </header>
  );
}
