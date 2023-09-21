import { FilterIcon } from "../ui/svg";
import css from "./User.module.scss";

type TableHeadingProps = {
  content: string;
  clickHander: () => void;
};
const TableHeading = (props: TableHeadingProps) => {
  const { content, clickHander } = props;
  return (
    <th>
      {" "}
      <span>{content}</span>{" "}
      <button onClick={clickHander}>
        <FilterIcon className={css.filter} />
      </button>
    </th>
  );
};

export default TableHeading;
