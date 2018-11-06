import React from "react";

import "./SideBar.css";

const Sidebar = () => (
  <div className="Sidebar">
    <h1 className="Sidebar__tilte">FINPAL</h1>
    <ul className="Sidebar__menu">
      <li>
        <a href="#" title="Overview">
          Overview
        </a>
      </li>
      <li>
        <a href="#" title="Transactions">
          Transactions
        </a>
      </li>
      <li className="Sidebar__menu--line"></li>
      <li>
        <a href="#" title="Transfers">
          Transfers
        </a>
      </li>
      <li>
        <a href="#" title="Invoices">
          Invoices
        </a>
      </li>
      <li className="Sidebar__menu--line"></li>
      <li>
        <a href="#" title="Manage cards">
          Manage cards
        </a>
      </li>
      <li>
        <a href="#" title="Manage account">
          Manage account
        </a>
      </li>
      <li className="Sidebar__menu--line"></li>
      <li>
        <a href="#" title="Team">
          Team
        </a>
      </li>
      <li>
        <a href="#" title="Intergration">
          Intergration
        </a>
      </li>
      <li>
        <a href="#" title="Settings">
          Settings
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
