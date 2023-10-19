import { callRegistry }  from "./registry.js"

import { ethers } from 'ethers'


const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/")

const call = async () => {
    const result = await callRegistry(
      // method Name
        "walletStatusOldToNew",
      // args in array [arg1, arg2, ...]
        ["0x6B2eBFe3FE5c5B84746105421de93Df383b222E8"],
      // provider or signer
        provider
    )
    console.log(result)
}

call()