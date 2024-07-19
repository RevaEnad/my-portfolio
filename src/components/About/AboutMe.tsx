import { Grid, Box } from '@mui/material';
import './about.css'; 
import profileImage from '/profile.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <section id='about'>
        <div className="about-content">
          <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Grid item xs={12} sm={5}>
              <Box sx={{ marginTop: '20%', overflow: 'hidden', borderRadius: '50%', position: 'relative', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <img src={profileImage} alt="Profile" className="profile-image" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="about-heading fraunces">ABOUT ME</h3>
              <Grid container direction={'column'}>
                <Grid item>
                  <p className="about-subheading">
                    I'm Reva Enad, a passionate software programmer with a keen interest in front-end development. 
                    With a background in Information Technology from University of San Carlos and two years and five months of experience working as a Programmer, I've honed my skills in HTML, CSS, Javascript and React, enabling me to create dynamic and user-friendly web interfaces. 
                    My achievements include successfully leading the development of a responsive e-commerce website that increased user engagement by 30%.
                  </p>
                </Grid>
                <Grid item>
                  <p className="about-subheading">
                    In addition to my professional endeavors, I am deeply committed to working out. 
                    When I'm not coding or designing, you can find me hiking, working out, running and travelling.
                  </p>
                </Grid>
                <Grid item>
                  <p className="about-subheading">
                    I'm always open to new opportunities and collaborations, so please don't hesitate to reach out! Thank you for visiting, and I look forward to connecting with you.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
