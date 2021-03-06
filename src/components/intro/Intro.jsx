import React from "react";
import Boy from "../../img/pic-thinking-man.png";
import "./intro.css";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">John Burton</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Mobile Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Frontend Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in web developmenr
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Boy} alt="just a boy" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
