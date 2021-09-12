import "./Html.css";
import Markdown from "markdown-to-jsx";
import { render } from "react-dom";

const Html = ({ markText }) => {
  return (
    <div className="html">
      <div className="html__top">
        <h1 className="html__title">PREVIEW</h1>
      </div>
      <div
        // dangerouslySetInnerHTML={{ __html: prevText }}
        className="html__preview"
      >
        <Markdown>{markText}</Markdown>
      </div>
    </div>
  );
};

export default Html;
