import { Field } from "formik";

function InputFiedld({ field, form,...props }) {
  const { onChange, onBlur, value, name } = field;
  const { label, placeholder, type = 'text', isDisable = false  } = props;

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
      />
    </div>
  )
}

export default InputFiedld