import React from "react";
import "./sideBar.css";
import {
  House,
  Analytics,
  TrendingUp,
  Person,
  Store,
  Money,
  Report,
  Mail,
  Feedback,
  Message,
  ManageAccounts,
} from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <li className="sideBarItem active">
              <House className="sideBarIcon" />
              <p>Home</p>
            </li>
            <li className="sideBarItem">
              <Analytics className="sideBarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sideBarItem">
              <TrendingUp className="sideBarIcon" />
              <p>Sales</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarItem">
              <Person className="sideBarIcon" />
              <p>Users</p>
            </li>
            <li className="sideBarItem">
              <Store className="sideBarIcon" />
              <p>Products</p>
            </li>
            <li className="sideBarItem">
              <Money className="sideBarIcon" />
              <p>Transactions</p>
            </li>
            <li className="sideBarItem">
              <Report className="sideBarIcon" />
              <p>Reports</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarItem">
              <Mail className="sideBarIcon" />
              <p>Mail</p>
            </li>
            <li className="sideBarItem">
              <Feedback className="sideBarIcon" />
              <p>FeedBack</p>
            </li>
            <li className="sideBarItem">
              <Message className="sideBarIcon" />
              <p>Messages</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarItem">
              <ManageAccounts className="sideBarIcon" />
              <p>Mange</p>
            </li>
            <li className="sideBarItem">
              <Analytics className="sideBarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sideBarItem">
              <Report className="sideBarIcon" />
              <p>Reports</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
