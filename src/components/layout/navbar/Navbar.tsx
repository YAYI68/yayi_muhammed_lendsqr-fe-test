import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import css from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={css.header}>
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Navbar;
