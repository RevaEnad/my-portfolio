import './home.css'; 
import Resume from './Resume';
import ContactButton from './ContactButton';

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
        </div>
    </div>
    </section>
  );
};

export default Home;
