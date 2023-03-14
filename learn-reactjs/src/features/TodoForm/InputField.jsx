import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {};

function InputField({ form, name, label }) {
  const { control, formState } = form;

  const hasErrors = formState.touchedFields[name] && formState.errors[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          id="outlined-basic"
          label={label}
          placeholder="Enter title"
          variant="outlined"
          error={!!hasErrors}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
