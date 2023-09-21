import css from "./Login.module.scss";
import Logo from "../../assets/svg/logo.svg";
import LoginSvg from "../../assets/svg/login_svg.svg";
const LoginLogo = () => {
  return (
    <section className={css.logo}>
      <div className={css.logo_container}>
        <a href="" className={css.logo_box}>
          <img src={Logo} alt="lendsqr" />
        </a>
        <div className={css.logo_svg}>
          <img src={LoginSvg} alt="login Svg" />
        </div>
      </div>
    </section>
  );
};

export default LoginLogo;
