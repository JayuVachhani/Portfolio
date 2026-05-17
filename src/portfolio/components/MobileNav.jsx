import React from 'react';

export default function MobileNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'experience', label: 'Experience', icon: 'timeline' },
    { id: 'projects', label: 'Work', icon: 'grid_view' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-2 pb-4 pt-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/20 shadow-2xl md:hidden rounded-t-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all [-webkit-tap-highlight-color:transparent] rounded-xl ${activeTab === tab.id
            ? 'text-primary bg-primary-container/10'
            : 'text-on-surface-variant hover:bg-surface-container-high/50 active:bg-surface-container-high'
            }`}
        >
          <span className="material-symbols-outlined" style={activeTab === tab.id ? { fontVariationSettings: "'FILL' 1" } : {}}>
            {tab.icon}
          </span>
          <span className="font-label-md text-label-md mt-1">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
