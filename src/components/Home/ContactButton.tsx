import { Button } from '@mui/material';

function ContactButton() {
  return (
    <div>
      <Button 
        variant="contained" 
        sx={{ 
          backgroundImage: 'linear-gradient(to right, #ECE9E6 0%, #FFFFFF 51%, #ECE9E6 100%)',
          margin: '10px',
          padding: '8px 50px',
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'black',
          borderRadius: '20px',
          display: 'block',
          '&:hover': {
            boxShadow: '0 0 15px #eee',
            backgroundPosition: 'right center',
            color: 'blue',
            textDecoration: 'none',
          }
        }}
      >
        Contact Me 
      </Button>
    </div>
  );
}

export default ContactButton;
