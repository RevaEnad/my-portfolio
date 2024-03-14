import { Button } from '@mui/material';

function ContactButton() {
  return (
    <div>
      <Button 
        variant='contained' 
        sx={{ backgroundColor: '#D9D9D9', color: '#232946', borderRadius: '25px',   padding: '8px 60px'}}
      >
        Contact
      </Button>
    </div>
  );
}

export default ContactButton;
