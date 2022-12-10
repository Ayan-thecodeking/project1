import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Navbar/NavBar';
import Body from './Body/Body';
import "./style.css"
import SideNav from './SideNav/SideNav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <div className="top_menu">
      Medical Darpan &#62; Search &#62; <span className="bold">Paracetamol Tablet</span>
    </div>
    <div className="header">
      <div className="title">
      <span>
      Paracetamol 
        </span> 
      128 products 

      </div>
      <div className="filter">
        <div className="box">500 mg <span>x</span> </div>
        <div className="box">500 mg <span>x</span> </div>
        <div className="remove">remove all</div>
      </div>
    </div>
    <div className="body_container_main">
      <div className="side_bar_container">
      <SideNav/>
      

      </div>
      <div className="main_body_container">
      <Body/>
      </div>
    </div>


  </React.StrictMode>
);

