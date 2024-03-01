import { Button } from '@mui/material';

function Resume() {
  return (
    <div>
      <Button href='/Reva_Enad_Resume.pdf' variant='outlined' download sx={{color:'white'}}>
        Download Resume
      </Button>
    </div>
  );
}

export default Resume;
