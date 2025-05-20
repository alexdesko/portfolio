import React from 'react';

const Job = ({ title, company, duration, responsibilities }) => {
  return (
    <div className="job-item">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <ul className="responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

const Jobs = () => {
  const jobs = [
    {
      title: "Data Scientist",
      company: "Quanthome SA",
      duration: "2024",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Implemented new features and fixed bugs in existing applications",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ]
    },
    {
      title: "Research Assistant",
      company: "Computer Vision Lab - EPFL",
      duration: "2022-2023",
      responsibilities: [
        "Assisted in developing front-end features using React",
        "Participated in code reviews and team meetings",
        "Helped maintain and update existing codebase"
      ]
    },
    {
      title: "Master Thesis Student",
      company: "IdePHICS - EPFL",
      duration: "2022",
      responsibilities: [
        "Your responsibility 1",
        "Your responsibility 2",
        "Your responsibility 3"
      ]
    }
  ];

  return (
    <section id="jobs" className="section">
      <h2>Core Experience</h2>
      <div className="jobs-content">
        {jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            company={job.company}
            duration={job.duration}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};

export default Jobs; 