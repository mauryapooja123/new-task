import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ModelForm from "../Form/ModelForm";
import TableData from "../Table/TableData";

export default function User() {
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [allData, setAllData] = useState();
  //const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post("http://localhost:4000/event", user);
  //   console.log(res, "lllll");
  //   handleClose();
  //   getData();
  //   setUser({});
  //   navigate("/table");
  // };
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/event");
    console.log(res.data, "pppppplllllllll");
    setAllData(res.data);
  };
  // const handleUpdate = async (data) => {
  //   setEdit(true);
  //   setShow(true);
  //   var result = user.find(function (e) {
  //     return e.id == data;
  //   });
  //   setUser(result);
  // };
  // const onEditData = async (event, id) => {
  //   event.preventDefault();
  //   const submit = await axios.put(`http://localhost:4000/event/${id}`, user);
  //   setUser(submit.data);
  //   setShow(false);
  // };
  const handleShow = () => {
    setShow(true);
    // setEdit(false);
  };

  const handleUpdate = (id) => {
    setShow(true);
  };

  const handleAdd = () => {
    setShow(true);
  };

  return (
    <>
      <TableData
        handleUpdate={handleUpdate}
        handleAdd={handleAdd}
        data={allData}
      />

      <ModelForm
        handleClose={handleClose}
        handleShow={handleShow}
        onShow={show}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
        user={user}
        // edit={edit}
        // onEditData={onEditData}
      />
    </>
  );
}
