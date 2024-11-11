import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import GitHub from '../components/GitHub';
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProductsState(json);
      })
  },[]);

  const hasProducts = productsState.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Thomas Gaylord
      </h1>
      <Counter name={"counterOne"} mult={1} size={5}/>
      <Counter name={"counterTwo"} mult={2} size={5}/>
      <hr style={{width: "80%", marginTop: "1em",}}/>
      <GitHub/>
      <hr style={{width: "80%", marginTop: "1em",}}/>
      <h1 className={styles.title}>
        Store
      </h1>
      {hasProducts ? <SearchBar products={productsState}/> : "Loading..."}
    </div>
  );
}
