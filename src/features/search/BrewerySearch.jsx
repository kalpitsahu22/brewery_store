import { useState, useEffect } from "react";
import axios from "axios";
import "./BrewerySearch.css";
import Input from "../../ui/Input";
import { useNavigate } from "react-router-dom";

function BrewerySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreweries = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://api.openbrewerydb.org/breweries"
        );
        setBreweries(response.data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    // Fetch all breweries on the first render
    fetchBreweries();
  }, []); // Empty dependency array to run only on the initial render

  // Function to filter breweries based on search criteria
  const filteredBreweries = breweries.filter((brewery) => {
    if (!filterCriteria || !searchTerm) return true;

    if (filterCriteria === "by_name") {
      return brewery.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterCriteria === "by_city") {
      return brewery.city.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return true;
  });

  return (
    <div className="search-container">
      <div>
        {/* Input for searching by brewery name */}
        <Input
          type="text"
          placeholder="Search by Category. e.g - Barrel"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Dropdown to select the filter criteria */}
        <select
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          className="filter-select"
        >
          <option value=" ">Select Filter</option>
          <option value="by_name">Name</option>
          <option value="by_city">City</option>
        </select>
      </div>
      <div className="results-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="results-list">
            {filteredBreweries.map((brewery) => (
              <li
                key={brewery.id}
                className="results-item"
                onClick={() => navigate(`/details/${brewery.id}`)}
              >
                <h3 style={{ color: "#5389a0" }}>{brewery.name}</h3>
                <p style={{ color: "#7e7e7e" }}>
                  {brewery.city}, {brewery.state}
                </p>
                <p style={{ color: "#7e7e7e" }}>Phone: {brewery.phone}</p>
                <p style={{ color: "#7e7e7e" }}>
                  Website:{" "}
                  <a href={brewery.website_url}>{brewery.website_url}</a>
                </p>
                <div className="container"></div>
                <button className="details">Details</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BrewerySearch;
