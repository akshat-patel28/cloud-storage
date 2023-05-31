import styles from './styles.module.css';
import { MdOutlineAdd } from 'react-icons/md';
import folderImage from 'public/assets/images/folder.png';
import fileImage from 'public/assets/images/file.png';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FileAndFolderContext } from '@/context/FileandFolderContext';
import dynamic from 'next/dynamic';
const RenameFormModal = dynamic(() => import('../form-modal/RenameFormModal'), {
  ssr: false,
  loading: () => <div></div>,
});
const FormModal = dynamic(() => import('../form-modal/FormModal'), {
  ssr: false,
  loading: () => <div></div>,
});

const FIleAndFolderListing = ({
  currentPath = '',
  setCurrentPath = () => {},
}) => {
  const { state } = useContext(FileAndFolderContext);
  const { filesAndFolders } = state;
  const [showFormModal, setShowFormModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [currentSeletedFileOrFolder, setCurrentSelectedFileOrFolder] = useState(
    {}
  );
  return (
    <section className="container">
      <div className={`${styles.file_and_floder_list_container} w-100 d-flex`}>
        {filesAndFolders
          .filter((item) => item.path === currentPath)
          .map((item, index) =>
            item.type === 'folder' ? (
              <div
                onContextMenu={(e) => {
                  e.preventDefault();
                  setShowRenameModal(true);
                  setCurrentSelectedFileOrFolder(item);
                }}
                onDoubleClick={() => setCurrentPath(item.internalPath)}
                key={index}
                className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center cursor-pointer`}
              >
                <Image src={folderImage} alt="folder" width={80} height={80} />
                <p
                  className={`${styles.margin_0} text-md ${styles.file_folder_name_text}`}
                >
                  {item.name}
                </p>
              </div>
            ) : (
              <div
                onContextMenu={(e) => {
                  e.preventDefault();
                  setShowRenameModal(true);
                  setCurrentSelectedFileOrFolder(item);
                }}
                key={index}
                className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center`}
              >
                <Image src={fileImage} alt="file" width={80} height={80} />
                <p
                  className={`${styles.margin_0} ${styles.margin_top_5} text-md ${styles.file_folder_name_text}`}
                >
                  {item.name}
                </p>
              </div>
            )
          )}
        <div
          className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center`}
        >
          <div
            className={`${styles.add_btn} d-flex justify-content-center align-items-center`}
            onClick={() => setShowFormModal(true)}
          >
            <MdOutlineAdd className={`${styles.add_icon} display-md`} />
          </div>
        </div>
      </div>
      {showFormModal && (
        <FormModal
          setShowFormModal={setShowFormModal}
          showFormModal={showFormModal}
          currentPath={currentPath}
        />
      )}
      {showRenameModal && (
        <RenameFormModal
          setShowFormModal={setShowRenameModal}
          showFormModal={showRenameModal}
          currentSeletedFileOrFolder={currentSeletedFileOrFolder}
        />
      )}
    </section>
  );
};

export default FIleAndFolderListing;
