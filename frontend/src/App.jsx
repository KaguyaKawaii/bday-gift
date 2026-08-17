// src/App.jsx
import React, { useState } from 'react';

// Import data
import { birthday } from './data/birthday';
import { memories } from './data/memories';
import { timeline } from './data/timeline';
import { quiz } from './data/quiz';
import { secrets } from './data/secrets';
import { letter } from './data/letter';

// Import components
import OpeningScreen from './components/OpeningScreen';
import BirthdayHero from './components/BirthdayHero';
import InteractiveCake from './components/InteractiveCake';
import PersonalMessage from './components/PersonalMessage';
import MemoryScrapbook from './components/MemoryScrapbook';
import MemoryTimeline from './components/MemoryTimeline';
// Remove: import InteractiveCards from './components/InteractiveCards';
import QuizSection from './components/QuizSection';
import SecretStickers from './components/SecretStickers';
import HiddenPassword from './components/HiddenPassword';
// Remove: import RemindersSection from './components/RemindersSection';
import LoveLetter from './components/LoveLetter';
import FinalGift from './components/FinalGift';
import FinalMessage from './components/FinalMessage';
import FinalMemoryPage from './components/FinalMemoryPage';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState(-1);
  const [foundSecrets, setFoundSecrets] = useState([]);
  const [unlockedMessage, setUnlockedMessage] = useState(null);

  // Define handlers
  const handleSecretFound = (secretId) => {
    if (!foundSecrets.includes(secretId)) {
      setFoundSecrets([...foundSecrets, secretId]);
    }
  };

  const handleUnlock = (message) => {
    setUnlockedMessage(message);
  };

  // Define pages (removed InteractiveCards and RemindersSection)
  const pages = [
    { 
      id: 'birthday', 
      component: BirthdayHero, 
      props: { name: birthday.name } 
    },
    { id: 'cake', component: InteractiveCake, props: {} },
    { id: 'message', component: PersonalMessage, props: { message: birthday.message } },
    { id: 'memories', component: MemoryScrapbook, props: { memories } },
    { id: 'story', component: MemoryTimeline, props: { timeline } },
    // REMOVED: { id: 'cards', component: InteractiveCards, props: {} },
    { id: 'quiz', component: QuizSection, props: { quiz } },
    { 
      id: 'password', 
      component: HiddenPassword, 
      props: { 
        onUnlock: handleUnlock, 
        unlockedMessage 
      } 
    },
    // REMOVED: { id: 'reminders', component: RemindersSection, props: {} },
    { id: 'letter', component: LoveLetter, props: { letter } },
    { 
      id: 'final-gift', 
      component: FinalGift, 
      props: { 
        onOpen: () => {
          const finalIndex = pages.length - 2;
          if (finalIndex >= 0) {
            goToPage(finalIndex);
          }
        } 
      } 
    },
    { 
      id: 'final-message', 
      component: FinalMessage, 
      props: { 
        name: birthday.name, 
        sender: birthday.sender 
      } 
    },
    { id: 'final-memory', component: FinalMemoryPage, props: {} },
  ];

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  const sections = pages.map((page, index) => ({
    id: page.id,
    number: String(index + 1).padStart(2, '0'),
    title: page.id.toUpperCase().replace(/-/g, ' ')
  }));

  const handleOpen = () => {
    setCurrentPage(0);
  };

  const CurrentComponent = currentPage >= 0 ? pages[currentPage].component : null;
  const currentProps = currentPage >= 0 ? pages[currentPage].props : {};

  return (
    <div className="app min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
      {currentPage === -1 && <OpeningScreen onOpen={handleOpen} />}
      
      {currentPage >= 0 && (
        <>
          <Navigation 
            sections={sections} 
            currentSection={pages[currentPage].id}
            onNavigate={(id) => {
              const index = pages.findIndex(p => p.id === id);
              if (index !== -1) goToPage(index);
            }}
          />
          
          <main className="relative z-10">
            {CurrentComponent && (
              <CurrentComponent 
                {...currentProps}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentIndex={currentPage}
                totalSlides={pages.length}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;