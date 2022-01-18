import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.user);
  //   const getUser = await axios.get("/find/")
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
            <td className="detail">{user.address}</td>
          </tr>
          <tr>
            <td className="info">Mobile: </td>
            <td className="detail">{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
