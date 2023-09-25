const ApplicationForm = () => {
  window.scrollTo(0, 0);
  return (
    <div className="hero">
      <div className="hero__box">
        <form className="hero__box--form">
          <h1>Frontend Developer</h1>
          <input required type="text" name="name" placeholder="Full name*" />
          <input required type="email" name="email" placeholder="You email*" />
          <input
            required
            type="number"
            name="phone"
            placeholder="Mobile No.*"
          />
          <input required type="file" name="resume" placeholder="You resume" />
          <div className="textareabox">
            <textarea
              name="message"
              rows="5"
              cols={10}
              required
              placeholder="Addition message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
