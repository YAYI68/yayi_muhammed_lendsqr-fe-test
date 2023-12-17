import { AllCards, UserCard, UserTable } from "../../components/users";
import css from "./Users.module.scss";
import { useFilter, usePaginate } from "../../hooks";
import { filteredInput } from "../../utils";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { ActiveUserSvg, UserSvg } from "../../components/ui/svg";
import { useState } from "react";

const Users = () => {
  const { organization, status, date, username, phone_number, email } =
    useFilter();

  const { offset, setTotalPages } = usePaginate();
  const [aciveUser, setActiveUser] = useState(0);
  const [allUsers, setAllUsers] = useState(0);

  const filteredData = filteredInput({
    organization,
    status,
    date,
    username,
    phone_number,
    email,
  });

  const UserActiveCard = [
    {
      icon: <UserSvg />,
      info: "Users",
      figure: allUsers,
      bg_color: "rgba(223, 24, 255, .1)",
    },
    {
      icon: <ActiveUserSvg />,
      info: "Active Users",
      figure: aciveUser,
      bg_color: "rgba(87, 24, 255, .1)",
    },
  ];
  const users = useLiveQuery(async () => {
    if (Object.keys(filteredData).length !== 0) {
      const totalUsers = await db.users.where({ ...filteredData }).count();
      const users = await db.users
        .where({ ...filteredData })
        .offset(offset)
        .limit(10)
        .toArray();
      setTotalPages(totalUsers);

      return users;
      ("");
    } else {
      const totalUsers = await db.users.count();
      setAllUsers(totalUsers);
      const active = await db.users.where({ status: "active" }).count();
      setActiveUser(active);
      const users = await db.users.offset(offset).limit(10).toArray();
      setTotalPages(totalUsers);
      return users;
    }
  }, [offset, organization, status, date, username, phone_number, email]);

  // if (loading) {
  //   return <MainLoader />;
  // }

  return (
    <div className={css.container}>
      <>
        <h3>Users</h3>
        <div className={css.wrapper}>
          <section className={css.stat_section}>
            {UserActiveCard.map((card, i) => (
              <UserCard
                icon={card.icon}
                bg_color={card.bg_color}
                info={card.info}
                figure={card.figure}
                key={i}
              />
            ))}
            {AllCards.map((card, i) => (
              <UserCard
                icon={card.icon}
                bg_color={card.bg_color}
                info={card.info}
                figure={card.figure}
                key={i}
              />
            ))}
          </section>
          <section id="table">
            <UserTable users={users} />
          </section>
        </div>
      </>
    </div>
  );
};

export default Users;
