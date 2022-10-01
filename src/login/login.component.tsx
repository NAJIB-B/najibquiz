import { useState, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { emailSignInStart, googleSignInStart } from "../store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBackToHome, selectIsLoading } from "../store/user/user.selector";
import {
  LoginDiv,
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  Or,
  DontHaveAccout,
  GoogleIcon,
} from "./login.style";

import {
  Circles,
  CirclesLi,
  Area,
  SignUpBtn,
  LogOutBtn,
} from "../home/home.style";
import Spinner from "../spinner/spinner.component";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoHomePage = useSelector(selectBackToHome);

  const signUp = () => {
    navigate("/signUp", { replace: true });
  };
  useEffect(() => {
    if (!gotoHomePage) return;
    navigate("/");
  }, [gotoHomePage]);

  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFields = () => setFormFields(defaultFormFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };
  const login = () => {
    if (!email.trim() || !password.trim()) {
      alert("You can't leave any of the input blank");
      return;
    }
    try {
      dispatch(emailSignInStart(email, password));

      resetFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("incorrect password for email");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("no user associated with this email");
          break;

        default:
          console.error(`shit${error} tttt`);
      }

      // if (error.code === "auth/wrong-password") {
      //   alert("incorrect password");
    }
  };
  return (
    <>
      <Area>
        <LoginDiv>
          <FormFieldLabels>Email :</FormFieldLabels>
          <FormInputs
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <FormFieldLabels>password :</FormFieldLabels>
          <FormInputs
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <br />
          <SignUpBtn onClick={login}>login</SignUpBtn>
          <Or>or</Or>
          <LogOutBtn onClick={signInWithGoogle}>
            {" "}
            <SignInwithgoogleTextDiv>
              <div>
                <GoogleIcon icon="ant-design:google-outlined" color="white" />{" "}
              </div>
              <div>
                {" "}
                <span>sign in with google</span>
              </div>
            </SignInwithgoogleTextDiv>
          </LogOutBtn>
          <DontHaveAccout>
            Don't have an account?<span onClick={signUp}>Sign up</span>
          </DontHaveAccout>
        </LoginDiv>
        <Circles>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
        </Circles>
      </Area>
    </>
  );
};

export default Login;
