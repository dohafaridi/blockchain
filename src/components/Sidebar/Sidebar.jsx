import React from "react";

import "./SideBar.css";

const Sidebar = () => (
  <div className="Sidebar">
    <ul className="Sidebar__menu">
      <li>
        <a title="Overview">Overview</a>
      </li>
      <li>
        <a href="#" title="Transactions">
          Transactions
        </a>
      </li>
      <li className="Sidebar__menu--line" />
      <li>
        <a title="Transfers">Transfers</a>
      </li>
      <li>
        <a title="Invoices">Invoices</a>
      </li>
      <li className="Sidebar__menu--line" />
      <li>
        <a title="Manage cards">Manage cards</a>
      </li>
      <li>
        <a title="Manage account">Manage account</a>
      </li>
      <li className="Sidebar__menu--line" />
      <li>
        <a title="Team">Team</a>
      </li>
      <li>
        <a title="Intergration">Intergration</a>
      </li>
      <li>
        <a title="Settings">Settings</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
