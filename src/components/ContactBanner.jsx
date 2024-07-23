import { Link } from "react-router-dom";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Ready to get started?</h1>
        <Link to="/contact" className="banner__btn">
          contact us
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
