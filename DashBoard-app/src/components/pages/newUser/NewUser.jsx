import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">UserName</label>
          <input type="text" name="" id="" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" name="" id="" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="jhon@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" name="" id="" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" name="" id="" placeholder="John Smith" />
        </div>
        <div className="newUserItem Gender">
          <p>Gender</p>
          <div className="male">
            <input
              type="radio"
              name="gender"
              id="female"
              value="male"
              checked
            />
            <label htmlFor="male">male</label>
          </div>
          <div className="female">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="female">female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="Active">Active</label>
          <select name="active" id="active" className="newStatus">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addButton">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
