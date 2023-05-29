import styles from "./styles.module.css";

const FormModal = ({ showFormModal, setShowFormModal }) => {
  return (
    <div
      className={`${styles.modal_container} w-100 h-100 ${
        showFormModal ? styles.active_modal : ""
      }`}>
      <span onClick={() => setShowFormModal(false)}>close</span>
    </div>
  );
};

export default FormModal;
