import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableData from "./TableData";

export default function TablePreant() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/event");
    console.log(res.data, "pppppplllllllll");
    setData(res.data);
  };
  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/event/${id}`);
    console.log(res.data, ";lllllllllllll");
    getData();
  };

  return (
    <div>
      <TableData handelDelete={handelDelete} data={data} />
    </div>
  );
}
