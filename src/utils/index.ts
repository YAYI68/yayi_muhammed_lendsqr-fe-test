import { db } from "../db";

export const nearestThousand = (num: number | undefined) => {
  if (num) return Math.round(num / 1000) * 1000;
};

export const filteredInput = (input: any) => {
  const newInput = Object.keys(input)
    //Filter Object with key for empty values
    .filter((key) => input[key] !== undefined && input[key])
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: input[key],
      });
    }, {});

  return newInput;
};

export const changeUserStatus = async (
  username: string | undefined,
  status: string
) => {
  await db.users.where({ username }).modify({ status });
};

export const dateFormat = (date) => {
  const change = new Date(date);
  const month_year = change.toDateString().slice(4).trim();
  const month = month_year.slice(0, 6).trim();
  const year = month_year.slice(6).trim();
  const time = change.toLocaleTimeString();
  const period = time.slice(-2);
  const hour_min = time.slice(0, 5);
  return `${month}, ${year} ${hour_min} ${period}`;
};
