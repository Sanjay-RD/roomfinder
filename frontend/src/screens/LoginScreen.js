import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";

const LoginScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);
  return <LoginForm title="Login" />;
};

export default LoginScreen;
