import MainSideNav from "./sidenavbar/MainSideNav";
import css from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <main className={css.main}>
        <aside className={css.aside}>
          <MainSideNav />
        </aside>
        <div className={css.wrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
