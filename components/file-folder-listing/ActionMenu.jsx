import styles from './styles.module.css';
import { CgRename } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
const ActionMenu = ({
  menuId,
  setShowRenameModal,
  openActionMenuId,
  setOpenActionMenuId,
}) => {
  if (menuId !== openActionMenuId) {
    return <></>;
  }
  return (
    <div className={`${styles.menu_container} position-absolute`}>
      <div
        onClick={() => {
          setShowRenameModal(true);
          setOpenActionMenuId('');
        }}
        className={`${styles.action_label} w-100 d-flex  text-lg align-items-center cursor-pointer`}
      >
        <CgRename /> <span>Rename</span>
      </div>
      <div
        className={`${styles.action_label} ${styles.delete_action} w-100 d-flex  text-lg align-items-center cursor-pointer`}
      >
        <FaRegTrashAlt /> <span>Delete</span>
      </div>
    </div>
  );
};

export default ActionMenu;
