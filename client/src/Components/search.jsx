import React, { useState, useEffect } from "react";
import axios from "axios";
import TravelInfo from "./travelInfo";

const Search = () => {
  // useState ตัวที่ 1 สำหรับเก็บข้อความ (ข้อมูล) ในช่องค้นหา
  // ต้องใส่ "" ไปใน useState เพราะข้อมูลที่ผู้ใช้งานกรอกลงมาเป็น string
  const [searchText, setSearchText] = useState("");

  // useState ตัวที่ 2 สำหรับเอาไว้ใช้กับขั้นตอน useEffect
  // ต้องใส่ [] เข้าไปใน useState
  const [data, setData] = useState([]);

  // ดึงข้อมูล (get) จาก Server
  const getData = async () => {
    let response = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    // ต้องมี console.log ดู response.data.data ด้วยว่าข้อมูลขึ้นไหม
    // console.log ดูเสร็จแล้วควรลบออก
    setData(response.data.data);
  };

  // เขียน Arrow function แล้ว execute getData()
  useEffect(() => {
    getData();
    return () => {};
  }, [searchText]);

  return (
    <div>
      <h3 style={{ textAlign: "left" }}>ค้นหาที่เที่ยว</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            textAlign: "center",
            padding: "20px",
            height: "30px",
            width: "500px",
            fontSize: "20px",
            border: "none",
            outline: "none",
          }}
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          value={searchText}
        ></input>
      </div>

      <hr></hr>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
    </div>
  );
};

export default Search;
