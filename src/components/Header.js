import React from 'react';
import Navbar from './Navbar';
import styles from '../styles.module.css';

function Header() {
  return (

      <div className={styles.headerContainer}>

        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Jordis Man</span>
          </h1>
          <p className={styles.titleSub}>
            Software Engineer based in San Francisco
          </p>

        </div>
      </div>
  );
}

export default Header;