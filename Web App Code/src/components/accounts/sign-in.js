import React from "react";
import "./style.css";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
  db,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import cogoToast from "cogo-toast";

export default function SignIn({ history: routeHistory }) {
  const history = useHistory();
  const [signInData, setSignInData] = React.useState({
    email: null,
    password: null,
  });
  const [signUpData, setSignUpData] = React.useState({
    username: null,
    email: null,
    password: null,
  });
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = React.useState(null);

  const fetchUserName = async () => {};

  React.useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
    }
    const fetchUserName = async () => {
      try {
        const query = await db
          .collection("users")
          .where("uid", "==", user?.uid)
          .get();

        const data = await query.docs[0]?.data();
        localStorage.setItem("user", JSON.stringify(data));

        setCurrentUser(data);
        if (data) {
          if (!routeHistory?.location?.state?.place) {
            data && data?.role === "admin"
              ? history.replace("/admin-panel")
              : history.replace("/dashboard");
          } else {
            history.replace({
              pathname: "/places-details",
              state: { place: routeHistory?.location?.state?.place },
            });
          }
        }
      } catch (err) {
        console.error(err);
        cogoToast.error("An error occured while fetching user data");
      }
    };

    if (user) {
      setSignInData({ email: null, password: null });
      setSignUpData({ username: null, email: null, password: null });
      fetchUserName();
    }
  }, [user, loading, currentUser]);

  const handleSignInTransition = (e) => {
    const container = document.querySelector(".account-container");
    container.classList.remove("sign-up-mode");
  };

  const handleSignUpTransition = (e) => {
    const container = document.querySelector(".account-container");
    container.classList.add("sign-up-mode");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(signInData.email, signInData.password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(
      signUpData.username,
      signUpData.email,
      signUpData.password
    );
  };

  return (
    <div className="account-container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="email"
                placeholder="Email"
                value={signInData.email}
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <AiOutlineKey />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={signInData.password}
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
              />
            </div>

            <input type="submit" value="Login" className="account-btn solid" />

            <div className="social-media mt-4">
              <button className="social-icon" onClick={signInWithGoogle}>
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
                Sign in with Google
              </button>
            </div>
            <Link to="">
              <button className="account-btn solid">Maybe Later</button>
            </Link>
          </form>

          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="text"
                placeholder="Username"
                value={signUpData.username}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, username: e.target.value })
                }
                required
                pattern="^[a-zA-Z](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){3,10}[a-zA-Z0-9]$"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <BiEnvelopeOpen />
              </i>
              <input
                type="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
                pattern="^[a-z](\.?[a-z0-9]){4,}@g(oogle)?mail\.com$"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <AiOutlineKey />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                required
              />
            </div>

            <input
              type="submit"
              className="account-btn solid"
              value="Sign up"
            />

            <Link to="/">
              <button to="/" className="account-btn-2">
                Maybe Later
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Get started with us and make your experience a whole new amazing
              one. It takes just new minutes.
            </p>
            <button
              className="account-btn transparent"
              id="sign-up-btn"
              onClick={(e) => handleSignUpTransition(e)}
            >
              Sign up
            </button>
          </div>
          <img src="/images/bg/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Its easy to just sign in if you already got an account here</p>
            <button
              className="account-btn transparent"
              id="sign-in-btn"
              onClick={(e) => handleSignInTransition(e)}
            >
              Sign in
            </button>
          </div>
          <img src="/images/bg/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
