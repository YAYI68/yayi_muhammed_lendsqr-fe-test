import { Dexie, Table } from "dexie";
import { UserType } from "../components/types";

export const getUserData = async () => {
  const url = "https://run.mocky.io/v3/a57e4ca8-0fef-499a-8fa5-e721afc55ea2";
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
  // const db = new Dexie("UserDatabase");

  // db.version(1).stores({
  //   users: allKeys,
  // });
  // return db;
};

// export const addUsers = async () => {
//   const db = await createDbstore();
//   db.users.add();
// };

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
