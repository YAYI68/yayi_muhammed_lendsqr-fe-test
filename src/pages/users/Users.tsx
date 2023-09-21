import { useEffect } from "react";
import { AllCards, UserCard, UserTable } from "../../components/users";
import css from "./Users.module.scss";
import { storeUserData } from "../../db";

const Users = () => {
  useEffect(() => {
    (async () => {
      await storeUserData();
    })();
  }, []);

  return (
    <div className={css.container}>
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
          <UserTable />
        </section>
      </div>
    </div>
  );
};

export default Users;
