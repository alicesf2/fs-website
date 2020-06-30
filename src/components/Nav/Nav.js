import React, { useEffect, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const mobileThreshold = 1050;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const renderNormalMenu = () => {
    return (
      <div className="fs-nav">
        <Menu secondary size="large">
          <Menu.Item className="nav-text">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/coords">Our Coords</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/be-a-coord">Be a Coord!</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/calendar">Calendar</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/practice">Practice Videos</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/past-fs">Past Fashion Shows</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/practice">Our Sponsors</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  };

  const renderExpandedMenu = () => {};

  return width < mobileThreshold ? (
    <>
      <Icon
        name={expandedMenu ? "close" : "bars"}
        onClick={
          expandedMenu
            ? () => setExpandedMenu(false)
            : () => setExpandedMenu(true)
        }
      />
      {expandedMenu && renderExpandedMenu()}
    </>
  ) : (
    renderNormalMenu()
  );
}
