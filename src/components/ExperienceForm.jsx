function ExperienceForm({ experienceData, handleChange }) {
  return (
    <>
      <form>
        <label for="jobTitle">Job Title: </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={experienceData.jobTitle}
          onChange={handleChange}
          placeholder="Rider of Rohan"
        ></input>
        <br />
        <label for="placeOfWork">Place Of Work: </label>
        <input
          type="text"
          id="placeOfWork"
          name="placeOfWork"
          value={experienceData.placeOfWork}
          onChange={handleChange}
          placeholder="Rohan"
        ></input>
        <br />
        <label for="datesOfWork">Dates: </label>
        <input
          type="text"
          id="datesOfWork"
          name="datesOfWork"
          value={experienceData.datesOfWork}
          onChange={handleChange}
          placeholder="The Third Age (current position)"
        ></input>
        <br />
        <label for="responsibilities">Description of responsibilities: </label>
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          value={experienceData.responsibilities}
          onChange={handleChange}
          placeholder="Protect Rohan from the forces of darkness (or Gondor)."
        ></input>
        <br />
      </form>
      <button onClick={() => alert("experience button clicked")}>
        New Experience
      </button>
    </>
  );
}

export default ExperienceForm;
