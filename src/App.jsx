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

  //PERSONAL - update state when inputs change
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevPersonalData) => ({
      ...prevPersonalData,
      [name]: value,
    }));
  };

  //store EDUCATION data
  const [educationData, setEducationData] = useState({
    education: [{ id: 1, institution: "", datesOfStudy: "", courseName: "" }],
  });

  //EDUCATION - update state when inputs change
  const handleEducationChange = (e, educationId) => {
    const { name, value } = e.target;

    setEducationData((prevEducationData) => {
      const updatedEducation = prevEducationData.education.map((education) =>
        education.id === educationId
          ? { ...education, [name]: value }
          : education
      );

      // Using this statement to find out why education ID isn't being defined
      console.log(educationId);

      return {
        ...prevEducationData,
        education: updatedEducation,
      };
    });
  };

  //EDUCATION - add a new education entry
  const handleAddEducation = () => {
    setEducationData((prevEducationData) => {
      //get a new id
      const newId =
        prevEducationData.education.length > 0
          ? Math.max(
              ...prevEducationData.education.map((education) => education.id)
            ) + 1
          : 1;

      //create new education
      const newEducation = {
        id: newId,
        institution: "",
        datesOfStudy: "",
        courseName: "",
      };

      //add to the education array
      return {
        ...prevEducationData,
        education: [...prevEducationData.education, newEducation],
      };
    });
  };

  //EDUCATION - remove extra education
  const handleRemoveEducation = (educationId) => {
    setEducationData((prevEducationData) => ({
      ...prevEducationData,
      education: prevEducationData.education.filter(
        (education) => education.id !== educationId
      ),
    }));
  };

  //store EXPERIENCE data
  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    placeOfWork: "",
    datesOfWork: "",
    responsibilities: "",
  });

  //EXPERIENCE - update state when inputs change
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      [name]: value,
    }));
  };

  return (
    <>
      <PersonalForm
        personalData={personalData}
        handleChange={handlePersonalChange}
      />
      <EducationForm
        educationData={educationData}
        handleChange={handleEducationChange}
        handleAddEducation={handleAddEducation}
        handleRemoveEducation={handleRemoveEducation}
      />
      <ExperienceForm
        experienceData={experienceData}
        handleChange={handleExperienceChange}
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
