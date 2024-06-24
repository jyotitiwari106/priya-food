import { Button, TextField } from "@mui/material";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import axios from "axios";
import { useFormik } from "formik";

const Contact = () => {
  // Async function to handle form submission
  const regFn = async (name, lastName, email, number, message) => {
    try {
      const response = await axios.post(
        "https://mstore.bhaaraterp.com/api/store/contact-us-form/",
       
        headers: {
          "Store-Id": 3,
          "Content-Type": "multipart/form-data",
        },
        {
          name,
          lastName,
          email,
          number,
          message,
         
        }
      );
      console.log(response.data);
      alert(response.data.message); // Improved alert message access
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  // Use Formik for form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      // Properly handle form submission
      console.log(values);
      regFn(
        values.name,
        values.lastName,
        values.email,
        values.number,
        values.message
      );
      resetForm(); // Reset form after submission
    },
  });

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-300 h-screen w-full">
        <div className="grid grid-cols-2 bg-white h-[90%] w-[80%]">
          <div className="flex flex-col items-center">
            <h3 className="flex p-4">Contact Us</h3>
            <form
              className="flex flex-col gap-3 mt-5"
              onSubmit={formik.handleSubmit} // Ensure form submission
            >
              <div className="grid grid-cols-2 gap-3">
                <TextField
                  size="small"
                  name="name" // Corrected name field
                  type="text"
                  placeholder="Enter First Name"
                  label="First Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <TextField
                  size="small"
                  placeholder="Enter Last Name"
                  label="Last Name"
                  name="lastName" // Corrected last name field
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
              </div>
              <TextField
                size="small"
                type="email"
                placeholder="Enter Your Email"
                label="Email address"
                name="email" // Added missing name field
                className="w-full"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <TextField
                size="small"
                placeholder="Enter Phone Number"
                label="Phone Number"
                type="text" // Changed type to text for better phone number handling
                name="number" // Added missing name field
                className="w-full"
                value={formik.values.number}
                onChange={formik.handleChange}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Enter Your Messages"
                name="message" // Added missing name field
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              <Button
                variant="contained"
                type="submit" // Ensure button triggers form submission
                className="p-2 mt-3 w-36"
              >
                SUBMIT
              </Button>
            </form>
          </div>
          <div className="flex justify-center items-center p-2">
            <img
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdCUyMGZvcm18ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Contact Us"
              className="p-2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
