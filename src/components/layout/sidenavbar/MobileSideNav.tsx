import Logo from "../../../assets/svg/logo.svg";
import { ExitIcon, TimesIcon } from "../../ui/svg";
import { DashboardButton, NavLinkSection, SwitchButton } from "./AllLinks";
import css from "./SideNav.module.scss";
import { SectionLinks } from "./links";

type mobileSlideProps = {
  slideIn: boolean;
  setSlideIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileSideNav = (props: mobileSlideProps) => {
  const { slideIn, setSlideIn } = props;

  return (
    <>
      {slideIn ? (
        <div className={css.mobile_sidenav}>
          <div>
            {/* background */}
            <div
              className={css.slide_bg}
              onClick={() => setSlideIn(false)}
            ></div>
            <div id="Link" className={css.link_wrapper}>
              <div className={css.slide_logo}>
                <button onClick={() => setSlideIn(false)}>
                  <TimesIcon className={css.times} />
                </button>
                <div>
                  <img src={Logo} alt="" />
                </div>
              </div>
              <div className={css.mobile_links}>
                <SwitchButton />
                <DashboardButton />
                <div className={css.sidelink_container}>
                  <div>
                    {SectionLinks.map((section, i) => (
                      <NavLinkSection
                        key={i}
                        sectionName={section.section}
                        links={section.links}
                      />
                    ))}
                  </div>

                  <div className={css.logout_container}>
                    <button className={css.logouBtn}>
                      <ExitIcon className="" />
                      <span>Log out</span>
                    </button>
                    <p>v1.2.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileSideNav;
