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
  const [experience, setExperience] = useState(sampleData.experiences[0]);
  const [education, setEducation] = useState(sampleData.education[0]);

  // personal
  function handleNameChange(e) {
    setPersonal({ ...personal, name: e.target.value });
  }
  function handleEmailChange(e) {
    setPersonal({ ...personal, email: e.target.value });
  }
  function handlePhoneChange(e) {
    setPersonal({ ...personal, phone: e.target.value });
  }
  function handleAddressChange(e) {
    setPersonal({ ...personal, address: e.target.value });
  }
  // education
  function handleDegreeChange(e) {
    setEducation({ ...education, degree: e.target.value });
  }
  function handleSchoolChange(e) {
    setEducation({ ...education, school: e.target.value });
  }
  function handleLocationChange(e) {
    setEducation({ ...education, location: e.target.value });
  }
  function handleStartDateChange(e) {
    setEducation({ ...education, startDate: e.target.value });
  }
  function handleEndDateChange(e) {
    setEducation({ ...education, endDate: e.target.value });
  }
  // experience
  function handleCompanyChange(e) {
    setExperience({ ...experience, company: e.target.value });
  }
  function handlePositionChange(e) {
    setExperience({ ...experience, position: e.target.value });
  }
  function handleLocation1Change(e) {
    setExperience({ ...experience, location: e.target.value });
  }
  function handleDescriptionChange(e) {
    setExperience({ ...experience, description: e.target.value });
  }
  function handleStartDate1Change(e) {
    setExperience({ ...experience, startDate: e.target.value });
  }
  function handleEndDate1Change(e) {
    setExperience({ ...experience, endDate: e.target.value });
  }

  return (
    <div>
      <Header />
      <div className="row">
        <div className="row-form">
          <Personal
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
            onAddressChange={handleAddressChange}
            name={personal.name}
            email={personal.email}
            phone={personal.phone}
            address={personal.address}
          />
          <Education
            onDegreeChange={handleDegreeChange}
            onSchoolChange={handleSchoolChange}
            onLocationChange={handleLocationChange}
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
            degree={sampleData.education[0].degree}
            school={sampleData.education[0].school}
            location={sampleData.education[0].location}
            startDate={sampleData.education[0].startDate}
            endDate={sampleData.education[0].endDate}
          />
          <Experience
            onCompanyChange={handleCompanyChange}
            onPositionChange={handlePositionChange}
            onLocationChange={handleLocation1Change}
            onDescriptionChange={handleDescriptionChange}
            onStartDateChange={handleStartDate1Change}
            onEndDateChange={handleEndDate1Change}
            company={sampleData.experiences[0].company}
            position={sampleData.experiences[0].position}
            location={sampleData.experiences[0].location}
            description={sampleData.experiences[0].description}
            startDate={sampleData.experiences[0].startDate}
            endDate={sampleData.experiences[0].endDate}
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
