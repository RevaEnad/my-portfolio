import Particle from './components/Particle/Particle';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/About/AboutMe';
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';
import Experience from './components/WorkExperience/WorkExperience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div>
      <Particle />
      <NavBar />
      <Home />
      <AboutMe />
      <Skill /> 
      <Experience />
      <Footer />
      </div>
    </>
  );
}

export default App;
