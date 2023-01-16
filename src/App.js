import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Result from "./components/Result";
import Html from "./components/Html";
import Navbar from "./components/Navbar";

const App = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [element, setElement] = useState("element__");
  const [markText, setMarkText] = useState("");
  const [fileName, setFileName] = useState("Untitled");
  const [showResult, setShowResult] = useState(false);
  const [type, setType] = useState("id");

  return (
    <div className="app">
      <Navbar markText={markText} fileName={fileName} />
      <Details markText={markText} type={type} setType={setType} setMarkText={setMarkText} start={start} setStart={setStart} end={end} setEnd={setEnd} element={element} setElement={setElement} fileName={fileName} setFileName={setFileName} setShowResult={setShowResult} />
      <div className="app__editors">
        <Html markText={markText} setMarkText={setMarkText} />
        <Result markText={markText} showResult={showResult} />
      </div>
    </div>
  );
};

export default App;
