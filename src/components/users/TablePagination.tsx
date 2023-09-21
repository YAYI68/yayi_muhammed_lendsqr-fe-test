import { useClickAway, usePaginate } from "../../hooks";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StraightArrowDownIcon,
} from "../ui/svg";
import css from "./User.module.scss";
import { useState, useRef, useMemo } from "react";

const TablePagination = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { page, changePage, totalPages } = usePaginate();
  const [toggle, setToggle] = useState(false);
  useClickAway(dropDownRef, () => setToggle(false));
  // console.log({ totalPages, page });

  const pageList = useMemo(() => {
    const pages = [];
    for (let i = page; i < totalPages + 1; i++) {
      if (pages.length < 3 && totalPages - page > 6) {
        pages.push(i);
      } else if (i >= totalPages - 1 && totalPages - page > 6) {
        pages.push(i);
      } else if (totalPages - page <= 6) {
        pages.push(i);
      }
    }
    if (totalPages - page > 6) {
      return [...pages.slice(0, 3), "...", ...pages.slice(3)];
    } else {
      return pages;
    }
  }, [page, totalPages]);

  console.log({ pageList });

  return (
    <div className={css.paginate_wrapper}>
      <div className={css.showing}>
        <p>showing</p>
        <button onClick={() => setToggle(!toggle)}>
          <span>{page}</span> <StraightArrowDownIcon className={""} />
          {toggle ? (
            <div ref={dropDownRef} className={css.dropDown}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button onClick={() => changePage(i + 1)}>{i + 1}</button>
              ))}
            </div>
          ) : (
            ""
          )}
        </button>
        <p>out of {totalPages}</p>
      </div>
      <div className={css.paginate_list}>
        <button
          disabled={page <= 1}
          onClick={() => changePage(page - 1)}
          className={css.arrow}
        >
          <ArrowLeftIcon className="" />
        </button>
        {pageList.map((num) => (
          <button
            style={num === page ? { textDecoration: "underline" } : {}}
            onClick={() => changePage(num)}
            disabled={num === "..."}
            key={num}
          >
            {num}
          </button>
        ))}
        <button
          disabled={page >= totalPages}
          onClick={() => changePage(page + 1)}
          className={css.arrow}
        >
          <ArrowRightIcon className="" />
        </button>
      </div>
    </div>
  );
};
export default TablePagination;
