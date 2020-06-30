import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Icon } from "semantic-ui-react";
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
          <Menu.Item>
            <img src={require("../../assets/logos/aaa-logo.png")} />
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website">Home</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website/about">About</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Dropdown text="Coords">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/fs-website/our-coords">Our Coords</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/fs-website/be-a-coord">Be a Coord!</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website/calendar">Calendar</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website/practice">Practice Videos</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website/past-fs">Past Fashion Shows</Link>
          </Menu.Item>
          <Menu.Item className="nav-text">
            <Link to="/fs-website/sponsors">Our Sponsors</Link>
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
