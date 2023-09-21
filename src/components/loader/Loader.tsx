import css from "./Loader.module.scss";

type LoaderProps = {
  className: string;
};

const Loader = (props: LoaderProps) => {
  return <span className={`${css.loader} ${props.className}`}></span>;
};

export default Loader;
