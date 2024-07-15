import { Button } from '@mui/material';

function Resume() {
  return (
    <div>
      <Button 
        href='/Reva_Enad_Resume.pdf' 
        variant='contained' 
        download 
        sx={{ 
          backgroundImage: 'linear-gradient(to right, #B24592 0%, #F15F79 51%, #B24592 100%)',
          margin: '10px',
          padding: '8px 50px',
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'white',            
          borderRadius: '20px',
          display: 'block',
          '&:hover': {
            boxShadow: '0 0 9px #eee',
            backgroundPosition: 'right center',
            color: '#fff',
            textDecoration: 'none',
          }
        }}
      >
        Resume
      </Button>
    </div>
  );
}

export default Resume;
