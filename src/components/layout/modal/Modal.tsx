import { useState } from "react";
import css from "./Modal.module.scss";

type ModalProps = {
  active: boolean;
  message: string;
  onConfirm: () => void;
};
const Modal = (props: ModalProps) => {
  const { active, message, onConfirm } = props;
  const [show, setShow] = useState(active);
  return (
    <div className={show ? `${css.mainContainer}` : `${css.hideModal}`}>
      <div className={css.mainWrapper}>
        <div className={`${css.modalWrapper}`}>
          <div className={css.warningMsg}>
            <h3 className={css.heading}>{message} Account</h3>
            <p>Are you sure you want to {message} this account</p>
          </div>
          <div className={css.warnBtn}>
            <button onClick={() => setShow(false)} className={css.cancel}>
              cancel
            </button>
            <button className={css.active} onClick={onConfirm}>
              confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
