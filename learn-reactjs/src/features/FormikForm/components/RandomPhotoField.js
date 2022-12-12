import { ErrorMessage } from "formik";
import RandomPhoto from "./RandomPhoto";

function RandomPhotoField({ field, form, ...props }) {
  const { onBlur, value, name } = field;
  const { errors, touched } = form;
  const showMessage = errors[name] && touched[name];
  const { label } = props;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}:</label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomImageBlur={onBlur}
      // className={showMessage ? "is-invalid" : null}
      />
      <div style={{ color: showMessage ? 'red' : '' }}>
        <ErrorMessage name={name} component="div" />
      </div>
      {/* {errors && touched ? <div>{errors[name]}</div> : null} */}
    </div>
  );
}

export default RandomPhotoField;
