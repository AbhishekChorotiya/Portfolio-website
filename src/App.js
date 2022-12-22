
import './App.css';
import Header from './components/header/header';
import IconSidebar from './components/iconSidebar/iconSidebar';
import MainSection from './components/MainSection/mainSection';
import Section from './components/section';
import Projects from './components/projectsSection/projects';
import Skills from './components/skillsSection/skills';
import Contact from './components/contact/contact';

function App() {



  return (
    <div className="App">
        {/* <Header /> */}
        <MainSection />
        {/* <Projects /> */}

        <Skills />
      {/* <Section>
        <Contact></Contact>
      </Section>
      <IconSidebar /> */}
    </div>
  );
}

export default App;
