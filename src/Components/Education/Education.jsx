import React from 'react';
import './Education.css'


const educationData = [
    {
      degree: "Bachelor of Technology – Computer Science and Engineering",
      institution: "College of Engineering and Management, Kolaghat, West Bengal",
      duration: "June 2019 – June 2023",
      gpa: "GPA: 9/10"
    },
    {
      degree: "Higher Secondary (10+2)",
      institution: "Project Girl’s High School, Korha, Bihar",
      duration: "June 2016 – June 2018",
      percentage: "Percentage: 60.7%"
    },
    {
      degree: "Secondary Education (10th Standard)",
      institution: "Project Girl’s High School, Korha, Bihar",
      duration: "May 2015 – May 2016",
      percentage: "Percentage: 67.2%"
    }
  ];
const Education = () => {
    return (
      <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
 

      {
        educationData.map((edu,index)=>(
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <h3 className="degree">{edu.degree}</h3> 
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <p className="detail">{edu.gpa}</p>
            <p className="detail">{edu.percentage}</p>
          </div>
        ))
      }

      </div>
    </section>
    );
}

export default Education;
