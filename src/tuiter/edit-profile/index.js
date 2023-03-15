import React, { useState } from "react";
import {
  faLocationDot,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatDate from "../../utils/format-date";
import { useDispatch, useSelector } from "react-redux";
import {
  editName,
  editBio,
  editLocation,
  editWebsite,
} from "../profile/profile-reducer";
import { Link } from "react-router-dom";
import splitName from "../../utils/split-name";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  console.log("[EditProfile]", profile);

  const [name, setName] = useState(profile.firstName + " " + profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);

  const dispatch = useDispatch();

  const onClickSaveButton = () => {
    console.log("save");
    const { firstName, lastName } = splitName(name);
    dispatch(editName({ firstName, lastName }));
    dispatch(editBio(bio));
    dispatch(editLocation(location));
    dispatch(editWebsite(website));
  };

  const deleteTodoClickHandler = () => {};

  return (
    <>
      <div className="d-flex justify-content-between p-2">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/tuiter/profile" className="bi bi-x-lg float-end me-5" />
          <div className="fs-4 fw-semibold">Edit Profile</div>
        </div>
        {/* <a href="/tuiter/profile"> */}
        <Link
          className="btn btn-dark rounded-pill ps-3 pe-3 fs-6 fw-semibold d-flex justify-content-center align-items-center"
          to="/tuiter/profile"
          onClick={() => onClickSaveButton()}
        >
          <div>Save</div>
        </Link>
        {/* </a> */}
      </div>

      <div
        style={{ position: "relative", height: "300px", overflow: "hidden" }}
      >
        <img
          src={"/images/fluentcpp.jpeg"}
          alt="Profile Banner"
          className="w-100"
        />
        <div
          style={{
            position: "absolute",
            top: "210px",
            left: "15%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            overflow: "hidden",
            width: 128,
            height: 128,
          }}
        >
          <img
            src={`/images/${profile.profilePicture}`}
            alt="Profile Avatar"
            width={128}
            height={128}
            style={{
              zIndex: -1,
            }}
          />
        </div>
      </div>

      {/* name */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Ziwei Wang"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label for="name">Name</label>
      </div>
      {/* bio */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control flex-wrap"
          id="bio"
          placeholder="Introduce yourself here!"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <label for="bio">Bio</label>
      </div>
      {/* location */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="location"
          placeholder="Seattle, WA"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label for="location">Location</label>
      </div>
      {/* website */}
      <div className="form-floating  mb-3">
        <input
          type="text"
          className="form-control flex-wrap"
          id="website"
          placeholder="Introduce yourself here!"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
        <label for="website">Website</label>
      </div>
      {/* birth date */}
      <div>
        <div>
          <span>Birth Date </span>
          <span>
            <a href="" className="text-decoration-none">
              Edit
            </a>
          </span>
        </div>
        <div>{formatDate(profile.dateOfBirth)}</div>
      </div>
    </>
  );
};

export default EditProfile;
