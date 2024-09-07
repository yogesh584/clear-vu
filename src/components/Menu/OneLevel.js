import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.module.css"
import { CircleIcon, MenuBulletRadio } from "../../util/Svg";

const OneLevelMenu = ({ menu, pathname }) => {
  const [active, setActive] = useState(false);

  const { name, Svg, subMenu, highlight, subHighlight } = menu;

  const paths = subMenu.map((sub) => sub.path);

  useEffect(() => {
    if (
      paths.includes(pathname) ||
      paths.includes("/" + pathname.split("/")[1]) ||
      highlight.includes(pathname) ||
      subHighlight.includes(pathname.split("/").slice(0, 3).join("/"))
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname]);

  return (
    <li
      id={`collapse-menu-main ${name}-toggle-7`}
      className={`menu-item menu-item-submenu ${active ? "menu-item-open" : ""
        } `}
      data-menu-toggle="hover"
      onClick={() => setActive((prev) => !prev)}
    >
      <div className={`menu-link`} style={{ margin: "9px 15px", padding: "0px 25px", borderRadius: "10px" }}>
        <a className={`${styles.sidebar_link} menu-toggle`}>
          <span className="svg-icon menu-icon">
            <Svg />
          </span>
          <span className={`menu-text ${styles.sidebar_span_link}`}>{name}</span>
          <i className={`menu-arrow ${active ? styles.active_sidebar_arrow : ""}`}></i>
        </a>
      </div>
      <div className="menu-submenu">
        <i className="menu-arrow"></i>
        <ul className="menu-subnav">
          <li className="menu-item menu-item-parent">
            <span className="menu-link">
              <span className={`menu-text ${styles.sidebar_span_link}`}>{name}</span>
            </span>
          </li>
          {subMenu.map((menu, index) => {
            const isActive = (menu.path == pathname ||
              menu.highlight.includes(pathname) ||
              menu.subHighlight.includes(
                pathname.split("/").slice(0, 3).join("/")
              ))
            return <li
              key={index}
              className={`menu-item ${isActive &&
                "menu-item-open"
                }`}
            >
              <div className={`menu-link`} style={{ margin: "9px 15px", padding: "0px 25px", paddingLeft: "40px", borderRadius: "10px" }}>
                <Link to={menu.path} className={`${styles.sidebar_link} `} style={{ alignItems: "center", gap: "10px" }}>
                  {isActive ? <MenuBulletRadio svgStyle={{ height: "13px", width: "13px" }} customClass={styles.sidebar_svg_style} /> : <CircleIcon svgStyle={{ height: "12px", width: "12px" }} />}
                  <span className={`menu-text ${styles.sidebar_span_link}`}>{menu.name}</span>
                </Link>
              </div>
            </li>
          })}
        </ul>
      </div>
    </li>
  );
};

export default OneLevelMenu;
