import { Card, CardContent, Typography, Grid, Icon } from '@mui/material';
import { Verified } from '@mui/icons-material';
import './skill.css';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className='resume-container'>
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2' align='center'>
            {title}
          </Typography>
          <Grid container spacing={1} alignItems="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} key={index}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Icon color="primary">
                      <Verified fontSize="small" />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="white" className="skill-text">
                      {skill}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillCard;
