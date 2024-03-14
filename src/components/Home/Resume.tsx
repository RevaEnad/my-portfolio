import { Button } from '@mui/material';

function Resume() {
  return (
    <div>
      <Button 
        href='/Reva_Enad_Resume.pdf' 
        variant='contained' 
        className=''
        download 
        sx={{ backgroundColor: '#eebbc3', color: '#232946', borderRadius: '25px',   padding: '8px 50px'}}
      >
        Resume
      </Button>
    </div>
  );
}

export default Resume;
