import * as Yup from "yup";

export const userValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  userName: Yup.string().required("User Name is required"),
  email: Yup.string() .email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  dob: Yup.string().required("DOB is required"),
  address: Yup.string().required("Address is required"),
  permanantAddress: Yup.string().required("Permanent Address is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});
