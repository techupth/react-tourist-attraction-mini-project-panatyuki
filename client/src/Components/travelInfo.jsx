import React from "react";
import PropTypes from "prop-types";

const TravelInfo = ({ title, url, description, tag, photos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
        margin: "auto",
      }}
    >
      <img
        src={photos[0]}
        style={{
          width: "20%",
          borderRadius: "8px",
          marginRight: "32px",
        }}
      />
      <div>
        <h2
          onClick={() => {
            window.open(url);
          }}
        >
          {title}
        </h2>
        <div>{description?.slice(0, 100)}</div>
        {/* ใส่ target="_blank" เพื่อให้เปิด new tab */}
        <a href={url} target="_blank">
          อ่านต่อ
        </a>
        <div>{tag}</div>
      </div>
    </div>
  );
};

TravelInfo.propTypes = {
  description: PropTypes.string,
};

export default TravelInfo;
