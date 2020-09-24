import React from 'react';
import styles from '../styles.module.css';
import nat1 from '../images/nat-1.jpg';
import nat2 from '../images/nat-2.jpg';
import nat3 from '../images/nat-3.jpg';

const Intro = () => {
  // workaround for the Apostrophe breaking syntax hightlight
  const text = "I'm a full-stack software engineer experienced with Javascript, HTML5, CSS3, React, Node.js, Express, MongoDB, MySQL, PostgreSQL, etc. and I always love to learn new technologies. I enjoy creating and collaborating with others making full stack applications.";

  return (
  <div className={styles.introContainer}>
    <div>
      <p className={styles.intro}>{text}</p>
    </div>


  </div>
)}

export default Intro;



    // <div className={styles.composition}>
    //   <img src={nat1} alt={'pic1'}
    //     className={`${styles.compositionPhoto} ${styles.compositionPhoto1}`}
    //   />
    //   <img src={nat2} alt={'pic2'}
    //      className = {
    //        `${styles.compositionPhoto} ${styles.compositionPhoto2}`
    //      }
    //   />
    //   <img src={nat3} alt={'pic3'}
    //     className = {
    //       `${styles.compositionPhoto} ${styles.compositionPhoto3}`
    //     }
    //   />

    // </div>