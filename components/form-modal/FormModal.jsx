import { Form, Formik } from "formik";
import styles from "./styles.module.css";
import { IoCloseCircle } from "react-icons/io5";
import folderImage from "public/assets/images/folder.png";
import fileImage from "public/assets/images/file.png";
import Image from "next/image";
import { MdOutlineError } from "react-icons/md";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { FileAndFolderContext } from "@/context/FileandFolderContext";
const initialValues = {
  fileType: "folder",
  fileName: "",
};
const validationSchema = Yup.object().shape({
  fileType: Yup.string().required(),
  fileName: Yup.string().required("Required !!!"),
});
const FormModal = ({ showFormModal, setShowFormModal }) => {
  const { state } = useContext(FileAndFolderContext);
  const { filesAndFolders } = state;
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div
      className={`${styles.modal_container} w-100 h-100 ${
        showFormModal ? styles.active_modal : ""
      } d-flex justify-content-center align-items-center`}>
      <div
        className={`${styles.form_container} position-relative d-flex justify-content-center align-items-center`}>
        <IoCloseCircle
          className={`${styles.close_icon} position-absolute cursor-pointer `}
          onClick={() => setShowFormModal(false)}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({
            handleSubmit,
            handleBlur,
            values,
            handleChange,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit} className="w-100">
              <div className={`${styles.fields_container}`}>
                <p className={`${styles.form_title} text-xl font-bold`}>
                  Create New
                </p>
                <div>
                  <div
                    className={`${styles.file_type_fileds_container} d-flex justify-content-center`}>
                    <div
                      className={`${
                        styles.imgae_container
                      } d-flex justify-content-around align-items-center cursor-pointer ${
                        values.fileType === "folder" ? styles.seleted_type : ""
                      }`}
                      onClick={() => setFieldValue("fileType", "folder")}>
                      <Image
                        src={folderImage}
                        alt="folder"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div
                      className={`${
                        styles.imgae_container
                      } d-flex justify-content-around align-items-center cursor-pointer ${
                        values.fileType === "file" ? styles.seleted_type : ""
                      }`}
                      onClick={() => setFieldValue("fileType", "file")}>
                      <Image
                        src={fileImage}
                        alt="file"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="fileName"
                    value={values.fileName}
                    onChange={(e) => {
                      handleChange(e);
                      const record = filesAndFolders.filter(
                        (item) =>
                          item.name.toLowerCase() ===
                          e.target.value.toLowerCase()
                      );
                      if (record.length) {
                        setErrorMessage("Name already exists !!!");
                      } else setErrorMessage("");
                    }}
                    onBlur={handleBlur}
                    placeholder={
                      values.fileType === "file" ? "File Name" : "Folder Name"
                    }
                    className={`${styles.input_field} w-100`}
                  />
                  <div className={`${styles.field_error_container} text-sm`}>
                    {errorMessage ? (
                      <span className="d-flex align-items-center">
                        <MdOutlineError />
                        &nbsp;{errorMessage}
                      </span>
                    ) : null}
                    {errors.fileName && touched.fileName ? (
                      <span className="d-flex align-items-center">
                        <MdOutlineError />
                        &nbsp;{errors.fileName}
                      </span>
                    ) : null}
                  </div>
                </div>

                <button
                  disabled={errorMessage}
                  className={`${styles.form_button} cursor-pointer text-md font-bold`}
                  type="submit">
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormModal;
