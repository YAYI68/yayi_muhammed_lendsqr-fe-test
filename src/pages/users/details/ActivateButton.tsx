import css from "./UserDetail.module.scss";

type ButtonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
};

const ActivateButton = (props: ButtonProps) => {
  const { name, onClick } = props;
  return (
    <button onClick={onClick} className={`${css.btn} ${props.className}`}>
      <span>{name}</span>
    </button>
  );
};

export default ActivateButton;
