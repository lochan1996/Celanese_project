import React, { useState, useEffect } from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer/Footer";
import Table from "./ResponsiveTable/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
