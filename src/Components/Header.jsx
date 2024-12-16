import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyAdded">Recently Added</Link>
          <Link to="/myList">My List</Link>
        </div>
        <input
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} 
        />
         <button className="search-btn" onClick={handleSearchSubmit}>
            <IoSearchSharp />
          </button>
      </nav>
    </>
  );
};

export default Header;
