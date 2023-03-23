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
} from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../../services/tuits-thunks.js";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

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
            <FontAwesomeIcon
              color="red"
              icon={solidHeart}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked: false,
                  })
                )
              }
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true,
                  })
                )
              }
            />
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
