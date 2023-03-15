import React from "react";
import { Routes, Route } from "react-router";
import whoReducer from "./who-to-follow-list/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import TuitsList from "./tuits/tuits-list";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: "relative" }}
        >
          {/* <TuitsList /> */}
          <Routes>
            <Route index element={<TuitsList />} />
            <Route path="explore" element={<ExploreComponent />} />
          </Routes>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
