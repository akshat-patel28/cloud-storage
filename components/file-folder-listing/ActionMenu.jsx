import styles from './styles.module.css';
import { CgRename } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteFileOrFolderAction } from '@/redux/file-folder-redux/action.file-folder-redux';
import { useDispatch, useSelector } from 'react-redux';
const ActionMenu = ({
  menuId,
  setShowRenameModal,
  openActionMenuId,
  setOpenActionMenuId,
  currentSeletedFileOrFolder,
}) => {
  const { filesAndFolders } = useSelector((state) => state.fileAndFolderRedux);
  const dispatch = useDispatch();
  const deleteFileOrFolder = () => {
    const filteredData = filesAndFolders.filter(
      (item) =>
        item.id !== menuId &&
        !item.path.includes(
          currentSeletedFileOrFolder.name.toLowerCase().trim()
        )
    );
    dispatch(deleteFileOrFolderAction(filteredData));
  };
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
        onClick={() => deleteFileOrFolder()}
        className={`${styles.action_label} ${styles.delete_action} w-100 d-flex  text-lg align-items-center cursor-pointer`}
      >
        <FaRegTrashAlt /> <span>Delete</span>
      </div>
    </div>
  );
};

export default ActionMenu;
