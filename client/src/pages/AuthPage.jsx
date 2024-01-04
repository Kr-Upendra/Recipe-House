import { useState } from "react";

export default function AuthPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const setStyle = {
    transform: showLoginForm ? "translateY(-100%)" : "",
  };

  return (
    <section className="section auth" id="auth">
      <div className="auth__container">
        <div className="auth__container--formbox">
          <AuthForm setStyle={setStyle} />
          <LoginForm setStyle={setStyle} />
        </div>
        <div className="auth__container--imagebox">
          <div className="inner">
            <h3 className="inner__text">
              {showLoginForm ? "Join us Now.." : "Already Have an Account?"}
            </h3>
            <button
              onClick={() => setShowLoginForm((prev) => !prev)}
              type="button"
              className="inner__button"
            >
              {showLoginForm ? "Sign up" : "sign in"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthForm({ setStyle }) {
  return (
    <form style={setStyle} className="authform signup">
      <div className="authform__title">
        <h2 className="authform__title--text">Signup for all powerups</h2>
      </div>
      <div className="authform__box">
        <div className="authform__box--inputs">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Your Fullname"
          />
        </div>
        <div className="authform__box--inputs">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="authform__box--inputs">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Create Strong Password"
          />
        </div>
        <div className="authform__box--button">
          <button type="submit">SIGN UP</button>
        </div>
        <div className="authform__box--forgot">
          <span>Already an user?</span>
          <button className="">Log in</button>
        </div>
      </div>

      <div className="authform__with">
        <span>OR</span>
      </div>
      <div className="authform__other">
        <button>
          <span>Signup with </span>
          <i className="fa-brands fa-google"></i>
        </button>
        <button>
          <span>Signup with </span>
          <i className="fa-brands fa-facebook"></i>
        </button>
      </div>
    </form>
  );
}

function LoginForm({ setStyle }) {
  return (
    <form style={setStyle} className="authform signin">
      <div className="authform__title">
        <h2 className="authform__title--text">Login To Start</h2>
      </div>
      <div className="authform__box">
        <div className="authform__box--inputs">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="authform__box--inputs">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Create Strong Password"
          />
        </div>
        <div className="authform__box--button">
          <button type="submit">Sign in</button>
        </div>
        <div className="authform__box--forgot">
          <span>Forgot Your Password? </span>
          <button className="">Reset</button>
        </div>
      </div>

      <div className="authform__with">
        <span>OR</span>
      </div>
      <div className="authform__other">
        <button>
          <span>Signup with </span>
          <i className="fa-brands fa-google"></i>
        </button>
        <button>
          <span>Signup with </span>
          <i className="fa-brands fa-facebook"></i>
        </button>
      </div>
    </form>
  );
}
