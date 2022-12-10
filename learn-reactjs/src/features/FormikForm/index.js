import { FastField, Form, Formik } from "formik";
import InputFiedld from "./components/InputFiedld";
import RandomPhotoField from "./components/RandomPhotoField";
import SelectField from "./components/SelectField";
import { COLOR_LIST } from "./constant";
import "./style.scss";

function FormikForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
  };

  return (
    <>
      <h1>Formik</h1>
      <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          // console.log(values);

          return (
            <Form>
              <FastField
                name="firstname"
                component={InputFiedld}
                // isDisable={true}
                label="First name"
                placeholder="Enter first name"
              />
              <FastField
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
              />
              <FastField
                name="category"
                component={SelectField}
                // isDisable={true}
                label="Category"
                placeholder="-- Choose color --"
                options={COLOR_LIST}
              />
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
