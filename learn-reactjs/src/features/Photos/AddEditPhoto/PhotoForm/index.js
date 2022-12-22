import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { COLOR_LIST } from "../constant";
import "../style.scss";
import InputFiedld from "./components/InputFiedld";
import RandomPhotoField from "./components/RandomPhotoField";
import SelectField from "./components/SelectField";

function PhotoForm(props) {
  // const initialValues = {
  //   title: "",
  //   category: undefined,
  //   photo: "",
  // };
  const { initialValues, isAddMode } = props;

  let validationSchema = Yup.object().shape({
    title: Yup.string().required("This is required"),
    category: Yup.number().required("This is required"),
    photo: Yup.string().when("category", {
      is: 1,
      then: Yup.string().required("Choose photo"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  // validationSchema
  //   .isValid({
  //     title: "",
  //     category: 1,
  //   })
  //   .then((valid) => {
  //     console.log(valid)
  //   })

  if (!initialValues) {
    return <p>404</p>
  }

  return (
    <>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          props.onSubmit(values).then(() => {
            // actions.setSubmitting(false)
            actions.resetForm({});
          });
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps;
          // console.log(formikProps);

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
              {/* {isSubmitting ? (
                <button className="btn btn-loading">Loading...</button>
              ) : ( */}
              <button
                disabled={isSubmitting}
                style={{ backgroundColor: props.isAddMode ? 'blue' : 'green' }}
                className="btn btn-submit"
                type="submit"
              >
                {isAddMode
                  ? isSubmitting
                    ? "Adding"
                    : "Add to album"
                  : isSubmitting
                    ? "Updating"
                    : "Update to your photo"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default PhotoForm;
