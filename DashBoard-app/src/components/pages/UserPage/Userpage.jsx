import React from "react";
import "./userpage.css";
import { profile } from "../../../assets/img/profile.jpg";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Userpage() {
  return (
    <div className="userPageWrapper">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={require("../../../assets/img/profile.jpg")}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">software Engineer</span>
            </div>
          </div>
          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Anna99</span>
            </div>
            <span className="userShowTitle">Birth</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 78</span>
            </div>
            <span className="userShowTitle">Email</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck@gmail.com</span>
            </div>
            <span className="userShowTitle">Location</span>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New Your | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="serUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="title">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="title">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="title">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="annabeck@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="title">Phone</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="+1 123 456 78"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="title">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="New Your | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="userUpdateRight">
          <div className="profile">
            <img
              src={require("../../../assets/img/profile.jpg")}
              alt=""
              className="userUpdateImg"
            />
            <label htmlFor="file">
              <Publish className="updateImgIcon" />
            </label>
            <input type="file" name="" id="file" style={{ display: "none" }} />
          </div>
          <button className="userUpdateButton">Update</button>
        </div>
      </div>
    </div>
  );
}
