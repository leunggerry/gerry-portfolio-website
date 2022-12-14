import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// Component Definition
function Nav(props) {
  // Destructure the props coming in
  const { currentTab, setTab } = props;

  //useEffic - a hook to trigger  a re-render on a variable value change. Difference to useState is
  //          its an API that reflectst he lifecycle methods of the component
  useEffect(() => {
    document.title = "Gerry Leung - " + capitalizeFirstLetter(currentTab);
  }, [currentTab]); // callback function followed by second argument that directs the hook
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">
            Gerry Leung
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === "about" && `active`}`}
                href="#about"
                onClick={() => setTab("about")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === "portfolio" && `active`}`}
                href="#portfolio"
                onClick={() => setTab("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === "Contact" && `active`}`}
                href="#contact"
                onClick={() => setTab("contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === "Resume" && `active`}`}
                href="#resume"
                onClick={() => setTab("resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
