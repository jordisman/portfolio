import React from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import styles from './styles.module.css';


const App = () => {
  return (
    <div className={styles.background}>
      <Header/>
      <Intro/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
