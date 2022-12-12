import { Field } from "formik";

function SelectField({ field, form, ...props }) {
  const { name } = field;
  const { errors, touched } = form;
  const showMessage = errors[name] && touched[name];
  const { label, placeholder, isDisable = false, options } = props;
  console.log(form);
  
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}:</label>}
      <Field
        as="select"
        id={name}
        {...field}
        disabled={isDisable}
        // placeholder={placeholder}
        defaultValue={"DEFAULT"}
        className={showMessage ? 'is-invalid' : ''}
      >
        <option value="DEFAULT" disabled>
          {placeholder}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Field>
      {showMessage ? <div>{errors[name]}</div> : null}
    </div>
  );
}

export default SelectField;
