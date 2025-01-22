import React, { useState, createContext, useContext } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, navBarText } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");  

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "BR" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navigation = React.forwardRef((props, ref) => {
  const { language, toggleLanguage } = useLanguage(); 

  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);
  
  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink
          } */}
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#projects"}>
              {navBarText[language].projects}
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about[language].resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            {navBarText[language].resume}
          </NavLink>
          {about.show && (
            <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/#aboutme"}>
              {navBarText[language].aboutMe}
            </NavLink>
          )}
         {skills.show && (
            <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/#skills"}>
              {navBarText[language].skills}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
      <Nav className="ml-auto">
          <button
            onClick={toggleLanguage}
            className="nav-item lead border-0 bg-transparent"
          >
            {navBarText[language].toggleLang}
          </button>
        </Nav>
    </Navbar>
  );
});
export default Navigation;
