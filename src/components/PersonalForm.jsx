function PersonalForm({ personalData, handleChange }) {
  return (
    <>
      <div className="flex flex-col items-center p-3 w-full sm:w-auto border-b-1 border-gray-300 sm:border-0 lg:border-b-1 lg:border-gray-300">
        <h2>Personal Details</h2>
        <form>
          <div className="flex justify-between m-1">
            <label for="fullName">Full name: </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={personalData.fullName}
              onChange={handleChange}
              placeholder="Katniss Everdeen"
            ></input>
          </div>

          <div className="flex justify-between m-1">
            <label for="phoneno">Phone number: </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={personalData.phoneNo}
              onChange={handleChange}
              placeholder="+121212121212"
            ></input>
          </div>

          <div className="flex justify-between m-1">
            <label for="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={personalData.email}
              onChange={handleChange}
              placeholder="k.evergreen@gmail.com"
            ></input>
          </div>

          <div className="flex justify-between m-1">
            <label for="location">Location: </label>
            <input
              type="text"
              id="location"
              name="location"
              value={personalData.location}
              onChange={handleChange}
              placeholder="District 12"
            ></input>
          </div>

          <div className="flex justify-between m-1">
            <label for="linkedin">LinkedIn: </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={personalData.linkedin}
              onChange={handleChange}
              placeholder="k.e.linkedin.com"
            ></input>
          </div>

          <div className="flex justify-between m-1">
            <label for="github">GitHub: </label>
            <input
              type="url"
              id="github"
              name="github"
              value={personalData.github}
              onChange={handleChange}
              placeholder="hunter12.github.com"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalForm;
