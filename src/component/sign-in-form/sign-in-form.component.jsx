import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  // const values
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  //Functions
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Google sign in
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    // redux-thunk
    // await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // email and password sign in
    try {
      dispatch(emailSignInStart(email, password));
      // const { user } = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Wrong email");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.error("error in sign-in/handleSubmit: ", error.code);
          break;
      }
    }
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // returning
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="text"
          onChange={handlerChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handlerChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
