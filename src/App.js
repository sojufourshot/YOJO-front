import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState,Component } from 'react';

import {Item} from "./pages/grid/Items"
import axios from 'axios';



function App() {

  const [items, setItems]=useState([]);

  useEffect(()=>{
    axios.get("data/images.json").then((data) =>{
      setItems(data.data.position)
    })

  },[setItems])

  
  
  return (


    <div>


      <div className="header">
        Title Bar
      </div>


    <div className='main_content_background'>

      <div className="main_content">

        {items.map((item)=>{
          return(
            <Item
            key={`key-${item.id}`}
            item={item}
            />
          );

        })}

        </div>

      </div>


      <footer className="footer">
        Footer
      </footer>

    </div>
    
  );
}

export default App;
