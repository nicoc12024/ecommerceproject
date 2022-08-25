import "./NewsLetter.css";
import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Email is invalid");
    } else {
      alert("Thanks for subscribing");
      setEmail("");
    }
  };

  return (
    <div className="news-letter">
      <h2>
        Sign Up for the <span className="form-span">newsletter</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          id="message"
          name="message"
          type="Email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          required
        />
        <button type="submit">
          <i className="fa-solid fa-envelope"></i>Suscribe
        </button>
      </form>
    </div>
  );
}
export default NewsLetter;
