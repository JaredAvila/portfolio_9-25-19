import React from "react";

import * as styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Email}>
        <h3>Get in touch</h3>
        <p>
          Send me an email at:
          <br /> jared.c.avila@gmail.com
        </p>
      </div>
      <form
        className={styles.Form}
        action="https://formspree.io/jay@famcoach.com"
        method="POST"
      >
        <label htmlFor="name">Or fill out this form and hit 'Send'</label>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
