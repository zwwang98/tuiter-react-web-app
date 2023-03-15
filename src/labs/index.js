import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Nav from "./a6/nav";
import { Routes, Route } from "react-router";
import TuitsList from "../tuiter/tuits/tuits-list";

function Labs() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Assignment6 />} />
        <Route path="a7" element={<Assignment7 />} />
      </Routes>
    </div>
  );
}
export default Labs;
