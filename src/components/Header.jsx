
import React from "react";
//import '../styles/Header.scss';
import styles from '../assets2/css/Header.module.css';        // Две точки значит путь в предыдущей папке

//SCSS → удобство написания стилей.
//CSS Modules → защита классов от конфликтов.

 // <header className={styles.header}>

function Header() {
  return (
    <header className={`${styles.header} ${styles['extra-class']}`}>

   

      <h1 className="header-title">My Simple React App</h1>
      <nav className={styles.nav}>

        <a href="#home" className={styles.item}>Home</a>
        <a href="about" className={styles.item}>About</a>
        <a href="contact" className={styles.item}>Contact</a>

        <a href="#home" className={styles["nav-item"]}>Home</a>
       
      </nav>
      <button className={styles.card}>
        Sign Up
      </button>
    </header>
  )
};

export default Header;




//style={{ backgroundColor: '#4CAF50', padding: '10px', color: 'white', textAlign: 'center' }}


//<header className="header-container" >


//<a href="#home" style={{ margin: '0 10px', color: 'white' }}>Home</a>
// <a href="#about" style={{ margin: '0 10px', color: 'white' }}>About</a>
//<a href="#contact" style={{ margin: '0 10px', color: 'white' }}>Contact</a>