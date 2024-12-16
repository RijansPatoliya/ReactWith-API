import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Movies from "./Components/Movies";  // Correct import for Movies component
import RecentlyAdded from "./Components/Recently_Added";  // Correct import for RecentlyAdded component
import MyList from "./Components/My_List";  // Correct import for MyList component
import "./Style/Home.css";
import "./Style/Header.css";
import "./Style/SearchResults.css"
import "./Style/Movies.css"
import SearchResults from "./Components/SearchResults"; // Ensure this path is correct


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/RecentlyAdded" element={<RecentlyAdded />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/search" element={<SearchResults />} /> 
      </Routes>
    </Router>
  );
};

export default App;
