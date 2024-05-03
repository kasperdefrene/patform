import React from "react";
import { Form, redirect, Link, useActionData, useLocation, useNavigation } from "react-router-dom";
import "../../styles/style.css";
import { authenticate } from "../../services/auth";
import ErrorPage from "../error-page";


const action = async ({ request }) => {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData);
    await authenticate(email, password);
    return redirect("/");
  };

const Login = () => {
    return (
      <section>
        <hgroup className="style">
          <h2>Sign in</h2>
          <p>Get access to all the features</p>
        </hgroup>
        <Form method="post">
          <div className="style">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e-mail"
              autoComplete="email"
              defaultValue="kasper@defrene.eu"
            />
          </div>
          <div className="style">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              defaultValue="tester"
            />
          </div>
          <div className="style">
            <button type="submit">Login</button>
          </div>
        </Form>
      </section>
    );
  };
  Login.action = action;
//   Login.loader = loader;

export default Login;