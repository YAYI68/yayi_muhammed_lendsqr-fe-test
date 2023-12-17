import { useRef, useState } from "react";
import { useClickAway } from "../../hooks";
import TableFilterCard, { UserStatusCard } from "./TableFilterCard";
import css from "./User.module.scss";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import TablePagination from "./TablePagination";
import { UserType } from "../types";
import Modal from "../layout/modal/Modal";
import { changeUserStatus } from "../../utils";
// import { UserType } from "../types/index";
const TheadData = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

type TableProps = {
  users: UserType[] | undefined;
};

const UserTable = (props: TableProps) => {
  const { users } = props;
  const CardContainerRef = useRef<HTMLDivElement>(null);
  const FilterContainerRef = useRef<HTMLDivElement>(null);
  const [filtertoggle, setFilterToggle] = useState(false);
  const [cardtoggle, setCardToggle] = useState(false);
  const [filterPos, setFilterPos] = useState(0);
  const [cardPos, setCardPos] = useState(0);
  const [currentUsername, setCurrentUserName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleStatusChange = (status: string) => {
    setMessage(status);
    setOpenModal(true);
    setCardToggle(false);
  };

  const confirmStatus = (status: string) => {
    changeUserStatus(currentUsername, status);
    setCardToggle(false);
    setOpenModal(false);
  };

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
              style={
                {
                  "--statusCardPosition": `${cardPos * 10 + 5}%`,
                } as React.CSSProperties
              }
              ref={CardContainerRef}
              className={css.statusCard}
            >
              <UserStatusCard
                username={currentUsername}
                handleStatusChange={handleStatusChange}
              />
            </div>
          ) : openModal ? (
            <Modal
              active={openModal}
              message={message}
              onConfirm={() => confirmStatus(message)}
            />
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
