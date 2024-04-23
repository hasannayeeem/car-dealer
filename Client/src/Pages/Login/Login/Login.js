import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import logo from "../../../images/logo.png";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (error)
    errorElement = <p className="text-danger">Error: {error?.message}</p>;

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = user?.user?.displayName;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = 'admin'

    await signInWithEmailAndPassword(email, password);
    const currentUser = { email, name, role };
    const { data } = await axios.post("http://localhost:8000/api/v1/user", {
      currentUser,
    });
    if (data.report === "inserted" || data.report === "exist") {
      navigate("/");
      // toast.success('Plz Fillup This Form!', { id: "social_login" })
    } else if (data.report === "dataExist") {
      navigate(from, { replace: true });
      toast.success("Login Successfully!", { id: "social_login" });
    }
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email");
    }
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <div className={`w-75 mx-auto rounded shadow`}>
        <div className={`mx-5 my-4 py-3`}>
          <img className={`mx-auto my-2 d-block`} src={logo} alt="" />
          <h2 className="text-danger text-center mb-4 font-weight-bold">
            Welcome Back!
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                className={`py-2`}
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                className={`py-2`}
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button
              variant="primary w-100 mx-auto d-block main-btn mb-2"
              type="submit"
            >
              Login
            </Button>
          </Form>
          {errorElement}
          <p className={`fw-bold pt-2`}>
            New to Autostars?{" "}
            <Link
              to="/register"
              className="text-danger pe-auto  text-decoration-none"
              onClick={navigateRegister}
            >
              Signup Here
            </Link>
          </p>
          <p>
            Forget Password?{" "}
            <Link
              to="/login"
              className="text-primary pe-auto  text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
