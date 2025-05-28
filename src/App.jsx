import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CVDisplay from "./components/CVDisplay";
import Header from "./components/Header";

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

    console.log(e, educationId);

    setEducationData((prevEducationData) => {
      const updatedEducation = prevEducationData.education.map((education) =>
        education.id === educationId
          ? { ...education, [name]: value }
          : education
      );
      console.log(prevEducationData);

      // Using this statement to find out why education ID isn't being defined
      console.log(`Current education id being changed is: ${educationId}`);

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

      console.log(`New education id is: ${newEducation.id}`);

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
    experience: [
      {
        id: 1,
        jobTitle: "",
        placeOfWork: "",
        datesOfWork: "",
        resonsibilities: "",
      },
    ],
  });

  //EXPERIENCE - update state when inputs change
  const handleExperienceChange = (e, experienceId) => {
    const { name, value } = e.target;

    setExperienceData((prevExperienceData) => {
      const updatedExperience = prevExperienceData.experience.map(
        (experience) =>
          experience.id === experienceId
            ? { ...experience, [name]: value }
            : experience
      );

      // Using this statement to find out why education ID isn't being defined
      console.log(`Current experience id being changed is: ${experienceId}`);

      return {
        ...prevExperienceData,
        experience: updatedExperience,
      };
    });
  };

  //EXPERIENCE - add a new experience entry
  const handleAddExperience = () => {
    setExperienceData((prevExperienceData) => {
      //get a new id
      const newId =
        prevExperienceData.experience.length > 0
          ? Math.max(
              ...prevExperienceData.experience.map(
                (experience) => experience.id
              )
            ) + 1
          : 1;

      //create new experience
      const newExperience = {
        id: newId,
        jobTitle: "",
        placeOfWork: "",
        datesOfWork: "",
        resonsibilities: "",
      };

      console.log(`New experience id is: ${newExperience.id}`);

      //add to the education array
      return {
        ...prevExperienceData,
        experience: [...prevExperienceData.experience, newExperience],
      };
    });
  };

  //EXPERIENCE - remove extra experience
  const handleRemoveExperience = (experienceId) => {
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      experience: prevExperienceData.experience.filter(
        (experience) => experience.id !== experienceId
      ),
    }));
  };

  return (
    <>
      <Header />
      <div className="lg:flex lg:flex-row lg:w-full lg:justify-around">
        <div className="lg:border-r-1 lg:border-l-1 lg:border-gray-300">
          <div className=" sm:flex sm:flex-row lg:flex-col sm:w-full sm:justify-around sm:border-b-1 sm:border-gray-300">
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
          </div>
          <ExperienceForm
            experienceData={experienceData}
            handleChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
            handleRemoveExperience={handleRemoveExperience}
          />
        </div>
        <div>
          <CVDisplay
            personalData={personalData}
            educationData={educationData}
            experienceData={experienceData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
