function PersonalForm({ personalData, handleChange }) {
  return (
    <>
      <form>
        <label for="fullName">Full name: </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={personalData.fullName}
          onChange={handleChange}
          placeholder="Katniss Everdeen"
        ></input>
        <br />
        <label for="phoneno">Phone number: </label>
        <input
          type="tel"
          id="phoneNo"
          name="phoneNo"
          value={personalData.phoneNo}
          onChange={handleChange}
          placeholder="+121212121212"
        ></input>
        <br />
        <label for="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalData.email}
          onChange={handleChange}
          placeholder="k.evergreen@gmail.com"
        ></input>
        <br />
        <label for="location">Location: </label>
        <input
          type="text"
          id="location"
          name="location"
          value={personalData.location}
          onChange={handleChange}
          placeholder="District 12"
        ></input>
        <br />
        <label for="linkedin">LinkedIn: </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={personalData.linkedin}
          onChange={handleChange}
          placeholder="k.e.linkedin.com"
        ></input>
        <br />
        <label for="github">GitHub: </label>
        <input
          type="url"
          id="github"
          name="github"
          value={personalData.github}
          onChange={handleChange}
          placeholder="hunter12.github.com"
        ></input>
        {/* <br />
        <button type="button">Edit</button>
        <input type="submit" value="Submit"></input> */}
      </form>
    </>
  );
}

export default PersonalForm;
