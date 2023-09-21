import css from "./User.module.scss";

type CardProps = {
  icon: React.ReactNode;
  info: string;
  figure: string;
  bg_color: string;
};
const UserCard = (props: CardProps) => {
  const { icon, info, figure, bg_color } = props;
  return (
    <div className={css.card_container}>
      <div
        className={css.icon_box}
        style={{
          backgroundColor: bg_color,
        }}
      >
        {icon}
      </div>
      <p className={css.info}>{info}</p>
      <p className={css.figure}>{figure}</p>
    </div>
  );
};

export default UserCard;
