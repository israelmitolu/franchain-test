import { FormDataTypes, FormErrorsTypes } from "../types";

export const validateForm = (formData: FormDataTypes): FormErrorsTypes => {
  const errors: FormErrorsTypes = {
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  };

  // First Name validation
  if (!formData.firstName.trim()) {
    errors.firstName = "First Name is required";
  }

  // Last Name validation
  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }

  // Business Name validation
  if (!formData.businessName.trim()) {
    errors.businessName = "Business Name is required";
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  // Password validation
  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 12) {
    errors.password = "Password must be at least 12 characters";
  }

  return errors;
};
