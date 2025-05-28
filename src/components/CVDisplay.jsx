function CVDisplay({ personalData, educationData, experienceData }) {
  return (
    <>
      <div className="m-5 sm:p-5 lg:p-10 lg:pt-0 lg:mt-10 bg-gray-100">
        <div className="flex flex-col items-center p-3 w-full">
          <h1>{personalData.fullName || "Katniss Everdeen"}</h1>
        </div>
        <div className="flex flex-col items-end p-3 w-full text-sm">
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
        <div className="flex flex-col items-start p-3 w-full">
          <h2 className="border-b border-gray-300">Education</h2>
          {educationData.education.map((education) => (
            <div key={education.id} className="p-3">
              <div className="education-info-div">
                <p className="education-info font-bold">
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
        </div>
        <div className="flex flex-col items-start p-3 pb-10">
          <h2 className="border-b border-gray-300">Experience</h2>
          {experienceData.experience.map((experience) => (
            <div key={experience.id} className="p-3">
              <div className="experience-info-div">
                <p className="experience-info font-bold">
                  {experience.jobTitle || "Rider of Rohan"}
                </p>
                <p className="experience-info">
                  {experience.placeOfWork || "Rohan"}
                </p>
                <p className="experience-info">
                  {experience.datesOfWork || "The Third Age (current position)"}
                </p>
                <p className="experience-info">
                  {experience.responsibilities ||
                    "Protect Rohan from the forces of darkness (or Gondor)."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CVDisplay;
