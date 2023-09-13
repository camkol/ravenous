import React from "react";
import styles from "./App.module.css";

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';


const App = () => {
  
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
     
  );
};

export default App;
