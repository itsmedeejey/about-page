import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = "740e1357-b447-4ec6-b4f2-3b763fc900d1";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Growhub",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 w-full px-4 max-w-screen-md"
      >
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-500 text-black bg-white rounded-xl outline-none focus:ring-1 ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-500 text-black bg-white rounded-xl outline-none focus:ring-1 ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>
<div className="mb-5">
  <input
    type="tel"
    placeholder="Phone Number"
    autoComplete="false"
    className={`w-full px-4 py-3 border-2 bg-white text-black placeholder:text-gray-500 rounded-md outline-none focus:ring-1 ${
      errors.phone
        ? "border-red-600 focus:border-red-600 ring-red-100"
        : "border-gray-300 focus:border-gray-600 ring-gray-100"
    }`}
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10,15}$/,
        message: "Please enter a valid phone number",
      },
    })}
  />
  {errors.phone && (
    <div className="mt-1 text-red-600">
      <small>{errors.phone.message}</small>
    </div>
  )}
</div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-500 text-black bg-white rounded-xl outline-none h-36 focus:ring-1 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-gray-600 ring-gray-100"
            }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-white transition-colors bg-rblue rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>



    {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 flex flex-col text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
      </form>
    </>
  );
}
