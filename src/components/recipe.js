import "./recipe.css";

function Recipe(props) {
  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <span className="card-number card-circle subtle">{props.i}</span>
          <span className="card-author subtle">{props.value.author}</span>
          <h2 className="card-title">{props.value.name}</h2>
          <span className="card-description subtle">
            {props.value.description}
          </span>
          <div className="card-read">Read</div>
          <span className="card-tag card-circle subtle">C</span>
        </div>
        <img src={props.value.imageURL} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </div>
  );
}

export default Recipe;
