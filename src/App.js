import { useState } from "react";
import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }

    if (!isLogin) {
      if (!form.name || !form.confirmPassword) {
        alert("Please fill all signup fields");
        return;
      }

      if (form.password !== form.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
    }

    alert(isLogin ? "Login Successful 🎉" : "Account Created Successfully 🎉");
  };

  return (
    <div className="page">
      <div className="auth-card">
        <div className="banner">
          <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p>{isLogin ? "Login to continue" : "Join us today"}</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          )}

          {isLogin && (
            <div className="row">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  onChange={handleChange}
                />
                Remember me
              </label>
              <span className="link">Forgot Password?</span>
            </div>
          )}

          <button className="btn">
            {isLogin ? "Login" : "Create Account"}
          </button>

          <p className="switch" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don’t have an account? Create Account"
              : "Already have an account? Login"}
          </p>
        </form>
      </div>
    </div>
  );
}
