import { useState, ChangeEvent } from "react";

import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import {
  LoginDiv,
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  Or,
  DontHaveAccout,
} from "./login.style";
import { createUserDocumentFromAuth } from "../utils/firebase.utils";
import { signInWithGooglePopup } from "../utils/firebase.utils";
const Login = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/signUp", { replace: true });
  };
  // useEffect(() => {
  //   if (auth) navigate("/");
  // }, []);
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

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    // if (response) {
    //   console.log(response);
    //   // const userDocRef = await createUserDocument(response.user, levels);
    //   // dispatch(setLoading(true));
    //   // navigate("/");
    // }
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
