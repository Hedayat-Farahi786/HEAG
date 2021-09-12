import "./Details.css";
const Details = ({ markText, fileName, setFileName }) => {
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
          .md
        </h1>
      </div>

      <div className="details__info">
        <div className="details__words">
          <p className="details__title">WORDS:</p>
          <h1 className="details__text">{markText.split(" ").length}</h1>
        </div>
        <div className="details__characters">
          <p className="details__title">CHARACTERS:</p>
          <h1 className="details__text">{markText.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
