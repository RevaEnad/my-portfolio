import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" align="center">
              Reva Enad
            </Typography>
            <Typography variant="body2" align="center" style={{ marginTop: '8px' }}>
              Contact me: <Link href="mailto:revaenad.dev@gmail.com">revaenad.dev@gmail.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" align="center">
              <Link href="/terms-of-service">Terms of Service</Link> | 
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Typography>
            <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
              &copy; {new Date().getFullYear()} RE. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
