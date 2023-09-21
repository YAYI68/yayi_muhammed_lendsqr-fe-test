import React from "react";
import { LongLeftArrowIcon } from "../../../components/ui/svg";
import ActivateButton from "./ActivateButton";
import css from "./UserDetail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db";
import { useState } from "react";
import {
  GeneralUserDetail,
  UserProfilecard,
} from "../../../components/users/details";
import { changeUserStatus } from "../../../utils";

const UserDetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const params = useParams();
  const user = useLiveQuery(async () => {
    const user = await db.users.get({ username: params.username });
    setIsloading(false);
    return user;
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  console.log({ user });
  const goBack = () => {
    navigate("/users");
  };
  return (
    <div className={css.wrapper}>
      <button onClick={goBack} className={css.backBtn}>
        <LongLeftArrowIcon />
        <span>Back to Users</span>
      </button>
      <div className={css.userDetail}>
        <p>User Detail</p>
        <div className={css.userBtnContainer}>
          <ActivateButton
            name="BlackList User"
            onClick={() => changeUserStatus(user?.username, "blacklist")}
            className={css.blacklist}
          />
          <ActivateButton
            name="Activate User"
            onClick={() => changeUserStatus(user?.username, "active")}
            className={css.activate}
          />
        </div>
      </div>
      {user ? (
        <React.Fragment>
          <UserProfilecard user={user} />
          <GeneralUserDetail user={user} />
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserDetail;
