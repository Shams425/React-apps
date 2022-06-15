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
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <Link className="sideBarLink" to="/">
              <li className="sideBarItem active">
                <House className="sideBarIcon" />
                <p>Home</p>
              </li>
            </Link>
            <li className="sideBarItem" disable="true">
              <Analytics className="sideBarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sideBarItem" disable="true">
              <TrendingUp className="sideBarIcon" />
              <p>Sales</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link className="sideBarLink" to="/users">
              <li className="sideBarItem">
                <Person className="sideBarIcon" />
                <p>Users</p>
              </li>
            </Link>
            <Link className="sideBarLink" to="/products">
              <li className="sideBarItem">
                <Store className="sideBarIcon" />
                <p>Products</p>
              </li>
            </Link>
            <li className="sideBarItem" disable="true">
              <Money className="sideBarIcon" />
              <p>Transactions</p>
            </li>
            <li className="sideBarItem" disable="true">
              <Report className="sideBarIcon" />
              <p>Reports</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarItem" disable="true">
              <Mail className="sideBarIcon" />
              <p>Mail</p>
            </li>
            <li className="sideBarItem" disable="true">
              <Feedback className="sideBarIcon" />
              <p>FeedBack</p>
            </li>
            <li className="sideBarItem" disable="true">
              <Message className="sideBarIcon" />
              <p>Messages</p>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarItem" disable="true">
              <ManageAccounts className="sideBarIcon" />
              <p>Mange</p>
            </li>
            <li className="sideBarItem" disable="true">
              <Analytics className="sideBarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sideBarItem" disable="true">
              <Report className="sideBarIcon" />
              <p>Reports</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
