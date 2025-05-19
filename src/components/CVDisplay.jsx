function CVDisplay({ personalData, educationData, experienceData }) {
  return (
    <>
      <div className="title-name">
        <h1>{personalData.fullName || "Katniss Everdeen"}</h1>
      </div>
      <div className="personal-info-div">
        <p className="personal-info">
          {personalData.phoneNo || "+121212121212"}
        </p>
        <p className="personal-info">
          {personalData.email || "k.evergreen@gmail.com"}
        </p>
        <p className="personal-info">
          {personalData.location || "District 12"}
        </p>
        <p className="personal-info">
          {personalData.linkedin || "k.e.linkedin.com"}
        </p>
        <p className="personal-info">
          {personalData.github || "hunter12.github.com"}
        </p>
      </div>
      {educationData.education.map((education) => (
        <div key={education.id}>
          <div className="education-info-div">
            <p className="education-info">
              {education.institution || "Starfleet Academy"}
            </p>
            <p className="education-info">
              {education.datesOfStudy || "2022-2025"}
            </p>
            <p className="education-info">
              {education.courseName || "Espionage"}
            </p>
          </div>
        </div>
      ))}

      <div className="experience-info-div">
        <p className="experience-info">
          {experienceData.jobTitle || "Rider of Rohan"}
        </p>
        <p className="experience-info">
          {experienceData.placeOfWork || "Rohan"}
        </p>
        <p className="experience-info">
          {experienceData.datesOfWork || "The Third Age (current position)"}
        </p>
        <p className="experience-info">
          {experienceData.responsibilities ||
            "Protect Rohan from the forces of darkness (or Gondor)."}
        </p>
      </div>
    </>
  );
}

export default CVDisplay;
