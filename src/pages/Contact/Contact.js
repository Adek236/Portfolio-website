import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact flex-center-col">
      <div className="contact__desc flex-center-col">
        <p>{data.prevTitle}</p>
        <h2>{data.title}</h2>
      </div>
      <div className="contact__btns flex-center-col">
        <div className="contact__btns__box flex-center-col">
          <FontAwesomeIcon icon={faPaperPlane} />
          <h3>Email</h3>
          <p>{data.email}</p>
          <a href="/">{data.p}</a>
        </div>
        <div className="contact__btns__box flex-center-col">
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <h3>Messenger</h3>
          <p>{data.messenger}</p>
          <a href="/">{data.p}</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
