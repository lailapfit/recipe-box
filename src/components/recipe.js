import "./recipe.css";

function Recipe(props) {
  return (
    <div id="recipe-wrapper">
      <div class="inner-recipe">
        <div class="more-info-btn">
          <div class="btn-background">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div id="title">
          <header>
            Oatmeal Chocolate <br />
            Chip Cookies
          </header>
        </div>

        <div id="details">
          <div class="Details">
            <h3>Level</h3>
            <p>Beginner</p>
          </div>

          <div class="Details">
            <h3>Time</h3>
            <p>35 minutes</p>
          </div>

          <div class="Details">
            <h3>Rating</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
      </div>
      <div class="start-btn">
        <a href="http://codepen.io/DesertDev">
          Start Cooking <i class="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  );
}
