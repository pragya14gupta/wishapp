import React, { useState } from "react";
import axios from "axios";



const Form = () => {
  const [type, settype] = useState("");
  const [category, setcategory] = useState("");
  const [headline, setheadline] = useState("");
  const [description, setdescription] = useState("");

  // to store what is written in input boxes we use two attributes
  //1. value={state}
  //2. onChange=(e)=>setstate(e.target.value)}

  const handlesubmit = async () => {
    try {
      const response = await axios.post("/api/save", {
        type,
        category,
        headline,
        description,
      });

      if (response.data.success) {
        alert("Content successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong..");
    }
  };

  return (
    <>
    <div class="card flex-container" style={{
      marginLeft:" auto",
      marginRight:" auto",
      marginTop:"5rem",
      width: "50em"
    }}>
  <div class="card-body ">
  
  <form className="d-block p-2  text-info fontWeight-bold" style={{
    boxSizing: "border-box",

  }}>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Content type</label>
    <select
      value={type}
      onChange={(e) => settype(e.target.value)}
      class="form-control"
      id="exampleFormControlSelect1"
    >
      <option value=""> Wishlist </option>
      <option value="news"> Favourits </option>
      <option value="jokes">Notes</option>
      <option value="quotes">Important</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Category</label>
    <input
      value={category}
      onChange={(e) => setcategory(e.target.value)}
      type="email"
      class="form-control"
      placeholder="Enter category"
    />
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <textarea
      value={description}
      onChange={(e) => setdescription(e.target.value)}
      type="text"
      class="form-control"
      placeholder="Enter description"
    />
  </div>
  
  <button
    onClick={() => handlesubmit()}
    type="button"
    class="btn mt-2 btn-warning text-center"
  >
    Submit
  </button>
</form>

  </div>
</div>
    <div class="container-fluid">
    
</div>
      
    </>
  );
};

export default Form;