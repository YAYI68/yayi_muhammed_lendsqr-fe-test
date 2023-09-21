import { ActiveUserSvg, UserLoanSvg, UserSavingSvg, UserSvg } from "../ui/svg";

export const AllCards = [
  {
    icon: <UserSvg />,
    info: "Users",
    figure: "2,453",
    bg_color: "rgba(223, 24, 255, .1)",
  },
  {
    icon: <ActiveUserSvg />,
    info: "Active Users",
    figure: "2,453",
    bg_color: "rgba(87, 24, 255, .1)",
  },
  {
    icon: <UserLoanSvg />,
    info: "Users with Loans",
    figure: "12,453",
    bg_color: "rgba(245, 95, 68, .1)",
  },
  {
    icon: <UserSavingSvg />,
    info: "Users with Savings",
    figure: "102,453",
    bg_color: "rgba(255, 51, 102, .1)",
  },
];
