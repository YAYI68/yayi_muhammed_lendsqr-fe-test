import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SelectInput } from "../form";
import {
  ActivateUserStatusIcon,
  BlackListIcon,
  ViewStatusIcon,
} from "../ui/svg";
import css from "./User.module.scss";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { useFilter, usePaginate } from "../../hooks";

type StatusCardProps = {
  username: string;
  handleStatusChange: (s: string) => void;
};
export const UserStatusCard = (props: StatusCardProps) => {
  const { username, handleStatusChange } = props;

  const navigate = useNavigate();
  const viewClick = () => {
    navigate(`/users/${username}`);
  };

  return (
    <>
      <div className={css.status_wrapper}>
        <button onClick={viewClick}>
          <ViewStatusIcon />
          <span>View Details</span>
        </button>
        <button onClick={() => handleStatusChange("blacklist")}>
          <BlackListIcon />
          <span>Blacklist User</span>
        </button>
        <button onClick={() => handleStatusChange("active")}>
          <ActivateUserStatusIcon />
          <span>Activate User</span>
        </button>
      </div>
    </>
  );
};

type TableFilterProps = {
  setFilterToggle: () => void;
};

const TableFilterCard = (props: TableFilterProps) => {
  const { setFilterToggle } = props;
  const users = useLiveQuery(() => db.users.toArray());
  const { changePage } = usePaginate();

  const { setFilter, resetFilter, ...rest } = useFilter();
  const [organization, setOrganization] = useState(rest.organization);
  const [status, setStatus] = useState(rest.status);
  const [phone_number, setPhoneNumber] = useState(rest.phone_number);
  const [email, setEmail] = useState(rest.email);
  const [username, setUsername] = useState(rest.username);
  const [date, setDate] = useState(rest.date);

  const organizationArray = useMemo(() => {
    if (users) {
      const orgData = users.map((user) => user.organization);
      const orgSet = new Set(orgData);
      return [...orgSet.keys()];
    }
  }, [users]);

  const handleFilter = () => {
    const data = {
      organization,
      status,
      phone_number,
      email,
      username,
      date,
    };
    setFilter(data);
    setFilterToggle();
    changePage(1);
  };

  const handleResetFilter = () => {
    resetFilter();
    setFilterToggle();
    changePage(1);
  };

  return (
    <form action="">
      <div>
        <label htmlFor="organization">Organization</label>
        <SelectInput
          selectValue={setOrganization}
          placeholder={"Select"}
          value={organization}
          options={organizationArray}
        />
      </div>
      <div>
        <label htmlFor="organization">Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={css.input}
          defaultValue={username}
        />
      </div>
      <div>
        <label htmlFor="organization">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={css.input}
          defaultValue={email}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          className={css.input}
          defaultValue={date}
        />
      </div>
      <div>
        <label htmlFor="organization">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={css.input}
          defaultValue={phone_number}
        />
      </div>
      <div>
        <label htmlFor="organization">status</label>
        <SelectInput
          selectValue={setStatus}
          placeholder="Status"
          value={status}
          options={["active", "inactive", "pending", "blacklist"]}
        />
      </div>
      <div className={css.submit_wrapper}>
        <button type="button" onClick={handleResetFilter}>
          Reset
        </button>
        <button type="button" onClick={handleFilter} className={css.filterBtn}>
          Filter
        </button>
      </div>
    </form>
  );
};

export default TableFilterCard;
