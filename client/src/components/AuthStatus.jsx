import { Link, useRouteLoaderData } from "react-router-dom";

const AuthStatus = () => {
    let { user } = useRouteLoaderData("root");
  
   return user ? (
      <Link to="/artwork/create">
        Add Cheese
      </Link>
    ) : (
      <Link to="/auth/login">
        Sign in
      </Link>
    );
  };

export default AuthStatus;