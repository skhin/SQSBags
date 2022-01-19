import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Button, Alert, Modal } from "@mui/material";
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

  const [alert, setAlert] = useState(false);
  const deleteProfile = (e) => {
    e.preventDefault();
    setAlert(true);
  };
  const confirmDelete = (e) => {
    e.preventDefault();
    console.log("LEGIT DELETE");
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
            <td className="detail">
              {user.address}
              <br />
              {user.country + user.postal}
            </td>
          </tr>
          <tr>
            <td className="info">Mobile: </td>
            <td className="detail">{user.phone}</td>
          </tr>
        </tbody>
      </table>
      <div className="options">
        <Button variant="outlined" onClick={editProfile}>
          Edit Profile
        </Button>
        <Button variant="outlined" onClick={deleteProfile}>
          Delete Account
        </Button>
        <Modal open={alert}>
          <Alert
            severity="error"
            action={
              <>
                <Button color="inherit" size="small" onClick={confirmDelete}>
                  Delete
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => setAlert(false)}
                >
                  Return
                </Button>
              </>
            }
          >
            Confirm account deletion? You will lose all your favourites, sad.
          </Alert>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
