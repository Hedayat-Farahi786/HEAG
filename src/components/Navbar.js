import "./Navbar.css";
import logo from "./logo.png";

const Navbar = ({ markText, fileName }) => {
  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  return (
    <div className="navbar">
      <h1 className="navbar__title">
        <img class="navbar__logo" src={logo} alt="" />
        Markdown
      </h1>
      <button className="navbar__download" onClick={() => download(fileName + ".md", markText)}>
        Download
      </button>
    </div>
  );
};

export default Navbar;
