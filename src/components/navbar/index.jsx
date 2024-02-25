import React from "react";
import navItems from "../../jsonFolder/navItems.json";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
function Navbar() {
  return (
    <nav className="ml-8 flex">
      {navItems.map((el, i) => {
        if (!el.children) {
          return (
            <ul key={el?.id} className="mr-4 items pl-4 pr-4">
              <Link to={el?.name}>{el?.name}</Link>
            </ul>
          );
        }
        return (
          <>
            <ul className="mr-4 items pl-4 pr-4" key={el?.id}>
              <div className="flex">
                <h3>{el?.name}</h3>
                <div>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>
              <ul className="submenulist">
                {el?.children.map((ch, chi) => {
                  return (
                    <>
                      <div className="flex m-2 ml-4 ">
                        <Link to={ch.name}>{ch.name}</Link>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </ul>
            </ul>
          </>
        );
      })}
    </nav>
  );
}

export default Navbar;
