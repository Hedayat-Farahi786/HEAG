import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Html from "./components/Html";
import Markdown from "./components/Markdown";
import Navbar from "./components/Navbar";

const App = () => {
  const [markText, setMarkText] = useState("");
  const [fileName, setFileName] = useState("Untitled");

  return (
    <div className="app">
      <Navbar markText={markText} fileName={fileName} />
      <Details markText={markText} fileName={fileName} setFileName={setFileName} />
      <div className="app__editors">
        <Markdown markText={markText} setMarkText={setMarkText} />
        <Html markText={markText} />
      </div>
    </div>
  );
};

export default App;
