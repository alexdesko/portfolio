import React from 'react';
import QHLogo from '../assets/job_icons/QH.svg';
import EPFLLogo from '../assets/job_icons/EPFL.png';
import CIBMLogo from '../assets/job_icons/CIBM.png';
import EdgelabLogo from '../assets/job_icons/edgelab.ico';

const Job = ({ logo, title, company, duration, responsibilities }) => {
  return (
    <div className="job">
      <div className="job-item">
        <div className="job-item-header">
          <div className="job-item-header-left">
            <img src={logo} alt={`${company} logo`} className="job-logo" />
          </div>
          <div className="job-item-header-right">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="duration">{duration}</p>
          </div>
        </div>
        <ul className="responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const Jobs = () => {
  const jobs = [
    {
      logo: QHLogo,
      title: "Data Scientist",
      company: "Quanthome SA",
      duration: "Feb 2024 - Aug 2024",
      responsibilities: [
        "Design and maintenance of complex data pipelines for real estate market data analysis",
        "Lead full-stack developer on applications for fund data extraction and interpretation",
        "Fine-tuning and deployment of state-of-the-art deep learning models (NLP and Vision) in production environment"
      ]
    },
    {
      logo: EPFLLogo,
      title: "Doctoral Assistant",
      company: "Computer Vision Lab - EPFL",
      duration: "July 2022 - Dec 2023",
      responsibilities: [
        "Work the ultra-limited angle tomography inverse problem with differentiable rendering",
        "Applying NeRFs and generative diffusion techniques to cryo-electron microscopy data",
        "Mentoring undergraduates for Machine Learning classes through exercise sessions"
      ]
    },
    {
      logo: EPFLLogo,
      title: "Master Thesis Student",
      company: "IdePHICS - EPFL",
      duration: "Sept 2021 - Feb 2022",
      responsibilities: [
        "Investigation of the \"neural collapse\" phenomenon happening in deep classification",
        "Use of tractable classification models to thoroughly study its occurrence",
        "Showed the capital difference between overparametrization of networks in width and depth"
      ]
    },
    {
      logo: EdgelabLogo,
      title: "Quantitative Developer intern",
      company: "Edgelab",
      duration: "July 2021 - Sept 2021",
      responsibilities: [
        "Analysis of portfolio risk exposures by metric computation in Go",
        "Contributed to the development of a tool for automatic risk analysis and report generation",
      ]
    },
    {
      logo: CIBMLogo,
      title: "Research intern",
      company: "CIBM - Center for Biomedical Imaging",
      duration: "Sept 2020 - Jan 2021",
      responsibilities: [
        "Parameter estimation for gray matter modelling in the brain using deep learning methods",
        "Magna Cum Laude abstract at ISMRM21",
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
            logo={job.logo}
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