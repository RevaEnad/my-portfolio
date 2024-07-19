import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import './navbar.css';

const NavigationBar = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Work Experience' }
  ];

  return (
    <nav>
      <AppBar position="fixed" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <Box display="flex" alignItems="center" flexGrow={1} className="logo-container">
            <Typography variant="h4" component="span" className="logo-text">
              re
            </Typography>
          </Box>
          <Box display="flex" component="nav">
            {navLinks.map((link) => (
              <a key={link.href} className="navbar-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavigationBar;
