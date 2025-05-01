function EducationForm({ educationData, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button>New Education</button>
        <br />
      </form>
    </>
  );
}

export default EducationForm;
