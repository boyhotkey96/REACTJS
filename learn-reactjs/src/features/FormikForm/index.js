import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as yup from 'yup';
import InputFiedld from "./components/InputFiedld";
import RandomPhotoField from "./components/RandomPhotoField";
import SelectField from "./components/SelectField";
import { COLOR_LIST } from "./constant";
import "./style.scss";

function FormikForm() {
  const initialValues = {
    title: "",
    category: undefined,
    photo: "",
  };

  let validationSchema = yup.object().shape({
    title: yup.string().required('This is required'),
    category: yup.number().required('This is required'),
    photo: yup.string().required('Choose photo'),
  })
  // validationSchema
  //   .isValid({
  //     title: "",
  //     category: 1,
  //   })
  //   .then((valid) => {
  //     console.log(valid)
  //   })

  return (
    <>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log(errors);

          return (
            <Form>
              <FastField
                name="title"
                component={InputFiedld}
                // isDisable={true}
                label="Title"
                placeholder="Enter title"
              />
              {/* {errors.title && touched.title ? <span>{errors.title}</span> : null} */}
              {/* <FastField
                name="lastname"
                component={InputFiedld}
                label="Last name"
                placeholder="Enter last name"
              />
              <FastField
                name="mail"
                component={InputFiedld}
                type="email"
                label="Email"
                placeholder="Enter email"
              />
              <FastField
                name="password"
                component={InputFiedld}
                type="password"
                label="Password"
                placeholder="Enter password"
              /> */}
              <FastField
                name="category"
                component={SelectField}
                // isDisable={true}
                label="Category"
                placeholder="-- Choose color --"
                options={COLOR_LIST}
              />
              {/* {errors.title && touched.title ? <FormFeedback>{errors.title}</FormFeedback> : null} */}
              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />
              <button className="btn btn-submit" type="submit">Add to album</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormikForm;
