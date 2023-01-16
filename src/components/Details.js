import "./Details.css";
const Details = ({ markText, type, setType, setMarkText, start, setStart, end, setEnd, element, setElement, fileName, setFileName, setShowResult }) => {



  const generate = () => {
    let startingPoint = start;
    let html = markText;
    let newHtml = html.replace(/<(\/?[^>]+)>/g, function (match, p1, p2) {
      if (p1[0] === "/") {
        return match;
      }
      let isSelfClosing = /\/?>$/.test(match);
      let newId = `${type}="${element}` + startingPoint++ + `"`;
      let newTag = match;
      if (p1.indexOf(`${type}=`) !== -1) {
        if(type === "id"){
          newTag = newTag.replace(/id=[‘"][^’"]+[‘"]/, newId);
        } else if(type === "class"){
          newTag = newTag.replace(/class=[‘"][^’"]+[‘"]/, newId);
        }
      } else {
        newTag = newTag.replace(p1, p1 + " " + newId);
      }
  
      if (isSelfClosing) {
        return newTag;
      }
      return newTag.replace(p2 === "/" ? p2 : "", "");
    });
    setMarkText(newHtml);
    setEnd(startingPoint - 1);
    setShowResult(true);
  }


  return (
    <div className="details">
      <div className="details__name">
        <p className="details__title">DOCUMENT NAME</p>
        <h1 className="details__filename">
          <input
            type="text"
            style={{ width: fileName.length + "ch" }}
            value={fileName}
            onChange={(e) => {
              const val = e.target.value;
              if (val == "") {
                setFileName(" ");
              } else {
                setFileName(val.trim());
              }
            }}
            className="details__filename__input"
          />
          .html
        </h1>
      </div>

      <div className="details__info">
        <div className="details__el">
          <label className="details__el__label" htmlFor="elName">Type</label>
         <select name="elName" onChange={(e) => setType(e.target.value)} value={type} className="details__el__select">
          <option value="id">id</option>
          <option value="class">class</option>
         </select>
        </div>
        <div className="details__att">
          <label className="details__att__label" htmlFor="attName">Attribute Name</label>
          <input className="details__att__input" value={element} onChange={(e) => setElement(e.target.value)} type="text" placeholder="Attribute Name..." />
        </div>
        <div className="details__words">
          <p className="details__title">Starting Num:</p>
          <input className="details__start__input" value={start} onChange={(e) => setStart(e.target.value)} type="number" placeholder="Start Num..." />
        </div>
        <div className="details__characters">
          <p className="details__title">Ending Num:</p>
          <h1 className="details__text">{end}</h1>
        </div>
        <div>
          <button className="details__button" onClick={()=> generate()}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
