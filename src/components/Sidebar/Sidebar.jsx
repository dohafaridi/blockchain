import React from "react";

import { Link } from "react-router-dom";

import "./SideBar.css";

const Sidebar = () => (
  <div className="Sidebar">
    <ul className="Sidebar__menu">
      <li>
        <Link to="/" title="Overview">Overview</Link>
      </li>
      <li>
        <Link to="transactions" href="#" title="Transactions">
          Transactions
        </Link>
      </li>
      <li to="/" className="Sidebar__menu--line" />
      <li>
        <Link to="/" title="Transfers">Transfers</Link>
      </li>
      <li>
        <Link to="/" title="Invoices">Invoices</Link>
      </li>
      <li className="Sidebar__menu--line" />
      <li>
        <Link to="/" title="Manage cards">Manage cards</Link>
      </li>
      <li>
        <Link to="/" title="Manage account">Manage account</Link>
      </li>
      <li to="/" className="Sidebar__menu--line" />
      <li>
        <Link to="/" title="Team">Team</Link>
      </li>
      <li>
        <Link to="/" title="Intergration">Intergration</Link>
      </li>
      <li>
        <Link to="/" title="Settings">Settings</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
