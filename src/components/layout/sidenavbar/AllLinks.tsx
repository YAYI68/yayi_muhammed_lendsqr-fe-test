import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BriefCase, HomeIcon, StraightArrowDownIcon } from "../../ui/svg";
import css from "./SideNav.module.scss";
export const SwitchButton = () => {
  return (
    <button className={css.nav_switch}>
      <div>
        <BriefCase className="" />
        <span>Switch Organization</span>
      </div>
      <StraightArrowDownIcon className="" />
    </button>
  );
};

export const DashboardButton = () => {
  return (
    <button className={css.nav_dashboard}>
      <HomeIcon className="" />
      <span>Dashboard</span>
    </button>
  );
};

type linkProps = {
  name: string;
  url: string;
  icon: React.ReactNode;
};
const SideLink = (props: linkProps) => {
  const { name, url, icon } = props;
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={url}
        className={`${css.link}  ${url === pathname ? css.activelink : ""}`}
      >
        {icon}
        <span>{name}</span>
      </Link>
    </li>
  );
};

type linkType = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

type linkSectionProps = {
  sectionName: string;
  links: linkType[];
};
export const NavLinkSection = (props: linkSectionProps) => {
  const { sectionName, links } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <div className={css.link_container}>
      <button onClick={() => setToggle(!toggle)} className={css.link_header}>
        {" "}
        <span>{sectionName}</span> <StraightArrowDownIcon className="" />{" "}
      </button>
      <ul className={toggle ? css.slideDown : ""}>
        {links.map((link, i) => (
          <SideLink key={i} icon={link.icon} name={link.name} url={link.url} />
        ))}
      </ul>
    </div>
  );
};
