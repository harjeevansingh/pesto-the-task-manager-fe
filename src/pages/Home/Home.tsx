import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { AddTaskValidations } from "utils/validations/AddTaskValidations";
import { Task } from "./types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

import "./home.scss";

const InitialState: Task = {
  title: "",
  description: "",
  expiry: "",
};

const Home: React.FC = () => {
  const [myTasks, setMyTasks] = React.useState<Task[]>([]);
  // const [currentTask, setCurrentTask] = React.useState<Task>(InitialState);

  useEffect(() => {
    console.log("My tasks:", myTasks);
  }, [myTasks]);

  const header = () => {
    return (
      <div className="flex content-center mt-10">
        <Typography variant="h2" className="w-full text-center">
          My Tasks
        </Typography>
      </div>
    );
  };

  const {
    values,
    handleChange,
    resetForm,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: InitialState,
    validationSchema: AddTaskValidations,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Values:", values);
      // setMyTasks([...myTasks, values]);
    },
  });

  const handleSubmitTest = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
    setMyTasks([...myTasks, values]);
    resetForm();
    // handleSubmit(); TODO: fix use of this handleSubmit
  };

  const addTask = () => {
    return (
      <div className="flex content-center justify-center w-full">
        <form
          onSubmit={(e) => handleSubmitTest(e)}
          method="POST"
          className="flex flex-col mt-4 justify-center"
        >
          <FormControl className="form-input">
            <InputLabel htmlFor="title">Add a title*</InputLabel>
            <Input
              name="title"
              type="text"
              className="mt-6"
              placeholder="Add a title*"
              value={values.title}
              error={touched.title && !!errors.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.title && (
              <FormHelperText error={true}>{errors.title}</FormHelperText>
            )}
          </FormControl>

          <FormControl className="form-input">
            <InputLabel htmlFor="description">Add a description</InputLabel>
            <Input
              name="description"
              type="text"
              className="mt-6"
              placeholder="Add a task description"
              maxRows={5}
              value={values.description}
              error={touched.description && !!errors.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.description && (
              <FormHelperText error={true}>{errors.description}</FormHelperText>
            )}
          </FormControl>

          <FormControl className="form-input">
            <InputLabel htmlFor="expiry">Add expiry</InputLabel>
            <Input
              name="expiry"
              type="date"
              className="mt-6"
              placeholder="Add expiry"
              value={values.expiry || " "}
              error={touched.expiry && !!errors.expiry}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.expiry && (
              <FormHelperText error={true}>{errors.expiry}</FormHelperText>
            )}
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            className="add-task-btn"
            disabled={!dirty || !isValid}
          >
            Add Task
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {header()}
      {addTask()}
    </div>
  );
};

export default Home;
