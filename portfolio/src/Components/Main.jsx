import React from "react";

const Main = () => {
  return (
    <>
      <div className="mypic">
        <img className="myself" src="./images/Myself.png" alt="mypic" />

        <div className="textcontent">
          <h1>
            Hii... <br /> I am PRINCE KUMAR SHRAMA
          </h1>
          <div className="Symbols">
            <img src="./images/engineer.png" alt="" />
            <img src="./images/app-development.png" alt="" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            impedit laboriosam quaerat necessitatibus, voluptatum aspernatur
            fuga, voluptas rem aliquam dolorum eaque quas quis. Quisquam illum
            necessitatibus molestias voluptate veniam dolorem!
          </p>
          <button>Download Resume</button>
        </div>
      </div>
      
    </>
  );
};

export default Main;
