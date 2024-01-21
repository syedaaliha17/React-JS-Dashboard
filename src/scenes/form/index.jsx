import { Box, useTheme, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  Email: "",
  Address1: "",
  Address1: "",
  Address2: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  Email: yup.string().email("Invalid Email").required("required"),
  Address1: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  Address1: yup.string().required("required"),
  Address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSumit,
        }) => (
          <form onSubmit={handleSumit}>
            <Box
              display="grid"
              gap="30px"
              m="25px 0 0 0"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="laststName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Email}
                name="Email"
                error={!!touched.Email && !!errors.Email}
                helperText={touched.Email && errors.Email}
                sx={{
                  gridColumn: "span 2",
                }}
              />{" "}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Contact}
                name="Contact"
                error={!!touched.Contact && !!errors.Contact}
                helperText={touched.Contact && errors.Contact}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Address1}
                name="Address1"
                error={!!touched.Address1 && !!errors.Address1}
                helperText={touched.Address1 && errors.Address1}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Address2}
                name="Address2"
                error={!!touched.Address2 && !!errors.Address2}
                helperText={touched.Address2 && errors.Address2}
                sx={{
                  gridColumn: "span 2",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
