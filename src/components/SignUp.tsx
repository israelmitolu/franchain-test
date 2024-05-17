import { useState } from "react";
import GradientBg from "../../public/images/Gradient BG.png";
import DashboardImg from "../../public/icons/Sign up screen SVG.svg";
import { FormDataTypes, FormErrorsTypes } from "../types";
import { validateForm } from "../utils/formValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorsTypes>({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const errors = validateForm(formData);
      setFormErrors(errors);

      const hasNoErrors = Object.values(errors).every((value) => value === "");

      if (hasNoErrors) {
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Account created successfully");
          setFormData({
            firstName: "",
            lastName: "",
            businessName: "",
            email: "",
            password: "",
          });
        }, 2000);
      } else {
        setIsLoading(false);
      }
    }, 0);
  };

  return (
    <section>
      <img
        alt=""
        src={GradientBg}
        className="fixed top-0 left-0 inset-0 h-full w-[50vw] object-cover pointer-events-none"
      />
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div className="flex-center  bg-[#DFEAF0] lg:col-span-5 h-full xl:col-span-6">
          <div className="z-[1] flex flex-col items-center text-center max-w-[553px] ">
            <img src={DashboardImg} alt="" className="w-full h-[304.68px]" />
            <h2 className="mb-[13px] mt-[34px] font-medium text-[40px] leading-[52.08px]">
              Royalty collections, <br /> simplified. It's next level!
            </h2>
            <p className="text-[22px] leading-[28.64px] w-[420px]">
              Revenue based invoice collection to make royalty collection as
              easy as...
            </p>
          </div>
        </div>

        <div className="flex mt-[10vh] px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="font-medium text-[35px] leading-[45.57px]">
              Get started with Franchain
            </h1>
            <p className="text-[20px] leading-[26.04px] mt-[10px]">
              Create an account in 5 minutes
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 w-full flex flex-col items-center justify-between gap-5"
            >
              <div className="w-full">
                <label
                  htmlFor="FirstName"
                  className="block text-base mb-[10px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                />
                {formErrors.firstName && (
                  <p className="error-message">{formErrors.firstName}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="LastName" className="block text-base mb-[10px]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                />
                {formErrors.lastName && (
                  <p className="error-message">{formErrors.lastName}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="businessName"
                  className="block text-base mb-[10px]"
                >
                  Business name and HQ location
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="form-input"
                />
                {formErrors.businessName && (
                  <p className="error-message">{formErrors.businessName}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="workEmail"
                  className="block text-base mb-[10px]"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="Password" className="block text-base mb-[10px]">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                />
                {formErrors.password && (
                  <p className="error-message">{formErrors.password}</p>
                )}
              </div>

              <div className="self-start mt-[10px]">
                <button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Sign Up"}
                </button>
              </div>

              <ToastContainer />

              <div className="w-full mt-[10px]">
                <p className="text-sm leading-[18.23px]">
                  By clicking "Start Application", I agree to Mercury's{" "}
                  <a
                    href="https://mercury.com/legal/terms"
                    target="_blank"
                    className="underline"
                  >
                    Terms of Use
                  </a>
                  ,{" "}
                  <a
                    href="https://mercury.com/legal/privacy"
                    target="_blank"
                    className="underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and to receive electronic communication about my accounts and
                  services per{" "}
                  <a
                    href="https://mercury.com/legal/esign"
                    target="_blank"
                    className="underline"
                  >
                    Mercury's Electronic Communications Agreement
                  </a>
                  , and acknowledge receipt of{" "}
                  <a
                    href="https://mercury.com/legal/patriot-act"
                    target="_blank"
                    className="underline"
                  >
                    Mercury’s USA PATRIOT Act disclosure
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
