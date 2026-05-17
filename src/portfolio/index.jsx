import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ExperienceView from './views/ExperienceView';
import ProjectsView from './views/ProjectsView';
import EducationView from './views/EducationView';
import ContactView from './views/ContactView';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');

  const renderView = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsView />;
      case 'education':
        return <EducationView />;
      case 'contact':
        return <ContactView />;
      case 'experience':
      case 'home':
      case 'stack':
      default:
        // ExperienceView acts as the default / home view because it contains the main profile, stack and experience timeline.
        return <ExperienceView />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30 font-body-md overflow-x-hidden">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {renderView()}
      
      <Footer />
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
