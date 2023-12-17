import { ThreeDot } from "../ui/svg";
import { Link } from "react-router-dom";
import css from "./User.module.scss";
import { dateFormat } from "../../utils";

type tableDataProps = {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
  dotHandler: () => void;
};
const TableData = (props: tableDataProps) => {
  const {
    organization,
    username,
    email,
    phone_number,
    date_joined,
    status,
    dotHandler,
  } = props;

  return (
    <tr className={css.tableRow}>
      <td>
        <span>{organization}</span>
      </td>
      <td>
        <Link to={`/users/${username}`} className={css.tableLink}>
          <span>{username}</span>
        </Link>
      </td>
      <td>
        <Link to={`/users/${username}`} className={css.tableLink}>
          <span>{email}</span>
        </Link>
      </td>
      <td>
        <span>{phone_number}</span>
      </td>
      <td>
        <span>{dateFormat(date_joined)}</span>
      </td>
      <td className={css.status}>
        {" "}
        <span className={`${css.status_data} ${css[`${status}`]}`}>
          {status}
        </span>
        <button onClick={dotHandler} className={css.dotBtn}>
          <ThreeDot className={css.dot} />
        </button>
      </td>
    </tr>
  );
};

export default TableData;
