import "./search.css";

function Search(props) {
  return (
    <div className="search">
      <form>
        <input type="text" name="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
