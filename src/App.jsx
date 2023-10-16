import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import Yelp from "./Yelp";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    try {
      const data = await Yelp.search(term, location, sortBy);
      setBusinesses(data);
    } catch (error) {
      console.error("Error searching Yelp:", error);
    }
  };
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
