import * as Yup from "yup";

export const AddTaskValidations = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title should be at least 3 characters"),
  description: Yup.string()
    .min(3, "Description should be at least 3 characters")
    .max(100, "Description should not exceed 100 characters"),
  expiry: Yup.date().min(new Date(), "Expiry should not be older than today"),
});
