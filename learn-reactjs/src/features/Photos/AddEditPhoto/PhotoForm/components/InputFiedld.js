import { ErrorMessage, Field } from "formik";

function InputFiedld({ field, form,  ...props }) {
  const { onChange, onBlur, value, name } = field;
  const { errors, touched } = form;
  const showMessage = errors[name] && touched[name];
  const { label, placeholder, type = "text", isDisable = false } = props;

  return (
    <div className="form-group">
      {label && <label htmlFor={field.name}>{label}:</label>}
      <Field
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisable}
        type={type}
        placeholder={placeholder}
        className={showMessage ? "is-invalid" : ""}
      />
      {/* <div className={form.errors && 'is-invalid'}></div> */}
      <ErrorMessage name={name} component="div" />
    </div>
  );
}

export default InputFiedld;
