import axios from "axios";
import { useState } from "react";

const CollectionCard = (props: any) => {
  const { data } = props;

 
  return (
    <>
      <div className="card mt-4" style={{ width: "18rem" }}>
        <img src={data.meta?.content[0]?.url || "https://ipfs.io/ipfs/bafybeicx27scgnmtxtmu6uz6spwpbvixh75ximfmotfnveifelwkwcsnbm/image.png"} className="card-img-top" alt="..." height={250} width={250} />
        <div className="card-body">
          <h5 className="card-title">{data.meta?.name?.length>20? data.meta?.name?.substring(0,20)+"..." :data.meta?.name  ?? "Untitled"}</h5>
          <p className="card-text">
           {data?.meta?.description?.length>24? data?.meta?.description?.substring(0,25)+"...": data?.meta?.description? data?.meta?.description: 'No description'}
          </p>
          <a href="#" className="btn btn-primary">
            Explore...
          </a>
        </div>
      </div>
    </>
  );
};
export default CollectionCard;
