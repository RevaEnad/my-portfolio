import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import './navbar.css';

const NavigationBar= () => {
  return (
    <nav>
      <AppBar
        position="fixed"
        className="navbar-appbar"
      >
        <Toolbar className="navbar-toolbar">
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Typography variant="h4" component="span" className="logo-text">REVA ENAD</Typography>
          </Box>
          <Box display="flex" component="nav">
            <a
              className='navbar-link'
              href="#home"
            >
              Home
            </a>
            <a
              className='navbar-link'
              href="#about"
            >
              About
            </a>
            <a
              className='navbar-link'
              href="#skills"
            >
              Skills
            </a>
            <a
              className='navbar-link'
              href="#experience"
            >
              Work Experience
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavigationBar;
