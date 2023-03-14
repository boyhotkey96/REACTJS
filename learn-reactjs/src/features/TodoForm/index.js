import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from './InputField';

TodoForm.propTypes = {
  onHandleTodoForm: PropTypes.func,
};

function TodoForm({ onHandleTodoForm }) {
  /* const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value);
  }; */

  const handleOnSubmit = (data) => {
    // prevent reload browser
    // e.preventDefault();

    if (!onHandleTodoForm) return;

    // console.log(data)
    onHandleTodoForm(data);

    // Reset form
    // setValue('');
    form.reset();
  };

  const schema = yup
    .object({
      title: yup
        .string()
        .required('Please enter your title!')
        .min(3, 'Min <= 3')
        .max('15', 'Max <= 15'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      {/* <input value={value} onChange={handleOnChange} /> */}
      <InputField form={form} name="title" label="To do" />
    </form>
  );
}

export default TodoForm;
