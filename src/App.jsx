import { useState } from "react";
import uniqid from "uniqid";
import sampleData from "../public/sample-data";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/personal/Personal";
import Resume from "./components/Resume";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";

function App() {
  const [personal, setPersonal] = useState(sampleData.personal);
  const [experience, setExperience] = useState(sampleData.experience);
  const [education, setEducation] = useState(sampleData.education);

  // personal
  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setPersonal({ ...personal, [id]: value });
  };

  // education
  const handleEducationChange = (e) => {
    const { id, value } = e.target;
    setEducation({ ...education, [id]: value });
  };

  // experience
  const handleExperienceChange = (e) => {
    const { id, value } = e.target;
    setExperience({ ...experience, [id]: value });
  };

  return (
    <div>
      <Header />
      <div className="row">
        <div className="row-form">
          <Personal
            onChange={handlePersonalChange}
            name={personal.name}
            email={personal.email}
            phone={personal.phone}
            address={personal.address}
          />
          <Education
            onChange={handleEducationChange}
            degree={education.degree}
            school={education.school}
            location={education.location}
            startDate={education.startDate}
            endDate={education.endDate}
          />
          <Experience
            onChange={handleExperienceChange}
            company={experience.company}
            position={experience.position}
            location={experience.location}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        </div>
        <div className="row-resume">
          <Resume
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
