import css from "./Loader.module.scss";
import Logo from "../../assets/svg/logo.svg";

const MainLoader = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.mainWrapper}>
        <div className={`${css.logoWrapper} ${css.mainloader}`}>
          <img src={Logo} alt={"lendsqr logo"} />
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
