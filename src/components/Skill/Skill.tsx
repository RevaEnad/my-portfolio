import { Card, CardContent, Typography, Grid, Icon } from '@mui/material';
import { Verified } from '@mui/icons-material'; 
import './skill.css';

function Skill() {
  return (
    <div>
      <section id='skill'>
        <div className="skill-container">
          <div className="skill-content">
            <h5 className="skill-heading fraunces">skills and experience</h5>
            <Grid container spacing={4}> 
              <Grid item xs={12} sm={6} md={4}>
                <Card className='resume-container'>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center'>
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
                      {/* Fourth Group */}
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
                      {/* Fift Group */}
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
                      {/* Sixth Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Typescript</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className='resume-container' >
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center'>
                      Backend Development
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
                          <Typography variant="body2" color="white">Java(Springboot)</Typography>
                        </Grid>
                      </Grid>
                      {/* 2nd Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">PHP</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className='resume-container'>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center'>
                      Database Management
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
                          <Typography variant="body2" color="white">MySQL</Typography>
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
                          <Typography variant="body2" color="white">PostgreSQL</Typography>
                        </Grid>
                      </Grid>
                       {/* Third Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Docker</Typography>
                        </Grid>
                      </Grid>
                      {/* Fourth Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Kubernetes</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className='resume-container' >
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center'>
                      Version Control
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
                          <Typography variant="body2" color="white">Git</Typography>
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
                          <Typography variant="body2" color="white">GitLab</Typography>
                        </Grid>
                      </Grid>
                      {/* Third Group */}
                      <Grid container item spacing={1} xs={6} alignItems="center">
                        <Grid item>
                          <Icon color="primary">
                            <Verified fontSize="small" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="white">Github</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className='resume-container' >
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2' align='center'>
                      Other Tools and Libraries
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
                          <Typography variant="body2" color="white">Figma</Typography>
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
                          <Typography variant="body2" color="white">Material-UI</Typography>
                        </Grid>
                      </Grid>
                      {/* Third Group */}
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
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="contact-button-container">
            {/* Add contact button or other content here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
