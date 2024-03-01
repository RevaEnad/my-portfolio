import { AppBar, Toolbar, Button } from '@mui/material';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='poppins-medium'>
    <AppBar
      position="fixed"
      className="navbar-appbar fraunces"
    >
      <Toolbar sx={{ marginTop: 4.5, justifyContent: 'center' }}>
        <Button
        className='navbar-button'
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
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default NavBar;
