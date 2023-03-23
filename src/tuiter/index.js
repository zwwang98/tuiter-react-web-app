import React from "react";
import { Routes, Route } from "react-router";
import whoReducer from "./who-to-follow-list/who-reducer";
import tuitsPreducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import Profile from "./profile";
import EditProfile from "./edit-profile";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsPreducer,
    profile: profileReducer,
  },
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
            <Route index element={<HomeComponent />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
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
