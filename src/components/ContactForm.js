import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqrlolp");
  
  var submitElement = (
      <input
        disabled={state.submitting}
        type="submit"
        value="Send Message"
        className="button large primary"
      />);

  if (state.succeeded) {
      submitElement = <p>Thanks for contacting us!</p>;
  }

  return (
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <ul className="actions">
            <li>
              {submitElement}
            </li>
          </ul>
        </form>
  );
}

export default ContactForm
