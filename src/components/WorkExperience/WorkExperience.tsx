import { Card, CardContent, Typography } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';
import './workexperience.css';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Bluewind Asia Corporation',
    role: 'Associate Software Engineer',
    duration: 'November 2021 - Present',
    description: `Developed responsive web applications using HTML5, CSS3, and React.js for compatibility across devices and screen sizes
        Worked with cross-functional teams to maintain a cohesive user experience for a real estate web platform.
        Contributed to Agile development and sprint planning, enhancing team efficiency and project delivery.
        Resolved front-end and back-end bugs through debugging and troubleshooting, ensuring smooth functionality on iOS, Android, web platforms, and microservices.
        Conducted code reviews and testing procedures to uphold high-quality code standards and optimal performance across various browsers and devices.
        Documented project requirements, codebase, and technical solutions for future reference, facilitating knowledge sharing and collaboration among team members.`,
  },
  {
    company: 'Fixel Co,. Ltd',
    role: 'UI/UX Developer',
    duration: 'June 2023 - September 2023',
    description: `Designed and developed intuitive and visually appealing user interfaces (UI) using React, Vue.js, and TypeScript for seamless experiences across desktop and mobile platforms.
                  Created reusable UI components and libraries in React and Vue.js, enhancing development efficiency, code maintainability, and design consistency across projects.
                  Utilized Storybook for developing and testing UI components in isolation, ensuring components function correctly and meet design specifications.
                  Interacted with clients and stakeholders to gather project requirements, provide technical guidance, and ensure project deliverables met client expectations.`
  },
  {
    company: 'Increment Technologies',
    role: 'Front-end Developer Intern',
    duration: 'August 2020 - November 2020',
    description: `Conducted design reviews and incorporated feedback to continuously improve the visual and functional aspects of UI components
                  Collaborated closely with cross-functional teams to iterate on designs, gather feedback, and deliver intuitive user interfaces that enhance user experience.
    `,
  },
];

const WorkExperience = () => {
  return (
    <section id='experience'>
      <div className="work-experience-container">
        <Typography variant="h4" className="section-heading">
          Experience
        </Typography>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <WorkOutline fontSize="medium" color="primary" />
              </div>
              <div className="timeline-content">
                <Card className='experience-card'>
                  <CardContent>
                    <Typography variant="h6" className="company-name">
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle1" className="role-duration">
                      {exp.role} - {exp.duration}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      className="description"
                      component="ul" // Set component to "ul" for unordered list
                    >
                      {/* Render description as list items */}
                      {exp.description.split('\n').map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
