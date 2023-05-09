import axios from "axios";
import React, { useEffect, useState } from "react";
import NftCard from "./NftCard";

export const Nfts = () => {
  const walletAddress = "0xc398bc9182bf56fb709d5983bbf8303bdcfe058c";
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        `https://testnet-api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${walletAddress}`
      )
      .then((res) => {
        setData(res.data.items);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item: any) => {
            return (
              <div className="col-md-3">
                <NftCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
