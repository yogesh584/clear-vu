import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.module.css"

const ZeroLevel = ({ menu, pathname }) => {
  const [active, setActive] = useState(false);

  const { name, Svg, path, highlight, subHighlight } = menu;

  const updateActive = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (
      path == pathname ||
      highlight.includes(pathname) ||
      subHighlight.includes(pathname.split("/").slice(0, 3).join("/"))
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname]);

  console.log("active : ",active)

  return (
    <li
      onClick={updateActive}
      className={`menu-item ${active ? "menu-item-open" : ""}`}
    >
      <div className={`menu-link`} style={{margin: "9px 15px", padding: "0px 25px",borderRadius: "10px"}}>
        <Link to={path} className={`${styles.sidebar_link}`}>
          <span className="svg-icon menu-icon">
            <Svg />
          </span>
          <span className={`menu-text ${styles.sidebar_span_link}`}>{name}</span>
        </Link>
      </div>
    </li>
  );
};

export default ZeroLevel;
