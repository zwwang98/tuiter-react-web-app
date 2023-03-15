import React from "react";
import { useDispatch } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart as regularHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowUpFromBracket,
  faRetweet,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <>
      {/* tuit */}
      <div className="card text-black rounded-0 bg-white border-1 border-secondary w-100">
        <div className="card-body">
          <div className="d-flex justify-content-start">
            <img
              src={`/images/${tuit.image}`}
              alt=""
              width="48px"
              height="48px"
              className="me-2 rounded-circle"
            />
            <div className=" flex-grow-1">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <h6 className="card-title me-1">{tuit.userName}</h6>
                  <FontAwesomeIcon icon={faCircleCheck} color="blue" />
                  <div className="text-dark">{tuit.handle}</div>
                  <div className="text-dark">- {tuit.time}</div>
                </div>
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}
                ></i>
              </div>
              <p className="card-text">
                {tuit.tuit}
                {tuit.hastuitLink
                  ? `<a href={tuit.tuitLink} className="text-decoration-none">{tuit.tuitLink}</a>`
                  : ""}
              </p>
              {/* tuit Stats */}
              <div className="row text-dark">
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faComment} />
                  <span>{tuit.replies}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faRetweet} />
                  <span>{tuit.retuits}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  {tuit.liked ? (
                    <FontAwesomeIcon color="red" icon={solidHeart} />
                  ) : (
                    <FontAwesomeIcon icon={regularHeart} />
                  )}
                  <span>{tuit.likes}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TuitItem;
