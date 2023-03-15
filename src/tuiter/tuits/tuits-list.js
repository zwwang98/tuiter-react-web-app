import React from "react";
import TuitItem from "./tuit-item.js";
import { useSelector, useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";

const TuitsList = () => {
  console.log("hello");
  const tuits = useSelector((state) => state.tuits);
  console.log("TuitsList:", tuits);
  return (
    <>
      <ul>
        {tuits.map((tuit, index) => (
          <TuitItem tuit={tuit} />
        ))}
      </ul>
    </>
  );
};

export default TuitsList;
