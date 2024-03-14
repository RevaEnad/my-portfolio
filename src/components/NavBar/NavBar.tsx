import { AppBar, Toolbar, Button, IconButton, Box, Typography } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';
import './navbar.css';

const NavBar = () => {

  return (
      <AppBar
        position="fixed"
        className="navbar-appbar"
      >
        <Toolbar sx={{ marginTop: 4.5 }}>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Typography variant="h6" component="span" className="logo-text">RE</Typography>
          </Box>
          <Box display="flex">
            <Button
              className='navbar-button fraunces'
              color="inherit"
              href="#home"
            >
              Home
            </Button>
            <Button
              className='navbar-button'
              color="inherit"
              href="#about"
            >
              About
            </Button>
            <Button
              className='navbar-button'
              color="inherit"
              href="#skill"
            >
              Skills
            </Button>
            <Button
              className='navbar-button'
              color="inherit"
              href="#experience"
            >
              Work Experience
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="theme-switcher"
            >
              <Brightness4 />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default NavBar;
