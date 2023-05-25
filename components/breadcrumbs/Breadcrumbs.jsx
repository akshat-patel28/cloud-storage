import styles from "./styles.module.css";
import { RiHome2Fill } from "react-icons/ri";
const Breadcrumbs = ({ currentPath = "", setCurrentPath = () => {} }) => {
  return (
    <section className="container">
      <div
        className={`${styles.breadcrumbs_container}  d-flex align-items-center w-100`}>
        <RiHome2Fill
          className="text-xl cursor-pointer"
          onClick={() => setCurrentPath("/")}
        />
        &nbsp;
        {currentPath === "/" && <span className="text-lg font-bold ">/</span>}
        {currentPath
          .split("/")
          .filter((path) => path !== "")
          .map((path) => (
            <span
              className="text-lg font-bold cursor-pointer"
              onClick={() => setCurrentPath(`/${path}`)}>
              /&nbsp;{path}
            </span>
          ))}
      </div>
    </section>
  );
};

export default Breadcrumbs;
