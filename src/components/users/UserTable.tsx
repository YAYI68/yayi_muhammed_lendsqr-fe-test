import { useRef, useState } from "react";
import { useClickAway, useFilter, usePaginate } from "../../hooks";
import TableFilterCard, { UserStatusCard } from "./TableFilterCard";
import css from "./User.module.scss";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import TablePagination from "./TablePagination";
import { filteredInput } from "../../utils";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import Loader from "../loader/Loader";

const TheadData = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

const UserTable = () => {
  const CardContainerRef = useRef<HTMLDivElement>(null);
  const FilterContainerRef = useRef<HTMLDivElement>(null);
  const [filtertoggle, setFilterToggle] = useState(false);
  const [cardtoggle, setCardToggle] = useState(false);
  const [filterPos, setFilterPos] = useState(0);
  const [cardPos, setCardPos] = useState(0);
  const [currentUsername, setCurrentUserName] = useState("");
  const { organization, status, date, username, phone_number, email } =
    useFilter();
  const [isLoading, setIsLoading] = useState(true);
  const { offset, setTotalPages } = usePaginate();
  const filteredData = filteredInput({
    organization,
    status,
    date,
    username,
    phone_number,
    email,
  });

  const users = useLiveQuery(async () => {
    if (Object.keys(filteredData).length !== 0) {
      const totalUsers = await db.users.where({ ...filteredData }).count();
      const users = db.users
        .where({ ...filteredData })
        .offset(offset)
        .limit(10)
        .toArray();
      setTotalPages(totalUsers);
      setIsLoading(false);
      return users;
    } else {
      const totalUsers = await db.users.count();
      const users = db.users.offset(offset).limit(10).toArray();
      setTotalPages(totalUsers);
      setIsLoading(false);
      return users;
    }
  }, [offset, organization, status, date, username, phone_number, email]);

  const handleClick = (pos: number) => {
    setFilterPos(pos);
    setFilterToggle(true);
  };

  const handleDotClick = (pos: number, username: string) => {
    setCardPos(pos);
    setCardToggle(true);
    setCurrentUserName(username);
  };

  useClickAway(FilterContainerRef, () => setFilterToggle(false));
  useClickAway(CardContainerRef, () => setCardToggle(false));

  if (isLoading) {
    return (
      <div className={css.loaderContainer}>
        <Loader className={css.loader} />;
      </div>
    );
  }

  return (
    <div className={css.section_wrapper}>
      <div className={css.table_container}>
        <table>
          <thead>
            <tr>
              {TheadData.map((data, i) => (
                <TableHeading
                  key={data}
                  content={data}
                  clickHander={() => handleClick(i)}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <TableData
                key={i}
                organization={user.organization}
                username={user.username}
                email={user.email}
                phone_number={user.phone_number}
                date_joined={user.date_joined}
                status={user.status}
                dotHandler={() => handleDotClick(i, user.username)}
              />
            ))}
          </tbody>
          {filtertoggle ? (
            <div
              style={{
                left: `${filterPos * 10}rem`,
              }}
              ref={FilterContainerRef}
              className={css.filter_wrapper}
            >
              <TableFilterCard setFilterToggle={() => setFilterToggle(false)} />
            </div>
          ) : (
            ""
          )}
          {cardtoggle ? (
            <div
              style={{
                top: `${cardPos * 10 + 5}%`,
              }}
              ref={CardContainerRef}
              className={css.statusCard}
            >
              <UserStatusCard
                setCardToggle={() => setCardToggle(false)}
                username={currentUsername}
              />
            </div>
          ) : (
            ""
          )}
        </table>
      </div>
      <TablePagination />
    </div>
  );
};

export default UserTable;
