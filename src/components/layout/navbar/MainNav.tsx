import { Link } from "react-router-dom";
import css from "./Navbar.module.scss";
import Logo from "../../../assets/svg/logo.svg";
import ProfileImg from "../../../assets/images/profile_img.png";
import { ArrowDownIcon, NotificationIcon, SearchIcon } from "../../ui/svg";

const MainNav = () => {
  return (
    <nav className={css.main_nav}>
      <div className={css.logo_search}>
        <Link to={"/"} className={css.main_logo}>
          <img src={Logo} alt="lendsqr" />
        </Link>
        <form className={css.search_box}>
          <input type="" />
          <button>
            <SearchIcon className={css.main_search} />
          </button>
        </form>
      </div>
      <div className={css.admin_detail}>
        <Link to={""} className={css.doc}>
          Doc
        </Link>
        <button id="notification">
          <NotificationIcon className={css.notification} />
        </button>

        <div className={css.profile}>
          <div className={css.profile_img}>
            <img src={ProfileImg} alt="profile image" />
          </div>
          <button className={css.profile_info}>
            <span>Adedeji</span>
            <ArrowDownIcon className={css.arrow} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
