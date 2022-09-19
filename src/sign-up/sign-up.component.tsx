import { async } from "@firebase/util";
import { useEffect, ChangeEvent } from "react";
import { getRedirectResult } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthErrorCodes, User, UserCredential } from "firebase/auth";
import {
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  DontHaveAccout,
  Or,
} from "../login/login.style";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";
import { SignUpPageDiv, SignUpDiv } from "./sign-up.style";

const SignUp = () => {
  const navigate = useNavigate();

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
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const usercredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (usercredential) {
        const { user } = usercredential;
        const data = await createUserDocumentFromAuth(user, { displayName });
        console.log(data);
      }

      resetFields();
    } catch (error) {
      // if (AuthErrorCodes.EMAIL_EXISTS) {
      //   alert("cannot create user, email already in use");
      // } else console.log(`failed ${error}`);
      console.log(error);
    }
  };

  return (
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
        <button onClick={signUp}></button>
        <Or>or</Or>{" "}
        <SignInwithgoogleTextDiv>
          <div></div>
          <div>
            {" "}
            <span>sign in with google</span>
          </div>
        </SignInwithgoogleTextDiv>
        <DontHaveAccout>
          Already have an account?<span onClick={login}>Log in</span>
        </DontHaveAccout>
      </SignUpDiv>
    </SignUpPageDiv>
  );
};

export default SignUp;
