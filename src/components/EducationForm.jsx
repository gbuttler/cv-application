function EducationForm({
  educationData,
  handleChange,
  handleAddEducation,
  handleRemoveEducation,
}) {
  return (
    <>
      {/* map through the education array */}
      {educationData.education.map((education) => (
        <div key={educationData.id}>
          <form>
            <label for="institution">Institution: </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={educationData.institution}
              onChange={handleChange}
              placeholder="Starfleet Academy"
            ></input>
            <br />
            <label for="datesOfStudy">Dates: </label>
            <input
              type="text"
              id="datesOfStudy"
              name="datesOfStudy"
              value={educationData.datesOfStudy}
              onChange={handleChange}
              placeholder="2022-2025"
            ></input>
            <br />
            <label for="courseName">Course Name: </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={educationData.courseName}
              onChange={handleChange}
              placeholder="Espionage"
            ></input>
            <br />
          </form>
          <button onClick={() => handleAddEducation()}>New Education</button>
          {/* Only show remove button if there's more than one entry */}
          <div>
            {educationData.education.length > 1 && (
              <button onClick={() => handleRemoveEducation(education.id)}>
                Remove Education
              </button>
            )}
          </div>
          <br />
        </div>
      ))}
    </>
  );
}

export default EducationForm;
