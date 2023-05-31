import styles from './styles.module.css';
import { CgRename } from 'react-icons/cg';
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
        className={`${styles.action_label} w-100 d-flex justify-content-around text-lg align-items-center cursor-pointer`}
      >
        <CgRename /> <span>Rename</span>
      </div>
    </div>
  );
};

export default ActionMenu;
