import styles from "./styles.module.css";
import { MdOutlineAdd } from "react-icons/md";
import folderImage from "public/assets/images/folder.png";
import fileImage from "public/assets/images/file.png";
import Image from "next/image";
import { useContext } from "react";
import { FileAndFolderContext } from "@/context/FileandFolderContext";

const FIleAndFolderListing = ({
  currentPath = "",
  setCurrentPath = () => {},
}) => {
  const { state } = useContext(FileAndFolderContext);
  const { filesAndFolders } = state;
  return (
    <section className="container">
      <div className={`${styles.file_and_floder_list_container} w-100 d-flex`}>
        {filesAndFolders
          .filter((item) => item.path === currentPath)
          .map((item, index) =>
            item.type === "folder" ? (
              <div
                onClick={() => setCurrentPath(item.internalPath)}
                key={index}
                className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center`}>
                <Image src={folderImage} alt="folder" width={80} height={80} />
                <p className={`${styles.margin_0} text-md`}>{item.name}</p>
              </div>
            ) : (
              <div
                key={index}
                className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center`}>
                <Image src={fileImage} alt="file" width={80} height={80} />
                <p
                  className={`${styles.margin_0} ${styles.margin_top_5} text-md`}>
                  {item.name}
                </p>
              </div>
            )
          )}
        <div
          className={`${styles.file_or_folder_div} d-flex justify-content-center align-items-center`}>
          <div
            className={`${styles.add_btn} d-flex justify-content-center align-items-center`}>
            <MdOutlineAdd className={`${styles.add_icon} display-md`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FIleAndFolderListing;
