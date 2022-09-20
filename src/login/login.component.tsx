import { useState, ChangeEvent } from "react";

import { useNavigate } from "react-router-dom";
import { googleSignInStart } from "../store/user/user.action";
import {useDispatch} from "react-redux"
import {
  LoginDiv,
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  Or,
  DontHaveAccout,
} from "./login.style";


const Login = () => {
  const navigate = useNavigate();
const dispatch = useDispatch()
  const signUp = () => {
    navigate("/signUp", { replace: true });
  };

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

  const signInWithGoogle =  () => {
  dispatch(googleSignInStart())
  };
  return (
    <>
      <LoginDiv>
        <FormFieldLabels>Email :</FormFieldLabels>

        <br />

        <Or>or</Or>
        <button onClick={signInWithGoogle}>
          <SignInwithgoogleTextDiv>
            <div>
              <span>sign in with google</span>
            </div>
          </SignInwithgoogleTextDiv>
        </button>
        <DontHaveAccout>
          Don't have an account?<span onClick={signUp}>Sign up</span>
        </DontHaveAccout>
      </LoginDiv>
    </>
  );
};

export default Login;
