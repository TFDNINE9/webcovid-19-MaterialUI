import React from 'react'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "../../Firebase/config"
import { async } from '@firebase/util';
function AddData(){
    setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });

    
  return (
    <div>
      <button onClick={setDoc}>hello</button>
    </div>
  );
}

export default AddData