import React from "react";

const Card = ({ category, description, current }) => {
  const colours = ["wheat", "pink", "skyblue", "grey", "yellow", "lightgreen"];
  
  return (
    <>
    <div className="row align-items-center ">
    <div
        style={{ backgroundColor: colours[current % 6],marginLeft:" auto",
        marginRight:" auto",
        marginTop:"0.5rem",
        width: "30em" }}
        class="card text-white mb-3 "
        
      >
       
        <div class="card-header">#{category} </div>
        <div class="card-body">
          
          
          <p class="card-text">{description}</p>
        </div>
      </div></div>
      
    </>
  );
};
export default Card;