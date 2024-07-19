import { Grid, Box } from '@mui/material';
import './about.css'; 
import profileImage from '/profile.jpg'; 

const AboutMeContent = () => (
  <Grid container direction={'column'}>
    <Grid item>
      <p className="about-subheading">
        I'm Reva Enad, a passionate software programmer with a keen interest in front-end development. 
        With a background in Information Technology from the University of San Carlos and two years and five months of experience working as a Programmer, I've honed my skills in HTML, CSS, JavaScript, and React, enabling me to create dynamic and user-friendly web interfaces. 
        My achievements include successfully leading the development of a responsive e-commerce website that increased user engagement by 30%.
      </p>
    </Grid>
    <Grid item>
      <p className="about-subheading">
        In addition to my professional endeavors, I am deeply committed to working out. 
        When I'm not coding or designing, you can find me hiking, working out, running, and traveling.
      </p>
    </Grid>
    <Grid item>
      <p className="about-subheading">
        I'm always open to new opportunities and collaborations, so please don't hesitate to reach out! Thank you for visiting, and I look forward to connecting with you.
      </p>
    </Grid>
  </Grid>
);

const AboutMe = () => (
  <section id='about'>
    <div className="about-container">
      <div className="about-content">
        <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Box className="profile-box">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <h3 className="about-heading">ABOUT ME</h3>
            <AboutMeContent />
          </Grid>
        </Grid>
      </div>
    </div>
  </section>
);

export default AboutMe;
