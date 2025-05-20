function ExperienceForm({
  experienceData,
  handleChange,
  handleAddExperience,
  handleRemoveExperience,
}) {
  return (
    <>
      <div className="flex flex-col items-center p-3">
        <h1>Previous Experience Details</h1>
        {experienceData.experience.map((experience) => (
          <div key={experience.id}>
            <form>
              <label for="jobTitle">Job Title: </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={experience.jobTitle}
                onChange={(event) => handleChange(event, experience.id)}
                placeholder="Rider of Rohan"
              ></input>
              <br />
              <label for="placeOfWork">Place Of Work: </label>
              <input
                type="text"
                id="placeOfWork"
                name="placeOfWork"
                value={experience.placeOfWork}
                onChange={(event) => handleChange(event, experience.id)}
                placeholder="Rohan"
              ></input>
              <br />
              <label for="datesOfWork">Dates: </label>
              <input
                type="text"
                id="datesOfWork"
                name="datesOfWork"
                value={experience.datesOfWork}
                onChange={(event) => handleChange(event, experience.id)}
                placeholder="The Third Age (current position)"
              ></input>
              <br />
              <label for="responsibilities">
                Description of responsibilities:{" "}
              </label>
              <input
                type="text"
                id="responsibilities"
                name="responsibilities"
                value={experience.responsibilities}
                onChange={(event) => handleChange(event, experience.id)}
                placeholder="Protect Rohan from the forces of darkness (or Gondor)."
              ></input>
              <br />
            </form>
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleAddExperience()}
                className="bg-green-200 hover:bg-green-300 font-semibold py-2 px-4 border border-green-400 rounded shadow w-[150px] text-xs"
              >
                New Experience
              </button>
              <div>
                {experienceData.experience.length > 1 && (
                  <button
                    onClick={() => handleRemoveExperience(experience.id)}
                    className="bg-red-200 hover:bg-red-300 font-semibold py-2 px-4 border border-red-400 rounded shadow w-[150px] text-xs"
                  >
                    Remove Experience
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

export default ExperienceForm;
