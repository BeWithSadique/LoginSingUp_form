import { useState } from "react";
import "./App.css";
import LoginForm from "./component/LoginForm";
function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            LogIn
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SingUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Password</a>
              <button>Login</button>
              <p>Not a member? <a href="#" onClick={()=> setIsLogin(false)}>SingUp now</a></p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SingUp Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder=" Current Password" />
              <button>SingUp</button>
              </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
