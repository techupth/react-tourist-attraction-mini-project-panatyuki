import React, { useState, useEffect } from "react";
import axios from "axios";
import TravelInfo from "./travelInfo";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );

    setData(response.data.data);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [searchText]);

  return (
    <div>
      <h3>ค้นหาที่เที่ยว</h3>

      <div>
        <input
          style={{ textAlign: "center" }}
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          value={searchText}
        ></input>
      </div>

      {...data.map((item) => {
        return (
          <TravelInfo
            photos={item.photos}
            title={item.title}
            description={item.description}
            url={item.url}
            tag={item.tag}
          />
        );
      })}
    </div>
  );
};

export default Search;
