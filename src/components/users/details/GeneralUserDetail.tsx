import { nearestThousand } from "../../../utils";
import { UserType } from "../../types";
import css from "./UserProfile.module.scss";

type infoProps = {
  heading: string;
  content: string | number | undefined;
};
const Information = (props: infoProps) => {
  return (
    <div className={css.infoWrapper}>
      <p className={css.infoHeading}>{props.heading}</p>
      <p className={css.infoContent}>{props.content}</p>
    </div>
  );
};

type GeneralUserProps = {
  user: UserType;
};
const GeneralUserDetail = (props: GeneralUserProps) => {
  const { user } = props;
  const mothlyIncome = nearestThousand(user?.montly_income);
  const loanRepayment = nearestThousand(user?.loan_repayment);
  return (
    <section className={css.generalContainer}>
      <div id="personal" className={css.personalWrapper}>
        <p className={css.info_heading}>Personal Information</p>
        <div className={css.infomationContainer}>
          <Information heading="Full Name" content={user.full_name} />
          <Information heading="Phone Number" content={user.phone_number} />
          <Information heading="Email Address" content={user.email} />
          <Information heading="Bvn" content={user.bvn} />
          <Information heading="Gender" content={user.gender} />
          <Information heading="Marital status" content={user.marital_status} />
          <Information heading="Children" content={user.children ?? "None"} />
          <Information
            heading="Type of residence"
            content={
              user.residence_type ? user.residence_type : "Parent’s Apartment"
            }
          />
        </div>
      </div>
      <div id="personal" className={css.personalWrapper}>
        <p className={css.info_heading}>Education and Employment</p>
        <div className={css.infomationContainer}>
          <Information
            heading="level of education"
            content={user.education_level ? user.education_level : "B.sc"}
          />
          <Information
            heading="Employment Status"
            content={user.employment_status}
          />
          <Information
            heading="sector of employment"
            content={user.employment_sector}
          />
          <Information
            heading="Duration of employment"
            content={`${user.employment_duration} years`}
          />
          <Information heading="office email" content={user.office_email} />
          <Information
            heading="Monthly income"
            content={`₦${mothlyIncome}- ₦400000`}
          />
          <Information heading="loan repayment" content={loanRepayment} />
        </div>
      </div>
      <div id="personal" className={css.personalWrapper}>
        <p className={css.info_heading}>Socials</p>
        <div className={css.infomationContainer}>
          <Information heading="Twitter" content={`@${user.username}`} />
          <Information heading="Facebook" content={user.username} />
          <Information heading="Instagram" content={`@${user.username}`} />
        </div>
      </div>
      <div id="personal" className={`${css.personalWrapper}`}>
        <p className={css.info_heading}>Guarantor</p>
        <div className={css.infomationContainer}>
          <Information heading="full Name" content={user.guarantor_fullname} />
          <Information
            heading="Phone Number"
            content={user.guarantor_phonenumber}
          />
          <Information heading="Email Address" content={user.email} />
          <Information
            heading="Relationship"
            content={
              user.guarantor_relationship
                ? user.guarantor_relationship
                : "Parent"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default GeneralUserDetail;
