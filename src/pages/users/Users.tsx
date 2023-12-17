import { AllCards, UserCard, UserTable } from "../../components/users";
import css from "./Users.module.scss";
import { useFilter, usePaginate } from "../../hooks";
import { filteredInput } from "../../utils";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const Users = () => {
  const { organization, status, date, username, phone_number, email } =
    useFilter();

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
