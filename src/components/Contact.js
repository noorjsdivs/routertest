import React from "react";
import { Form, useActionData } from "react-router-dom";

const Contact = () => {
  let error = useActionData();
  return (
    <div className="contact">
      <h1>Contact page</h1>
      <div>
        <Form method="post" action="/contact">
          <input type="text" name="firstname" placeholder="First name" />
          {error && <p className="error">{error.firstname}</p>}
          <input type="text" name="lastname" placeholder="Last name" />
          {error && <p className="error">{error.lastname}</p>}
          <input type="email" name="email" placeholder="Email" />
          {error && <p className="error">{error.email}</p>}
          <input type="password" name="password" placeholder="Password" />
          {error && <p className="error">{error.password}</p>}
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

export async function contactData({ request }) {
  let info = await request.formData();
  let err = {};
  if (!info.get("firstname")) {
    err.firstname = "Enter your first name";
  } else if (!info.get("lastname")) {
    err.lastname = "Enter your last name";
  } else if (!info.get("email")) {
    err.email = "Enter your Email";
  } else if (!info.get("password")) {
    err.password = "Enter your Password";
  }
  return err;
}
