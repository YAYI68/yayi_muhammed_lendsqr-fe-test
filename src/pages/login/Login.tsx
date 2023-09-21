import { LoginForm, LoginLogo } from "../../components/login";
import css from "./Login.module.scss";

const Login = () => {
  return (
    <main className={css.wrapper}>
      <LoginLogo />
      <LoginForm />
    </main>
  );
};

export default Login;
