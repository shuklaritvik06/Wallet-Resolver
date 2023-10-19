import React from "react";
import AddDelegates from "../Delegates/AddDelegates";

const Homepage = () => {
  return (
    <>
      <button
        onClick={() => {
          alert("Hi");
        }}
        style={{ fontSize: 15, width: 100 }}
        class="primary-btn"
      >
        Register
      </button>

      <AddDelegates/>
    </>
  );
};

export default Homepage;
