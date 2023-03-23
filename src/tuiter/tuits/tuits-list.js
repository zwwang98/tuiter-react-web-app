import React, { useEffect } from "react";
import TuitItem from "./tuit-item.js";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks.js";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  console.log("[loading]", loading);
  console.log("[tuits]", tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit, index) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitsList;
