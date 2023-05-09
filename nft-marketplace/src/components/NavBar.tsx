import { useEffect, useState } from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider((window as any).ethereum);

export const NavBar = () => {
  const [isConnect,setConnect]=useState(false)
  const walletConnectHandler = async () => {
    try {
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      setConnect(true)
      console.log("Connected to MetaMask!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MarketPlace
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/collections">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nfts">
                  Nft's
                </a>
              </li>
            </ul>

            <button
              className="btn btn-outline-primary"
              type="submit"
              onClick={walletConnectHandler}
            >
              {isConnect ? "Connected" : "Connect wallet"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
