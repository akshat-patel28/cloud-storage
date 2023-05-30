import styles from "./styles.module.css";
import { IoCloseCircle } from "react-icons/io5";

const FormModal = ({ showFormModal, setShowFormModal }) => {
  return (
    <div
      className={`${styles.modal_container} w-100 h-100 ${
        showFormModal ? styles.active_modal : ""
      } d-flex justify-content-center align-items-center`}>
      <div className={`${styles.form_container} position-relative`}>
        <IoCloseCircle
          className={`${styles.close_icon} position-absolute cursor-pointer `}
          onClick={() => setShowFormModal(false)}
        />
      </div>
    </div>
  );
};

export default FormModal;
