import { Grid, Typography } from '@mui/material';
import SkillCard from './SkillCard';
import './skill.css';

interface SkillSection {
  title: string;
  skills: string[];
}

const SKILL_SECTIONS: SkillSection[] = [
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'React', 'Vuejs', 'Typescript'],
  },
  {
    title: 'Backend Development',
    skills: ['Java(Springboot)', 'PHP'],
  },
  {
    title: 'Database Management',
    skills: ['MySQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Version Control',
    skills: ['Git', 'GitLab', 'Github'],
  },
  {
    title: 'Other Tools and Libraries',
    skills: ['Figma', 'Material-UI', 'Bootstrap'],
  },
];

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill-container">
        <div className="skill-content">
          <Typography variant="h5" className="skill-heading">
            Skills and Experience
          </Typography>
          <Grid container spacing={4}>
            {SKILL_SECTIONS.map((section, index) => (
              <SkillCard key={index} title={section.title} skills={section.skills} />
            ))}
          </Grid>
        </div>
        <div className="contact-button-container">
          {/* Add contact button or other content here */}
        </div>
      </div>
    </section>
  );
}

export default Skill;
