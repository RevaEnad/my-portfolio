import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Toolbar sx={{ marginTop: 2.5, justifyContent: 'right' }}>
      
        {/* Navigation items */}
        <div>
          <Button
            color="inherit"
            href="#home"
            size="large"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              fontSize: '1rem',
              '&:hover': { backgroundColor: 'transparent', color: 'black' },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#about"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              fontSize: '1rem',
              '&:hover': { backgroundColor: 'transparent', color: 'black' },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            href="#services"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              fontSize: '1rem',
              '&:hover': { backgroundColor: 'transparent', color: 'black' },
            }}
          >
            Skills
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              fontSize: '1rem',
              '&:hover': { backgroundColor: 'transparent', color: 'black' },
            }}
          >
            Education
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              marginLeft: 2,
              marginRight: 2,
              fontSize: '1rem',
              '&:hover': { backgroundColor: 'transparent', color: 'black' },
            }}
          >
            Work Experience
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
