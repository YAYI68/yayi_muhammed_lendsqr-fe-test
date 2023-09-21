import { Link } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg";
import ProfileImg from "../../../assets/images/profile_img.png";
import css from "./Navbar.module.scss";
import {
  ArrowDownIcon,
  BarIcon,
  NotificationIcon,
  SearchIcon,
} from "../../ui/svg";
import MobileSideNav from "../sidenavbar/MobileSideNav";
import { useState } from "react";

const MobileNav = () => {
  const [slideIn, setSlideIn] = useState(false);

  return (
    <nav className={css.mobile_nav}>
      <button className={css.barBtn} onClick={() => setSlideIn(true)}>
        <BarIcon className={css.barIcon} />
      </button>
      <Link to={""} className={css.lendsqr}>
        <img src={Logo} alt="" />
      </Link>
      <div className={css.dash_detail}>
        <Link to={""}>Doc</Link>
        <button>
          <SearchIcon className={css.search_icon} />
        </button>
        <button>
          <NotificationIcon className={css.search_icon} />
        </button>
        <div className={css.mobile_profile}>
          <div className={css.mobile_img}>
            <img src={ProfileImg} alt="" />
          </div>
          <button>
            <span>Adedeji</span>
            <ArrowDownIcon className="" />
          </button>
        </div>
      </div>
      <MobileSideNav setSlideIn={setSlideIn} slideIn={slideIn} />
    </nav>
  );
};

export default MobileNav;
