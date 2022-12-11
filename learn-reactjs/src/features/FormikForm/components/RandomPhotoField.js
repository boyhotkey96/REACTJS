import { ErrorMessage } from "formik";
import RandomPhoto from "./RandomPhoto";

function RandomPhotoField({ field, form, ...props }) {
  const { onBlur, value, name } = field;
  const { errors, touched } = form;
  const { label } = props;
  console.log(errors)
  console.log(<ErrorMessage name={name} component="div" />)

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
      />
      <ErrorMessage name={name} component="div" />
      {/* {errors && touched ? <div>{errors[name]}</div> : null} */}
    </div>
  );
}

export default RandomPhotoField;
