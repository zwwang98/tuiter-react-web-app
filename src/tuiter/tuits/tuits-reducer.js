import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
});

console.log("Print tuits array:");
console.log(tuits);

export default tuitsSlice.reducer;
