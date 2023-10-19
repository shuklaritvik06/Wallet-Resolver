import React, { useState } from "react";
import { ethers } from "ethers";
import { ResolverContract } from "../../utils/registry";
import { callRegistry } from "../../utils/registry";

function AddDelegates() {
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://polygon-mumbai.g.alchemy.com/v2/cNZhkVFPVIileSpGtOeahsFjCFU5sn_h"
  // );

  const [firstDel, setFirstDel] = useState("");
  const [secondDel, setSecondDel] = useState("");
  const [thirdDel, setThirdDel] = useState("");
  const [fourthDel, setFourthDel] = useState("");

  const [newAddress, setNewAddress] = useState("");

  const handleAddDelegate = async (e) => {
    e.preventDefault();

    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://rpc-mumbai.maticvigil.com/"
    // );

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
    console.log("signer", signer);
    // Get the address of the provider
    const providerAddress = await provider.getSigner().getAddress();
    // const signer = provider.getSigner();
    // const address = signer.getAddress();

    console.log("address", providerAddress);
    const delegates = ethers.utils.solidityPack(
      ["address", "address", "address", "address"],
      [firstDel, secondDel, thirdDel, fourthDel]
    );
    await callRegistry(
      "createNewRegistry",
      [providerAddress, delegates],
      signer
    );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className="form-adel" style={{ marginRight: "60px" }}>
          <h2> Add Delegates</h2>
          <form style={{ marginTop: "20px" }} onSubmit={handleAddDelegate}>
            <label>First Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="FirstDel"
              value={firstDel}
              onChange={(e) => setFirstDel(e.target.value)}
              required
            />
            <label>Second Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="SecondDel"
              value={secondDel}
              onChange={(e) => setSecondDel(e.target.value)}
              required
            />
            <label>Third Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="ThirdDel"
              value={thirdDel}
              onChange={(e) => setThirdDel(e.target.value)}
              required
            />
            <label>Fourth Delegate</label>
            <input
              className="input-adel"
              placeholder="Enter the wallet address"
              type="text"
              name="FourthDel"
              value={fourthDel}
              onChange={(e) => setFourthDel(e.target.value)}
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
              name="newAddress"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
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
