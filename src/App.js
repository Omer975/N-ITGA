import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <img
          src="https://i.postimg.cc/VvGFD5GJ/indir-1.jpg"
          alt="image"
          className="box-img"
        />
        <h1>Nordic</h1>
        <h2>IT Garage Academy </h2>
        <p>Programming - Web Development - Designing - Robotics - Bootcamps - Project Development
          
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/Nordic-It-Garage-Akademi-104895461128832/" target="_blank">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GarageNordic" target="_blank">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/it_garage_academy/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://itgamain.netlify.com/" target="_blank">
              <i className="fas fa-link" />
            </a>
          </li>
          <li>
            <a href="" target="">
              <i className="fab fa-github-square" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
