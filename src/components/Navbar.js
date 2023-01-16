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
      <div className="navbar__title">
        Oerlikon Digital Hub <span className="title__small">HTML Element Attribute Generator</span>
      </div>
      <div className="navbar__download" onClick={() => download(fileName + ".html", markText)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span>Download File</span>
      </div>
    </div>
  );
};

export default Navbar;
