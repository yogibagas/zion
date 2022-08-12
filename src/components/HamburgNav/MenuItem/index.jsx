import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";

function Index(props) {
  const {showSidebar} = props;
  // console.log(showSidebar); 
  const [children, setChildren] = useState(false);
  const showChildren = (isParent) => {
    if (isParent) setChildren(!children);
    else showSidebar(false);
  };

  return props.menu.path.includes("http") ? (
    <li data-text={props.menu.label} key={props.menu.label}>
      <a
        href={props.menu.path}
        className="flex flex-row space-x-4 items-center"
        onClick={() => showChildren(props.menu.parent)}
        target="_blank"
        rel="noreferrer"
      >
        {props.menu.icon}
        <span className="flex-grow-1" style={{ fontSize: "18px" }}>
          {props.menu.label}
          <div style={{ fontSize: "13px", color: "white" }}>
            {props.menu.sublabel}
          </div>
        </span>
      </a>
    </li>
  ) : (
    <li data-text={props.menu.label} key={props.menu.label}>
      <Link
        to={props.menu.path}
        className="flex flex-row space-x-4 items-center"
        onClick={() => showChildren(props.menu.parent)}
      >
        {props.menu.icon}
        <span className="flex-grow-1" style={{ fontSize: "18px" }}>
          {props.menu.label}
          <span style={{ fontSize: "13px" }}>{props.menu.sublabel}</span>
        </span>
        {props.menu.parent && children && <IoIcons.IoIosArrowDropdown />}
        {props.menu.parent && !children && <IoIcons.IoIosArrowDropright />}
      </Link>

      {props.menu.child.length > 0 && children && (
        <ul className="flex flex-col items-start text-sm space-y-4 font-normal mt-4">
          {props.menu.child.map((i) => {
            return (
              <li key={i.label}>
                {(() => {
                  if (i.blank) {
                    return (
                      <Link
                        to={i.path}
                        onClick={showSidebar}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          className="ml-10"
                          style={{ fontSize: "18px", marginLeft: "3rem" }}
                        >
                          {i.label}
                        </span>
                      </Link>
                    );
                  }
                  if (i.path.includes("http")) {
                    return (
                      <a href={i.path} onClick={showSidebar} target="_blank">
                        <span
                          className="ml-10"
                          style={{ fontSize: "18px", marginLeft: "3rem" }}
                        >
                          {i.label}
                        </span>
                      </a>
                    );
                  }

                  return (
                    <a href={i.path} onClick={showSidebar} >
                      <span
                        className="ml-10"
                        style={{ fontSize: "18px", marginLeft: "3rem" }}
                      >
                        {i.label}
                      </span>
                    </a>
                  );
                })()}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default Index;
