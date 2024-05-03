import React from "react";
import { Form, redirect, Link, useActionData, useLocation, useNavigation } from "react-router-dom";
import "../../styles/style.css";
import { register } from "../../services/auth";
import ErrorField from "../../components/ErrorField";

const action = async ({ request }) => {
    const formData = await request.formData();
    const { email, password, username } = Object.fromEntries(formData);
  
    if (!username) {
      return {
        error: { username: "You must provide a username" },
      };
    }
  
    if (!email) {
      return {
        error: { email: "You must provide a email to sign up" },
      };
    }
  
    if (!password) {
      return {
        error: { password: "You must provide a password" },
      };
    }
  
    try {
      await register(username, password, email);
    } catch (error) {
      return {
        error: { general: error.message },
      };
    }
  
    let redirectTo = formData.get("redirectTo") | null;
    return redirect(redirectTo || "/");
};

const Register = () => {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get("from") || "/";

    let navigation = useNavigation();
    let isLoggingIn = navigation.formData?.get("email") != null;

    let actionData = useActionData();


    return (
        <div>
            <div className="login__text">
                <h1>Register</h1>
                <p>Make a new profile to enjoy the whole experience</p>
            </div>
            <Form method="post" className="login__container">
                <input type="hidden" name="redirectTo" value={from} />
                <div>
                    <label htmlFor="email">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        autoComplete="username"
                        defaultValue="tester-0"
                    />
                    <ErrorField data={actionData} field="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e-mail"
                        autoComplete="email"
                        defaultValue="tester@devine.be"
                    />
                    <ErrorField data={actionData} field="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        autoComplete="current-password"
                        defaultValue="tester"
                    />
                    <ErrorField data={actionData} field="password" />
                </div>
                <div>
                    <ErrorField data={actionData} field="general" />
                    <button
                        type="submit"
                        disabled={isLoggingIn}
                        className={actionData && actionData.error ? style.shake : null}
                    >
                        {isLoggingIn ? "Sending..." : "Sign up"}
                    </button>
                </div>
            </Form>
        </div>
    );
};

Register.action = action;

export default Register;