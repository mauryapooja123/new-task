import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModelForm from "./ModelForm";

export default function Edit() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    getEditData();
  }, []);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getEditData = async () => {
    await axios.get(`http://localhost:4000/event/${id}`).then((res) => {
      setUser(res.data);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/event/${id}`, user).then((res) => {
      setUser(res);
      navigate("/table");
    });
  };
  const handleUpdate = async (data) => {
    setEdit(true);
    setShow(true);

    var result = user.find(function (e) {
      return e.id == data;
    });

    setUser(result);
    console.log(result);
  };
  //console.log(valuef, "kkkkkkkk");
  const onEditData = async (event, id) => {
    event.preventDefault();
    const submit = await axios.put(`http://localhost:4000/event/${id}`, user);
    setUser(submit.data);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setEdit(false);
  };
  return (
    <>
      <ModelForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        edit={true}
        handleUpdate={handleUpdate}
        onEditData={onEditData}
      />
    </>
  );
}
