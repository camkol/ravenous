import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (selectedSortOption === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSelectedSortOption(sortByOption);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    searchYelp(searchTerm, location, selectedSortOption);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      const isActive = sortByOptionValue === selectedSortOption;

      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()} </ul>
      </div>{" "}
      <form onSubmit={handleSearchClick}>
        {" "}
        <div className={styles.SearchBarFields}>
          <input
            placeholder="Search Businesses"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <input
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      </form>
      <div className={styles.SearchBarSubmit}>
        <button type="submit">Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
