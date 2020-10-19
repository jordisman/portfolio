import React from 'react';
import styles from '../styles.module.css';

const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
      <ul className={styles.navUl}>
        <li className={styles.navLi}></li>
        <li className={styles.navLi}></li>
        <li className={`${styles.navLi} ${styles.signUp}`}></li>
      </ul>
    </div>
  );
}

export default Navbar;
