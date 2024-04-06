import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via email or GitHub:</p>
      <ul>
        <li>
          <i className="fas fa-envelope-open-text"></i>
          Email:
          <a href="mailto:xiaoln2000@gmail.com"> xiaoln2000@gmail.com </a>
        </li>
        <li>
          <i className="fab fa-github-alt"></i>
          GitHub:
          <a
            href="https://github.com/howhowtocook"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/howhowtocook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
