import React from "react";
import "../App.css";
import github from '../assets/github.png'
const Home = () => {
  const githubURl = "https://github.com/sanchezdamianj";
  return (
    <>
      <a href={githubURl} id='copyright' >
        <span> Creado por sanchezdamianj </span>
        <img src={github} alt='github dev' style={{height: '16px', marginLeft: '10px'}}/>
        
      </a>
    </>
  );
};

export default Home;
