import "./Markdown.css";
const Markdown = ({ markText, setMarkText }) => {
  const handleText = (e) => {
    setMarkText(e.target.value);

    const gutter = document.querySelector(".markdown__gutter");
    const input = document.querySelector("textarea").value;

    let lineBreaks = input.match(/\n/gi) || [];
    let numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;

    gutter.innerHTML = "";
    for (let i = 0; i < numOfLines; i++) {
      let el = document.createElement("span");
      el.classList.add("markdown__line");
      el.innerHTML = i + 1;
      gutter.appendChild(el);
    }
  };
  return (
    <div className="markdown">
      <div className="markdown__top">
        <h1 className="markdown__title">MARKDOWN</h1>
      </div>
      <div className="markdown__editor">
        <div className="markdown__gutter">
          <span className="markdown__line">1</span>
        </div>
        <textarea value={markText} onChange={(e) => handleText(e)} className="markdown__textarea"></textarea>
      </div>
    </div>
  );
};

export default Markdown;
