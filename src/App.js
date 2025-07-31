import './App.css';
import FirstPart from './FirstPart';
import AboutPart from './AboutPart';
import ProjectDisplay from './ProjectDisplay';
import SkillsPart from './SkillsPart';
import ContactPart from './ContactPart';

function App() {
  return (
    <div className="portfolio">
      <FirstPart />
      <AboutPart />
      <ProjectDisplay />
      <SkillsPart />
      <ContactPart />
    </div>
  );
}

export default App;
