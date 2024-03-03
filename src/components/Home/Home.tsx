import './home.css'; 
import Resume from './Resume';
import ContactButton from './ContactButton';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';

const Home = () => {
  return ( 
    <section id='home'>
      <div className="home-container">
        <div className="home-content">
          <h3 className="home-heading fraunces">Hello. Welcome!</h3>
          <p className="home-subheading poppins-regular"> I'm Reva Enad.</p>
          <p className="home-subheading poppins-extralight"> A web developer based in Cebu, Philippines.</p>
          <div className="button-container">
            <div className="resume-container">
              <Resume />
            </div>
            <div className="contact-button-container">
              <ContactButton />
            </div>
          </div>
          <div className="social-icons-container">
            <a href="https://www.linkedin.com/in/enadreva" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="mailto:reva.enad@gmail.com" target="_blank" rel="noopener noreferrer">
              <Email />
            </a>
            <a href="https://github.com/RevaEnad" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
