import styles from "./styles.module.css";
import { GrCloudComputer } from "react-icons/gr";
const Header = () => {
  return (
    <header className={styles.header_container}>
      <div
        className={`${styles.header} w-100 container d-flex justify-content-between align-items-center`}>
        <h3
          className={`${styles.header_title} d-flex justify-content-center align-items-center m-0 text-lg`}>
          <GrCloudComputer />
          <span>Cloud Storage</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
