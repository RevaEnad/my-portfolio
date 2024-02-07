import { Container, Grid, Typography, Box } from '@mui/material';

const AboutMe = () => {
  return (
    <Container sx={{ display: 'flex', position:'absolute', height: '100%', alignItems: 'center', justifyContent: 'center',  top: 0,
    left: 0,
    width: '100%', }}>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6} sx={{alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            Hi, I'm [Your Name]! I am a passionate [Your Profession] with a strong background in [Your Field].
            I enjoy [Your Interests/Hobbies] and     have a keen interest in [Specific Skills or Expertise].
       
          </Typography>
        </Grid>

        {/* Right side: Profile Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 440, // Increase the height
              width: 440, // Increase the width
              borderRadius: { xs: '20px', md: '50%' },
              overflow: 'hidden',
            }}
          >
            <img
              alt="Profile"
              src="/profile.jpg" // Update the path to your image
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 29%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
