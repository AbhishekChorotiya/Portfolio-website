
import './App.css';
import Header from './components/header/header';
import IconSidebar from './components/iconSidebar/iconSidebar';
import MainSection from './components/MainSection/mainSection';
import Section from './components/section';
import Projects from './components/projectsSection/projects';
function App() {



  return (
    <div className="App">
      <Section>
      <Header/>
      <MainSection/>
      </Section>
      <Section id={'secondSection'}>
        <Projects/>
      </Section>
      <Section id={'thirdSection'}>

      </Section>
      <IconSidebar/>
    </div>
  );
}

export default App;
