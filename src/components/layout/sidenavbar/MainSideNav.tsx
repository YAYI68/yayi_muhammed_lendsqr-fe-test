import { useAuth } from "../../../hooks";
import { ExitIcon } from "../../ui/svg";
import { DashboardButton, MainNavLinkSection, SwitchButton } from "./AllLinks";
import { SectionLinks } from "./links";
import css from "./SideNav.module.scss";

const MainSideNav = () => {
  const { setIsAuthenticated } = useAuth();

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div className={css.main_side}>
      <div className={css.mobile_links}>
        <SwitchButton />
        <DashboardButton />
        <div className={css.sidelink_container}>
          <div>
            {SectionLinks.map((section, i) => (
              <MainNavLinkSection
                key={i}
                sectionName={section.section}
                links={section.links}
              />
            ))}
          </div>

          <div className={css.logout_container}>
            <button onClick={logout} className={css.logouBtn}>
              <ExitIcon className="" />
              <span>Log out</span>
            </button>
            <p>v1.2.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSideNav;
