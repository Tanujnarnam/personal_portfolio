import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contactform.scss"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    console.log(e.target)
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_k2j44il",
        "template_f6z0uwg",
        e.target,
        "0limOxfb1sRsN6Eu4"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail} className="form">
      <div className="flex">
        <label>
          <input className="input" type="text" name="from_name" placeholder="Name"/>
        </label>
        <label>
          <input className="input" type="email" name="from_email" placeholder="Email"/>
        </label>
        <label>
          <textarea className="input" name="message" placeholder="Message"/>
        </label>
      </div>
      <input className="submit" type="submit" value="Submit" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;