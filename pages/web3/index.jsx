import React, { useState, useEffect } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ButtonWrapper } from "src/component/buttons";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { providers } from "ethers";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
};

let web3modal;
if (typeof window !== "undefined") {
  web3modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });
}

const Web3Page = () => {
  const [data, setData] = useState("");

  const walletConnection = async () => {
    const provider = await web3modal.connect();

    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();

    setData(signer);

    // const web3 = new Web3(web3Provider)
  };

  // Disconnect to the metamask
  const disconnect = async () => {
    const clear = await web3modal.clearCachedProvider();
    setData("");
  };

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3modal.cachedProvider) {
      walletConnection();
    }
  }, []);

  return (
    <div
      style={{ height: "75vh" }}
      className="container d-flex justify-content-center flex-column align-items-center p-5 text-center "
    >
      <h1 className="mb-5">Welcome to Web3 </h1>

      <div>
        <h5>
          Connection Status:{" "}
          {data?._isSigner ? (
            <AiFillCheckCircle color="green" />
          ) : (
            <AiFillExclamationCircle color="#E84C88" />
          )}{" "}
        </h5>
        <h5>Account: {data ? data?.provider?._network.ensAddress : "No Account"} </h5>
      </div>

      <ButtonWrapper
        className="mt-5"
        backgroundColor="#1d8ece"
        style={{ width: 250 }}
        onClick={() => {
          if (data?._isSigner) {
            disconnect();
          } else {
            walletConnection();
          }
        }}
      >
        {data?._isSigner ? "Disconnect Wallet" : "Connect Wallet"}
      </ButtonWrapper>
    </div>
  );
};

export default Web3Page;
