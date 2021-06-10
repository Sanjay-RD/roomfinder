import React, { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";

import { useSelector } from "react-redux";

const RegisterScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);
  return <RegisterForm title="Register" submitTitle="Register" />;
};

export default RegisterScreen;
