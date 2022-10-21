import { async } from "@firebase/util";
import { useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import {
  selectBackToHome,
  selectIsLoading,
} from "../../store/user/user.selector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthErrorCodes, User, UserCredential } from "firebase/auth";

import {
  checkUserSession,
  googleSignInStart,
  signUpStart,
} from "../../store/user/user.action";
import {
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  DontHaveAccout,
  GoogleIcon,
  Or,
} from "../login/login.style";
import { FilledBtn, OutlineBtn } from "../home/home.style";

import { useDispatch } from "react-redux";

import { SignUpPageDiv, SignUpDiv } from "./sign-up.style";
import Spinner from "../../components/spinner/spinner.component";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoHomePage = useSelector(selectBackToHome);
  useEffect(() => {
    if (!gotoHomePage) return;
    navigate("/");
  }, [gotoHomePage]);
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFields = () => setFormFields(defaultFormFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const login = () => {
    navigate("/login", { replace: true });
  };
  const signUp = async () => {
    if (
      !displayName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("You can't leave any of the input blank");
    }
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFields();
    } catch (error) {
      if (AuthErrorCodes.EMAIL_EXISTS) {
        alert("cannot create user, email already in use");
      } else console.log(`failed ${error}`);
      console.log(error);
    }
  };
  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  return (
    <>
      <SignUpPageDiv>
        <SignUpDiv>
          <FormFieldLabels>Name :</FormFieldLabels>
          <FormInputs
            type="text"
            placeholder="name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <FormFieldLabels>Email :</FormFieldLabels>
          <FormInputs
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <FormFieldLabels>Password :</FormFieldLabels>
          <FormInputs
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <FormFieldLabels>Confirm password :</FormFieldLabels>
          <FormInputs
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            required
          />
          <br />
          <FilledBtn onClick={signUp}>sign up</FilledBtn>
          <Or>or</Or>
          <OutlineBtn onClick={signInWithGoogle}>
            {" "}
            <SignInwithgoogleTextDiv>
              <div>
                <GoogleIcon icon="ant-design:google-outlined" color="#2e266f" />{" "}
              </div>
              <div>
                {" "}
                <span>sign in with google</span>
              </div>
            </SignInwithgoogleTextDiv>
          </OutlineBtn>
          <DontHaveAccout>
            Already have an account?<span onClick={login}>Log in</span>
          </DontHaveAccout>
        </SignUpDiv>
      </SignUpPageDiv>
    </>
  );
};

export default SignUp;
