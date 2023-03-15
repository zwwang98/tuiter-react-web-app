import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit }) => {
  return (
    <>
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
    </>
  );
};

export default TuitStats;
