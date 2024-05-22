
import React from 'react'
import Minidrawer from './components/drawer';
import Styles from "../styles/Home.module.css";
import AddData from '../components/firebase/add-data';


function index() {
  return (
    <div className={Styles.background}>
      <div className={Styles.data_text}>
        <Minidrawer/>
       
      </div>
    </div>
  );
}

export default index