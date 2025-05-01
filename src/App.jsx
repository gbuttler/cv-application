import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CVDisplay from "./components/CVDisplay";

function App() {
  //store PERSONAL data
  const [personalData, setPersonalData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
  });

  //update state when inputs change in PERSONAL
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevPersonalData) => ({
      ...prevPersonalData,
      [name]: value,
    }));
  };

  //PERSONAL form submission
  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    console.log("Personal form submitted", personalData);
  };

  //store EDUCATION data
  const [educationData, setEducationData] = useState({
    institution: "",
    datesOfStudy: "",
    courseName: "",
  });

  //update state when inputs change in EDUCATION
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevEducationData) => ({
      ...prevEducationData,
      [name]: value,
    }));
  };

  //EDUCATION form submission
  const handleEducationSubmit = (e) => {
    e.preventDefault();
    console.log("Education form submitted", educationData);
  };

  //store EXPERIENCE data
  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    placeOfWork: "",
    datesOfWork: "",
    responsibilities: "",
  });

  //update state when inputs change in EXPERIENCE
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      [name]: value,
    }));
  };

  //EXPERIENCE form submission
  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    console.log("Experience form submitted", experienceData);
  };

  return (
    <>
      <PersonalForm
        personalData={personalData}
        handleChange={handlePersonalChange}
        handleSubmit={handlePersonalSubmit}
      />
      <EducationForm
        educationData={educationData}
        handleChange={handleEducationChange}
        handleSubmit={handleEducationSubmit}
      />
      <ExperienceForm
        experienceData={experienceData}
        handleChange={handleExperienceChange}
        handleSubmit={handleExperienceSubmit}
      />
      <CVDisplay
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
      />
    </>
  );
}

export default App;
