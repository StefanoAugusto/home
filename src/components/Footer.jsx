import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> com <i className="fas fa-heart" /> por{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
          {" "} e modificado conforme necessidade por {" "} 
          <a
          rel="noopener"
          href="https://github.com/Stefano Augusto"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Stefano Augusto Mossi
          </span>
        </a>{" "}
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
