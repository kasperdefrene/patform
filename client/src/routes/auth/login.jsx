import React from "react";
import { Form, redirect, Link, useActionData, useLocation, useNavigation } from "react-router-dom";
import "../../styles/style.css";
import { authenticate, getAuthData } from "../../services/auth";
import ErrorPage from "../error-page";
import ErrorField from "../../components/ErrorField";


const action = async ({ request }) => {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData);
  
    if (!email) {
      return {
        error: { email: "You must provide a email to log in" },
      };
    }
  
    if (!password) {
      return {
        error: { password: "You must provide a password to log in" },
      };
    }
  
    try {
      await authenticate(email, password);
    } catch (error) {
      return {
        error: { general: error.message },
      };
    }
  
    let redirectTo = formData.get("redirectTo") | null;
    return redirect(redirectTo || "/");
};

const loader = async () => {
    const { user } = getAuthData();
    if (user) {
      return redirect("/");
    }
    return null;
  };

  

const Login = () => {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get("from") || "/";
  
    let navigation = useNavigation();
    let isLoggingIn = navigation.formData?.get("email") != null;
  
    let actionData = useActionData();
    return (
      <section>
        <hgroup className="login__text">
          <h1>Sign in</h1>
          <p>Get access to all the features</p>
        </hgroup>
        <Form method="post" className="login__container">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e-mail"
              autoComplete="email"
              defaultValue="kasper@defrene.eu"
            />
            <ErrorField data={actionData} field="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              defaultValue="tester"
            />
            <ErrorField data={actionData} field="email" />
          </div>
          <div>
            <ErrorField data={actionData} field="general" />
            <button
                type="submit"
                disabled={isLoggingIn}
                className={actionData && actionData.error ? style.shake : null}
            >
                {isLoggingIn ? "Logging in..." : "Login"}
            </button>
            <Link to="/auth/register">
                ...or Sign up!
            </Link>
            </div>
        </Form>
      </section>
    );
  };
  Login.action = action;
  Login.loader = loader;

export default Login;