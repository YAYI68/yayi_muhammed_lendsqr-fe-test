import { Link, useNavigate } from "react-router-dom";
import css from "./Login.module.scss";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

const adminEmail = import.meta.env.VITE_REACT_APP_EMAIL;
const adminPassword = import.meta.env.VITE_REACT_APP_PASSWORD;
const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormvalue] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event) => {
    setFormvalue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/users`);
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formValue });
    const { email, password } = formValue;
    setIsLoading(true);
    if (email === adminEmail && password === adminPassword) {
      setTimeout(() => {
        setIsLoading(false);
        setIsAuthenticated(true);
        toast.success("User login Successfully");
        navigate("/users");
      }, 3000);
    } else {
      toast.error("Invalid Credentials,Please enter a valid email/password");
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <section id="form" className={css.form_section}>
      <div className={css.form_container}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form onSubmit={handleSubmit} action="" className={css.form}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={css.input_text}
            onChange={handleOnChange}
          />
          <div className={css.password}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>
          <Link to="" className={css.forget_password}>
            forget password
          </Link>
          <button className={css.btn_submit}>
            {isLoading ? (
              <Loader className={css.loader} />
            ) : (
              <span>LOG IN</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
