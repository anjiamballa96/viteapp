import React from "react";
import navItems from "../../jsonFolder/navItems.json";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <nav className="ml-8 flex">
        {navItems.map((el, i) => {
          if (!el.children) {
            return (
              <ul key={el?.id} className="mr-4 items pl-4">
                <Link to={el?.path}>{el?.name}</Link>
              </ul>
            );
          } else {
            return (
              <>
                <ul className="mr-4 items pl-4" key={el?.id}>
                  <div className="flex">
                    <h3>{el?.name}</h3>
                    <div>
                      <RiArrowDropDownLine size={30} />
                    </div>
                  </div>
                  <div className="submenulist" key={el?.id}>
                    {el?.children.map((ch, chi) => {
                      return (
                        <>
                          <ul className="flex m-2 ml-4" key={ch?.id}>
                            <Link to={ch.path}>{ch.name}</Link>
                          </ul>
                          <hr />
                        </>
                      );
                    })}
                  </div>
                </ul>
              </>
            );
          }
        })}
      </nav>
    </>
  );
}

export default Navbar;
