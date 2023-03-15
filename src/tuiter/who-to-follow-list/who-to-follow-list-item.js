import React from "react";

const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img
              className="m-2 rounded-circle"
              height={48}
              width={48}
              // 路径是public下的路径？
              src={`/images/${who.avatarIcon}`}
              alt=""
            />
          </div>
          <div className="col-7">
            <div className="fs-6 fw-bold">{who.userName}</div>
            <a href="#" className="fs-6 text-decoration-none text-muted">
              {who.handle}
            </a>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <button className="btn btn-primary text-white rounded-pill">
              Follow
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default WhoToFollowListItem;
