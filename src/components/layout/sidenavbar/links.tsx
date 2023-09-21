import {
  AuditIcon,
  BriefCase,
  CoinIcon,
  FeePricingIcon,
  GuarantorIcon,
  HandShake,
  KarmaIcon,
  LoanIcon,
  LoanProductIcon,
  LoanRequestIcon,
  PreferencesIcon,
  ReportIcon,
  SavingIcon,
  SavingProductIcon,
  ServiceIcon,
  ServiceProductIcon,
  SettlementIcon,
  TransactionIcon,
  UserIcon,
  WaitListIcon,
} from "../../ui/svg";
import SystemIcon from "../../ui/svg/SystemIcon";

export const SectionLinks = [
  {
    section: "CUSTOMERS",
    links: [
      {
        name: "User",
        url: "/users",
        icon: <UserIcon className="" />,
      },
      {
        name: "Guarantors",
        url: "/guarantor",
        icon: <GuarantorIcon className="" />,
      },
      {
        name: "Loans",
        url: "/loans",
        icon: <LoanIcon className="" />,
      },
      {
        name: "Decision Models",
        url: "/decision_model",
        icon: <HandShake className="" />,
      },
      {
        name: "Savings",
        url: "/savings",
        icon: <SavingIcon className="" />,
      },
      {
        name: "Loan Requests",
        url: "/loan_request",
        icon: <LoanRequestIcon className="" />,
      },
      {
        name: "Whitelist",
        url: "/whitelist",
        icon: <WaitListIcon className="" />,
      },
      {
        name: "Karma",
        url: "/karma",
        icon: <KarmaIcon className="" />,
      },
    ],
  },
  {
    section: "BUSINESSES",
    links: [
      {
        name: "Organization",
        url: "/organization",
        icon: <BriefCase className="" />,
      },
      {
        name: "Loan Products",
        url: "/loan_product",
        icon: <LoanProductIcon className="" />,
      },
      {
        name: "Savings Products",
        url: "/saving_products",
        icon: <SavingProductIcon className="" />,
      },
      {
        name: "Fees and Charges",
        url: "/fees_charges",
        icon: <CoinIcon className="" />,
      },
      {
        name: "Transaction",
        url: "/transaction",
        icon: <TransactionIcon className="" />,
      },
      {
        name: "Services",
        url: "/services",
        icon: <ServiceIcon className="" />,
      },
      {
        name: "Service Account",
        url: "/service_account",
        icon: <ServiceProductIcon className="" />,
      },
      {
        name: "Settlements",
        url: "/settlement",
        icon: <SettlementIcon className="" />,
      },
      {
        name: "Reports",
        url: "/reports",
        icon: <ReportIcon className="" />,
      },
    ],
  },
  {
    section: "SETTINGS",
    links: [
      {
        name: "Preferences",
        url: "/preference",
        icon: <PreferencesIcon className="" />,
      },
      {
        name: "Fees and Pricing",
        url: "/fee_pricing",
        icon: <FeePricingIcon className="" />,
      },
      {
        name: "Audit and Logs",
        url: "/audit_log",
        icon: <AuditIcon className="" />,
      },
      {
        name: "System Messages",
        url: "/system_messages",
        icon: <SystemIcon className="" />,
      },
    ],
  },
];
