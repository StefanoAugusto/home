import React from "react";
import { useLanguage } from "../Navbar";
import { getInTouch } from "../../editable-stuff/config";

const GetInTouch = ({ email }) => {
  const { language } = useLanguage();
  
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{getInTouch[language].heading}</h2>
      <p className="lead text-center pb-3">
        {getInTouch[language].message} <br/><a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
      </p>
    </>
  );
};

export default GetInTouch;
