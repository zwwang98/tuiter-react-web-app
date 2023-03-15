import React from "react";
import {
  faLocationDot,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  console.log("[Profile Component]", profile);

  return (
    <>
      <h1>Proifle Component</h1>
      {/* banner */}
      <img className="w-100" src="/images/fluentcpp.jpeg" alt="fluentcpp" />
      {/* avatar, more, follow button */}
      <div className="d-flex justify-content-between">
        <div style={{ position: "relative" }}>
          <img
            width={160}
            height={160}
            className="rounded-circle border border-5 border-dark ms-3"
            style={{ position: "absolute", bottom: "1px" }}
            src={`/images/${profile.profilePicture}`}
            alt="profile"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center pb-4">
          <Link
            className="btn btn-light mt-2 border border-2 border-dark-subtle rounded-pill"
            to="/tuiter/edit-profile"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      {/* username and handle */}
      <div>
        <div className="fs-3 fw-bold mb-0">
          {profile.firstName} {profile.lastName}
        </div>
        <div className="mt-0 pt-0">{profile.handle}</div>
      </div>
      {/* bio */}
      <div className="mt-3">{profile.bio}</div>
      {/* locatoin, website, joined date */}
      <div className="d-flex mt-2">
        <div className="me-3">
          <FontAwesomeIcon icon={faLocationDot} />
          <span> {profile.location}</span>
        </div>
        <div className="me-3">
          <FontAwesomeIcon icon={faCakeCandles} />
          <span> Born {profile.dateOfBirth}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span> Joined {profile.dateJoined}</span>
        </div>
      </div>
      {/* following and followers */}
      <div className="d-flex mt-2">
        <div className="me-3">{profile.followingCount} Following </div>
        <div>{profile.followersCount} Followers</div>
      </div>
    </>
  );
};

export default Profile;
