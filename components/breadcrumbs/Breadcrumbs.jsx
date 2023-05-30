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
          .map((path, index) => (
            <span
              key={index}
              className="text-lg font-bold cursor-pointer"
              onClick={() => {
                if (currentPath.indexOf("/", currentPath.indexOf(path)) > 0) {
                  setCurrentPath(
                    currentPath.substring(
                      0,
                      currentPath.indexOf("/", currentPath.indexOf(path))
                    )
                  );
                }
              }}>
              /&nbsp;{path} &nbsp;
            </span>
          ))}
      </div>
    </section>
  );
};

export default Breadcrumbs;
