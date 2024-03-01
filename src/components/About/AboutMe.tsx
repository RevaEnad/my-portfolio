import { Grid, Box } from '@mui/material';
import './about.css'; // Import your CSS file
import profileImage from '/profile.jpg'; // Import your profile image

const AboutMe = () => {
  return (
    <div className="about-container">
      <section id='about'>
        <div className="about-content">
          <Grid container spacing={2} direction={'row'} alignItems="center">
            <Grid item xs={5}>
              <Box sx={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%' }}>
                <img src={profileImage} alt="Profile" className="profile-image" />
              </Box>
            </Grid>
            <Grid item xs={6}>
            <h3 className="about-heading fraunces">ABOUT ME</h3>
              <Grid container direction={'column'}>
                <Grid item>
                  <p className="about-subheading poppins-regular">
                    I'm Reva Enad, a passionate Software Programmer with a keen interest in Front-end Development. 
                    With a background in [Your Education/Experience], I have honed my skills in [Your Skills/Expertise], allowing me to [Achievements or Unique Selling Points].
                  </p>
                </Grid>
                <Grid item>
                  <p className="about-subheading poppins-regular">
                    In addition to my professional endeavors, I am deeply committed to [Any personal interests or causes]. 
                    When I'm not coding or designing, you can find me [Describe hobbies or interests].
                  </p>
                </Grid>
                <Grid item>
                  <p className="about-subheading poppins-regular">
                    Feel free to explore my portfolio to get a glimpse of my work and achievements. 
                    I'm always open to new opportunities and collaborations, so don't hesitate to reach out!
                    Thank you for visiting, and I look forward to connecting with you.
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
