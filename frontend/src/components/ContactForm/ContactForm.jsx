import React, {useState} from "react";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
      }

    function handleEmailChange(e) {
      setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
      }
  
  return (
    <section className="contact-form">
      <h2 className="contact-form__heading">Reach out to us!</h2>
      <form
        className="contact-form__form"
        id="contact-form"
        name="contact"
        noValidate
      >
        <input
          className="contact-form__input"
          type="text"
          name="name"
          id="name-input"
          required
          value={name}
          onChange={handleNameChange}
          placeholder="Your name*"
        />
        <input
          className="contact-form__input"
          type="email"
          name="email"
          id="email-input"
          required
          value={email}
          onChange={handleEmailChange}
          placeholder="Your e-mail*"
        />
        <textarea
          className="contact-form__input contact-form__input_type_textarea"
          name="message-textarea"
          required
          placeholder="Your message*"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="contact-form__button" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
