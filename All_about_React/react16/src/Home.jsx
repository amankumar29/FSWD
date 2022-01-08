import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/issue");
  };
  return (
    <>
    <Form/>
    {/* <div style={{ textAlign: "center", marginTop: "300px" }}>
      GitHUb Issue
      <Button onClick={handleClick}>Click here to see the issues</Button>
    </div> */}

    </>
  );
};

export default Home;
