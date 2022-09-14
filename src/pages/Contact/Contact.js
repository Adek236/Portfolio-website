import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className="contact flex-center-col">
      <div className="contact__desc flex-center-col">
        <p>Get in Touch</p>
        <h2>Contact me</h2>
      </div>
      <div className="contact__btns flex-center-col">
        <div className="contact__btns__box flex-center-col">
          <FontAwesomeIcon icon={faPaperPlane} />
          <h3>Email</h3>
          <p>adsad@dsds.pl</p>
          <a href="/">Send a message</a>
        </div>
        <div className="contact__btns__box flex-center-col">
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <h3>Messanger</h3>
          <p>@adrianzawadzki</p>
          <a href="/">Send a message</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
