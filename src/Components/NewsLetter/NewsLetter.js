import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="news-letter">
      <h2>
        Sign Up for the <span className="form-span">newsletter</span>
      </h2>
      <form>
        <input type="email" placeholder="suscribe@me.com" />
        <button type="button">
          <i className="fa-solid fa-envelope"></i>Suscribe
        </button>
      </form>
    </div>
  );
}
export default NewsLetter;
