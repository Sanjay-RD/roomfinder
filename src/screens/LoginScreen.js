import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";

const LoginScreen = ({ history }) => {
  const selector = useSelector((state) => state.userLogin);
  const { loading, success } = selector;
  useEffect(() => {
    if (success) {
      history.push("/");
    }
  }, [history, success]);
  return <LoginForm title="Login" />;
};

export default LoginScreen;
