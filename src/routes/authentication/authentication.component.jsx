// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignUp from "../../component/sign-up-form/sign-up-form.component";
import SignIn from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // Redirect method
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);

  //       if (response) {
  //         createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  //   const logGoogleUserWithRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //   };

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
      {/* <button onClick={logGoogleUserWithRedirect}>Sign In with Redirect</button> */}
    </div>
  );
};

export default Authentication;
