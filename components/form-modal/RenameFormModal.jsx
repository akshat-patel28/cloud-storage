import { Form, Formik } from 'formik';
import styles from './styles.module.css';
import { IoCloseCircle } from 'react-icons/io5';
import { MdOutlineError } from 'react-icons/md';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import {
  CREATE_NEW_FILE_OR_FOLDER_ACTION,
  FileAndFolderContext,
} from '@/context/FileandFolderContext';
const initialValues = {
  fileName: '',
};
const validationSchema = Yup.object().shape({
  fileName: Yup.string().required('Required !!!'),
});
const RenameFormModal = ({
  showFormModal,
  setShowFormModal,
  currentSeletedFileOrFolder,
}) => {
  console.log(currentSeletedFileOrFolder);
  const { state, dispatch } = useContext(FileAndFolderContext);
  const { filesAndFolders } = state;
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = (values) => {
    const data = {
      path: currentPath,
      id:
        values.fileName.toLowerCase().replace(' ', '') +
        Math.random().toString(),
      type: values.fileType,
      name: values.fileName,
      internalPath: '',
    };
    if (values.fileType === 'folder') {
      data.internalPath = `${
        currentPath !== '/' ? currentPath : ''
      }/${values.fileName.toLowerCase().replace(' ', '')}`;
    }
    dispatch({
      type: CREATE_NEW_FILE_OR_FOLDER_ACTION,
      payload: [...filesAndFolders, data],
    });
    setShowFormModal(false);
  };
  return (
    <div
      className={`${styles.modal_container} w-100 h-100 ${
        showFormModal ? styles.active_modal : ''
      } d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.rename_form_container} position-relative d-flex justify-content-center align-items-center`}
      >
        <IoCloseCircle
          className={`${styles.close_icon} position-absolute cursor-pointer `}
          onClick={() => setShowFormModal(false)}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
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
                  Rename File / Folder
                </p>
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
                        setErrorMessage('Name already exists !!!');
                      } else setErrorMessage('');
                    }}
                    onBlur={handleBlur}
                    placeholder="New name"
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
                  type="submit"
                >
                  Rename
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RenameFormModal;
