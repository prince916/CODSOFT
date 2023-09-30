import React from "react";

const Main = () => {
  return (
    <>
      <div className="mypic">
        <img className="myself" src="./images/Mypic3.png" alt="mypic" />

        <div className="textcontent">
          <h1>
            Hi there 
            I'm PRINCE <br />
            <span className="newtext">a Developer </span>
          </h1>
          <div className="Symbols">
            <img src="./images/engineer.png" alt="" />
            <img src="./images/app-development.png" alt="" />
          </div>
          <p>
            I should be hired for this role because of my relevant skills,
            experience, and passion for the industry. I’ve researched the
            company and can add value to its growth. My positive attitude, work
            ethics, and long-term goals align with the job requirements, making
            me a committed and valuable asset to the company.
          </p>
          <button>Download Resume</button>
        </div>
      </div>
    </>
  );
};

export default Main;
