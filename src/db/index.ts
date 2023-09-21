import { Dexie, Table } from "dexie";
import { UserType } from "../components/types";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
export const getUserData = async () => {
  const url = `${API_URL}`;
  const response = await fetch(url);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return null;
};

export const createDbstore = async () => {
  const data = await getUserData();
  if (!data) {
    return;
  }
  const firstUser = data[0];
  const allKeys = Object.keys(firstUser).join(",");
  return allKeys;
};

export class MySubClassedDexie extends Dexie {
  users!: Table<UserType>;

  constructor() {
    super("LendsqrDatabase");

    this.version(10).stores({
      users:
        "id,full_name,email,amount,account_code,marital_status,account_type,bank,bvn,phone_number,education_level,children,residence_type,office_email,employment_status,employment_sector,montly_income,loan_repayment,guarantor_fullname,guarantor_phonenumber,guarantor_email,guarantor_relationship,account_number,organization,status,date_joined,employment_duration,username,avatar,gender",
    });
  }
}

export const db = new MySubClassedDexie();

export const storeUserData = async () => {
  const data = await getUserData();
  db.users.bulkAdd(data);
};
