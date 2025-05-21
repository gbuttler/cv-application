function EducationForm({
  educationData,
  handleChange,
  handleAddEducation,
  handleRemoveEducation,
}) {
  return (
    <>
      <div className="flex flex-col items-center p-3 max-w-sm">
        <h2>Education</h2>
        {/* map through the education array */}
        {educationData.education.map((education) => (
          <div key={education.id}>
            <form>
              <div className="flex justify-between m-1">
                <label for="institution">Institution: </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={education.institution}
                  onChange={(event) => handleChange(event, education.id)}
                  placeholder="Starfleet Academy"
                ></input>
              </div>
              <div className="flex justify-between m-1">
                <label for="datesOfStudy">Dates: </label>
                <input
                  type="text"
                  id="datesOfStudy"
                  name="datesOfStudy"
                  value={education.datesOfStudy}
                  onChange={(event) => handleChange(event, education.id)}
                  placeholder="2022-2025"
                ></input>
              </div>
              <div className="flex justify-between m-1">
                <label for="courseName">Course Name: </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={education.courseName}
                  onChange={(event) => handleChange(event, education.id)}
                  placeholder="Espionage"
                ></input>
              </div>
            </form>
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleAddEducation()}
                className="bg-green-200 hover:bg-green-300 font-semibold py-2 px-4 border border-green-400 rounded shadow w-[150px] text-xs"
              >
                New Education
              </button>
              {/* Only show remove button if there's more than one entry */}
              <div>
                {educationData.education.length > 1 && (
                  <button
                    onClick={() => handleRemoveEducation(education.id)}
                    className="bg-red-200 hover:bg-red-300 font-semibold py-2 px-4 border border-red-400 rounded shadow w-[150px] text-xs"
                  >
                    Remove Education
                  </button>
                )}
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationForm;
