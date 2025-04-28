import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
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

  return (
    <>
      <PersonalForm
        personalData={personalData}
        handleChange={handlePersonalChange}
        handleSubmit={handlePersonalSubmit}
      />
      <CVDisplay personalData={personalData} />
    </>
  );
}

export default App;
