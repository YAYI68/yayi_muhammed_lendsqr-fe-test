import { Nopage } from "../ui/svg";
import css from "./Notfound.module.scss";

function NotFound() {
  return (
    <div className={css.notfound_container}>
      <div className={css.mini_container}>
        <div className={css.svg_container}>
          <Nopage className={css.svg} />
        </div>
        <div className={css.description}>
          <p>This page is unavailable at the moment. We’ll be right back.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
