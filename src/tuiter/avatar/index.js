import React from "react";

const Avatar = (src) => {
  return (
    <>
      <image
        src={src}
        alt="avatar image"
        className="rounded-circle"
        width={48}
        height={48}
      ></image>
    </>
  );
};

export default Avatar;
