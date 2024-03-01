import { Card, CardContent, Typography, Grid, Icon } from '@mui/material';
import { Verified } from '@mui/icons-material'; 
import './skill.css';

function Skill() {
  return (
    <div>
      <section id='skill'>
        <div className="skill-container">
          <div className="skill-content">
            <h5 className="skill-heading fraunces">What Skills I Have</h5>
            <Grid container spacing={4}> 
              <Grid item xs={4}>
                <Card className='resume-container'>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center' sx={{marginBottom: '30px'}}>
                      Frontend Development
                    </Typography>
                    <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                      {/* First Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">HTML</Typography>
                        </Grid>
                      </Grid>
                      {/* Second Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">CSS</Typography>
                        </Grid>
                      </Grid>
                      {/* 3rd Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Bootstrap</Typography>
                        </Grid>
                      </Grid>
                      {/* 4th Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">React</Typography>
                        </Grid>
                      </Grid>
                       {/* 5th Group */}
                       <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Javascript</Typography>
                        </Grid>
                      </Grid>
                       {/* 6th Group */}
                       <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Vuejs</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className='resume-container' >
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      Backend Development
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Icon color="primary">
                          <Verified fontSize="small" />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="textSecondary">HTML</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className='resume-container'>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      Database Management
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Icon color="primary">
                          <Verified fontSize="small" />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="textSecondary">HTML</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="contact-button-container">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
