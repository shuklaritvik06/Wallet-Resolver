import React from "react";

function AddDelegates() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className="form-adel" style={{ marginRight:"60px"}}>
          <h2> Add Delegates</h2>
          <form style={{ marginTop: "20px" }} onSubmit={() => {}}>
            <label>First Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="FirstDel"
              required
            />
            <label>Second Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="SecondDel"
              required
            />
            <label>Third Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="ThirdDel"
              required
            />
            <label>Fourth Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="FourthDel"
              required
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        {/* <div style={{ marginBottom: "40px" }}></div> */}
        <div className="form-adel">
          <h2> Add New Address </h2>
          <form style={{ marginTop: "20px" }} onSubmit={() => {}}>
            <label>New Wallet Address</label>
            <input
              className="input-adel"
              placeholder="Enter New Wallet Address"
              type="text"
              name="newaddress"
              required
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddDelegates;
