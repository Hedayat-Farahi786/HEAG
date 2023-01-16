import "./Html.css";
const Html = ({ markText, setMarkText }) => {
  

  let lineBreaks = markText.match(/\n/gi) || [];
  let numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;

  const handlePaste = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  };

  
  const handleText = (e) => {
    setMarkText(e.target.value);
  };
  return (
    <div className="html">
      <div className="html__top">
        <h1 className="html__title">HTML</h1>
      </div>
      <div className="html__editor">
        <div className="html__gutter">
        {
            Array(numOfLines).fill(null).map((u, i) => (
              <span className="result__line">{i + 1}</span>
            ))
          }
        </div>
        <textarea value={markText} onPaste={()=> handlePaste()} onChange={(e) => handleText(e)} className="html__textarea"></textarea>
      </div>
    </div>
  );
};

export default Html;
