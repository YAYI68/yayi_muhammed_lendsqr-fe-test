import React, { useRef } from "react";
import css from "./Form.module.scss";
import { StraightArrowDownIcon } from "../ui/svg";
import { useState } from "react";
import { useClickAway } from "../../hooks";

type SelectProps = {
  placeholder: string;
  options?: string[];
  value?: string;
  selectValue: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput = (props: SelectProps) => {
  const OptionRef = useRef<HTMLDivElement>(null);
  const { options, value, selectValue, placeholder } = props;
  const [toggle, setToggle] = useState(false);
  useClickAway(OptionRef, () => setToggle(false));
  const handleClick = (option: string) => {
    selectValue(option);
    setToggle(false);
  };
  return (
    <div className={css.select_wrapper}>
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className={css.selectBtn}
      >
        <span>{value ? value : placeholder}</span>
        <StraightArrowDownIcon className="" />
      </button>
      {toggle ? (
        <div ref={OptionRef} className={css.option_wrapper}>
          <button onClick={() => handleClick("")}>default</button>
          {options?.map((option) => (
            <button onClick={() => handleClick(option)} key={option}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectInput;
