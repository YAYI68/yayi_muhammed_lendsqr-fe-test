import css from "./UserProfile.module.scss";
import { UserType } from "../../types";
import { FillStartIon, StarIcon } from "../../ui/svg";
import { nearestThousand } from "../../../utils";
import UserDefault from "../../../assets/images/userdefault.png";

const UserNavbar = () => {
  return (
    <div className={css.avataNav}>
      <button className={css.currentBtn}>General Details</button>
      <button className={""}>Documents</button>
      <button className={""}>Bank Details</button>
      <button className={""}>Loans</button>
      <button className={""}>Savings</button>
      <button className={""}>App and System</button>
    </div>
  );
};

type UserProfileCardProps = {
  user: UserType;
};
const UserProfilecard = (props: UserProfileCardProps) => {
  const { user } = props;
  const amount = nearestThousand(user?.amount);
  const account_code = user?.account_code.slice(-11);
  return (
    <section className={css.avatarContainer}>
      <div className={css.avatarWrapper}>
        <div className={css.avatarImgName}>
          <figure className={""}>
            <img src={user?.avatar ? user.avatar : UserDefault} alt="" />
          </figure>
          <div className={css.avatarName}>
            <p>{user?.full_name}</p>
            <small>{account_code}</small>
          </div>
        </div>
        <div className={css.avatarRating}>
          <p>{user?.account_type ? user.account_type : "User's"} Tier</p>
          <div className={css.rating}>
            <FillStartIon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div className={css.avatarAmount}>
          <p>₦{amount} </p>
          <small>
            {user?.account_number}/{user?.bank}
          </small>
        </div>
      </div>
      <UserNavbar />
    </section>
  );
};

export default UserProfilecard;
