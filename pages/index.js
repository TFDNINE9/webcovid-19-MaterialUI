
import React from 'react'
import Minidrawer from './components/drawer';
import Styles from "../styles/Home.module.css";



function index() {
  return (
    <div className={Styles.background}>
      <div className={Styles.data_text}>
        <Minidrawer />
      </div>
    </div>
  );
}

export default index