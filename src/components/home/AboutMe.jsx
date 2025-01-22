import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import { useLanguage } from "../Navbar";
import { about } from "../../editable-stuff/config"; 

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  const { language } = useLanguage();

  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle object-fit-none"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{about[language].heading}</h2>
          <p className="lead text-center">{about[language].message}</p>
          {about[language].resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={about[language].resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                 {language === "EN" ? "Resume" : "Currículo"}
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
