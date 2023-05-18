import styles from "./styles.module.css";
import { MdOutlineAdd } from "react-icons/md";
const FIleAndFolderListing = () => {
  return (
    <section className="container">
      <div className={`${styles.file_and_floder_list_container} w-100 d-flex`}>
        <div
          className={`${styles.add_btn} d-flex justify-content-center align-items-center`}>
          <MdOutlineAdd className={`${styles.add_icon} display-md`} />
        </div>
      </div>
    </section>
  );
};

export default FIleAndFolderListing;
