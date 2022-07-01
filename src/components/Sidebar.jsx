import React from 'react';
import { PersonFill, HouseDoorFill } from 'react-bootstrap-icons';
import '@/assets/scss/layout/_sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar position-fixed">
      <div className="logo position-relative">
        <p className="text-center mb-0">MangoCoders</p>
      </div>
      <div className="sidelinks-wrapper">
        <ul className="list-unstyled p-0">
          <li>
            <NavLink
              to="/users"
              activeClassName="active"
              className="d-flex flex-wrap align-items-center"
            >
              <PersonFill className="position-relative" />
              <p className="mb-0">Admin Users</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              className="d-flex flex-wrap align-items-center"
            >
              <HouseDoorFill className="position-relative" />
              <p className="mb-0">Home</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
