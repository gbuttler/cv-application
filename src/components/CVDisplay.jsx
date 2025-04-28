function CVDisplay({ personalData }) {
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
    </>
  );
}

export default CVDisplay;
