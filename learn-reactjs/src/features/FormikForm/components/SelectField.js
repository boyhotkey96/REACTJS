import { Field } from "formik";

function SelectField({ field, ...props }) {
  const { label, placeholder, isDisable = false, options } = props;
  console.log(placeholder)
  return (
    <div className="form-group">
      {label && <label htmlFor={field.name}>{label}:</label>}
      <Field
        as="select"
        id={field.name}
        {...field}
        disabled={isDisable}
        // placeholder={placeholder}
        defaultValue={'DEFAULT'}
      >
        <option value="DEFAULT" disabled>{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </Field>
    </div>
  );
}

export default SelectField;
