export default function ContactForm() {
  return (
    <form className="form">
      <h1 className="form__heading">Write a message to us</h1>
      <div className="form__inputs">
        <div className="form__inputs--box">
          <input
            type="text"
            name="username"
            placeholder="Your name"
            className="el-input"
          />
        </div>
        <div className="form__inputs--box">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="el-input"
          />
        </div>
        <div className="form__inputs--box">
          <textarea
            name="message"
            placeholder="Your message"
            className="el-textarea"
            rows={6}
          ></textarea>
        </div>
        <div className="form__inputs--box">
          <button type="submit" className="el-submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
