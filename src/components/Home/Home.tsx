import './home.css'; 
import ContactButton from './ContactButton';
import { Grid, Icon } from '@mui/material'; 
import Resume from './Resume';
import { LinkedIn, Email, GitHub, WavingHandRounded } from '@mui/icons-material';

const Home = () => {
  return ( 
    <section id='home'>
      <Grid container spacing={2}> 
        <Grid item xs={12} md={6}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={2}>
              <div className="social-icons-container">
                <a href="https://www.linkedin.com/in/enadreva" target="_blank" rel="noopener noreferrer">
                  <LinkedIn sx={{fontSize: '46px'}} />
                </a>
                <a href="mailto:reva.enad@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Email sx={{fontSize: '40px'}} />
                </a>
                <a href="https://github.com/RevaEnad" target="_blank" rel="noopener noreferrer">
                  <GitHub sx={{fontSize: '40px'}} />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={10}>
              <div className="introduction">
                <h1>
                  Hello! I'm Reva <Icon component={WavingHandRounded} fontSize='large' sx={{ color: '#EEBBC3' }} />
                </h1>
                <div className="job-title">
                  <div className="line"></div>
                  <p>Frontend Developer</p>
                </div>
              </div>
              <div className='intro'>
                <p>I’m a Front End Developer based in Cebu, City and <br />
                  I’m very passionate and dedicated to my work.</p>
              </div>
              <div className="button-container">
                <div className="resume-container">
                  <Resume />
                </div>
                <div className="contact-button-container">
                  <ContactButton />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
         
        </Grid>
      </Grid>
    </section>
  );
}

export default Home;
