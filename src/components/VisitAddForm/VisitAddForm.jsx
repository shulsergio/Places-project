import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./VisitAddForm.module.css";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import { addVisit, fetchVisits } from "../../redux/visits/operations";

const VisitAddForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("* required")
      .min(3, "* required- min 3 symblols")
      .max(20, "Name must be 20 characters or less"),
    city: Yup.string()
      .required("* city required")
      .min(3, "* required- min 3 symblols")
      .max(50, "City must be 50 characters or less"),
    country: Yup.string()
      .required("* required")
      .min(3, "* required- min 3 symblols")
      .max(50, "City must be 50 characters or less"),
    description: Yup.string().max(
      500,
      "Description must be 500 characters or less"
    ),
    isFavourite: Yup.boolean().required("* required"),
  });
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    city: "",
    country: "",
    description: "",
    isFavourite: false,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await dispatch(
      addVisit({
        name: values.name,
        city: values.city,
        country: values.country,
        description: values.description,
        isFavourite: values.isFavourite,
      })
    );
    console.log("New Visit:", values);
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Your visit added!");
      await dispatch(fetchVisits());
      resetForm();
    } else {
      toast.error("Failed to add visit. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name">Place:</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name of the place"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="city">City:</label>
          <Field
            type="text"
            id="city"
            name="city"
            placeholder="Enter city of this place"
          />
          <ErrorMessage name="city" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="country">Country:</label>
          <Field
            type="text"
            id="country"
            name="country"
            placeholder="Enter country of this place"
          />
          <ErrorMessage name="country" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="description">Description:</label>
          <Field
            as="textarea"
            id="description"
            name="description"
            rows="2"
            className={css.textarea}
            placeholder="Enter your comments of this place"
          />
          <ErrorMessage
            name="description"
            component="div"
            className={css.error}
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="isFavourite" className={css.checkbox}>
            <Field type="checkbox" id="isFavourite" name="isFavourite" />
            Favourite
          </label>
        </div>
        <div className={css.submitButtonDiv}>
          <button className={css.submitButton} type="submit">
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default VisitAddForm;
