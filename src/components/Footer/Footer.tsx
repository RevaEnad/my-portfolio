import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import './footer.css'; // Include your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Social Media Links */}
          <Grid item xs={12}>
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
            <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
