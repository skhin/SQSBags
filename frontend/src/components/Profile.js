import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Button } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const editProfile = (e) => {
    e.preventDefault();
    const path = "/profile/edit";
    history.push(path);
  };
  
  return (
    <div>
      <h3>{user.name}'s Profile</h3>
      <table>
        <tbody>
          <tr>
            <td className="info">Name: </td>
            <td className="detail">{user.name}</td>
          </tr>
          <tr>
            <td className="info">Email: </td>
            <td className="detail">{user.email}</td>
          </tr>
          <tr>
            <td className="info">Address: </td>
            <td className="detail">{user.address}<br/>{user.country + user.postal}</td>
          </tr>
          <tr>
            <td className="info">Mobile: </td>
            <td className="detail">{user.phone}</td>
          </tr>
        </tbody>
      </table>
      <div className="options">
        <Button variant="outlined" onClick={editProfile}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Profile;
