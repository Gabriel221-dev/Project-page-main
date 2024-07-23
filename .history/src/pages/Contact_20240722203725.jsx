import { useState } from "react";
import "./Contact.css";
import iconPerson from "../assets/icon-person.svg";
import iconCog from "../assets/icon-cog.svg";
import iconChart from "../assets/icon-chart.svg";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
    isTouched: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      isTouched: true,
    });
  };

  const { name, email, company, title, message, isTouched } = formState;

  return (
    <div className="contact">
      <section className="contact-content">
        <div className="contact-body">
          <div className="contact-topics">
            <h1 className="contact__title">Contact Us</h1>
            <h2 className="contact__subtitle">Ask us about</h2>
            <div className="topic">
              <img
                src={iconPerson}
                alt="The quality of our talent network"
                className="contact__image"
              />
              <p className="contact__description">
                The quality of our talent network
              </p>
            </div>
            <div className="topic">
              <img
                src={iconCog}
                alt="Usage & implementation of our software"
                className="contact__image"
              />
              <p className="contact__description">
                Usage & implementation of our software
              </p>
            </div>
            <div className="topic">
              <img
                src={iconChart}
                alt="How we help drive innovation"
                className="contact__image"
              />
              <p className="contact__description">
                How we help drive innovation
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div
              className={`form__control ${
                !name && isTouched ? "form__control--error" : ""
              }`}
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
                className="form__input"
              />
              {!name && isTouched && (
                <span className="form__error">This field is required</span>
              )}
            </div>
            <div
              className={`form__control ${
                !email && isTouched ? "form__control--error" : ""
              }`}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email Address"
                className="form__input"
              />
              {!email && isTouched && (
                <span className="form__error">This field is required</span>
              )}
            </div>
            <div
              className={`form__control ${
                !company && isTouched ? "form__control--error" : ""
              }`}
            >
              <input
                type="text"
                name="company"
                value={company}
                onChange={handleChange}
                placeholder="Company Name"
                className="form__input"
              />
              {!company && isTouched && (
                <span className="form__error">This field is required</span>
              )}
            </div>
            <div
              className={`form__control ${
                !title && isTouched ? "form__control--error" : ""
              }`}
            >
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
                className="form__input"
              />
              {!title && isTouched && (
                <span className="form__error">This field is required</span>
              )}
            </div>
            <div
              className={`form__control ${
                !message && isTouched ? "form__control--error" : ""
              }`}
            >
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Message"
                className="form__input form__input--textarea"
              />
              {!message && isTouched && (
                <span className="form__error">This field is required</span>
              )}
            </div>
            <button type="submit" className="form__button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
