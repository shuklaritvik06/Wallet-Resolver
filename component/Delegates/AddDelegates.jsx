import React from "react";

function AddDelegates() {
  return (
    <>
      <h2> Add Delegates</h2>
      <div className="form-adel">
        <form>
          <label>First Delegate</label>
          <input className="input-adel" type="text" name="FirstDel" />
          <label>Second Delegate</label>
          <input className="input-adel" type="text" name="SecondDel" />
          <label>Third Delegate</label>
          <input className="input-adel" type="text" name="ThirdDel" />
          <label>Fourth Delegate</label>
          <input className="input-adel" type="text" name="FourthDel" />
        </form>
      </div>
    </>
  );
}

export default AddDelegates;
