import axios from "axios";
import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import { ethers } from "ethers";


const provider = new ethers.providers.Web3Provider((window as any).ethereum);
export const Collections = () => {
   const signer= provider.getSigner()
  const walletAddress ="0x9E0905eEdCEb26DBaBde0d72B86A4a88E323959a";
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        `https://testnet-api.rarible.org/v0.1/collections/byOwner?owner=ETHEREUM:${walletAddress}`
      )
      .then((res) => {
        console.log(res.data?.collections)
        setData(res.data?.collections);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((collection: any) => {
            return (
              <div className="col-md-3">
                <CollectionCard data={collection} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
