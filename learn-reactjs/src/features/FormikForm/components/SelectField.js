import { Field } from "formik";

function SelectField({ field, form, ...props }) {
  const { name } = field;
  const { errors, touched } = form;
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
      {errors && touched ? <div>{errors[name]}</div> : null}
    </div>
  );
}

export default SelectField;
