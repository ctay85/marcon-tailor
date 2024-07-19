"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFormSchema = z.object({
  firstName: z.string({
    required_error: "First name is required"
  }).min(1, "First name is required"),
  lastName: z.string({
    required_error: "Last name is required"
  }).min(1, "Last name is required"),
  email: z.string({
    required_error: "Email is required"
  }).email("Email is invalid"),
  textArea: z.string({
    required_error: "Provide your preferred date and time"
  }).min(1, "Preferred date and time is required"),
  consent: z.boolean().refine((val) => val, "Consent is required"),
})

type RegisterForm = z.infer<typeof registerFormSchema>;

export default function BookAppointmentForm() {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema)
  });

  function onSubmit(formData: RegisterForm) {
    const emailSubject = "New appointment";
    const emailBody = `Hi, I'm ${formData.firstName} ${formData.lastName}, an I'd like to book an apointment with you. These are my preferred appointment date and time: \n\n${formData.textArea}\n\n You can contact me at: ${formData.email}`

    const anchor = document.createElement("a");
    anchor.href = `mailto:sales@tailorbymarcon.ca?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    anchor.click();
    anchor.remove();
  }

  return (
    <div
      data-aos="fade"
      data-aos-duration="1200"
      data-aos-delay="200"
      className="w-full h-full box-border"
      id="book-appointment-form"
    >
      <div className="flex w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name *"
                {...register("firstName")}
                className="mt-1 block w-full py-3 text-primary placeholder-primary border-0 border-b-[1px] border-primary sm:text-sm focus:outline-none focus:border-primary focus:ring-0"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name *"
                {...register("lastName")}
                className="mt-1 block w-full py-3 text-primary placeholder-primary border-0 border-b-[1px] border-primary sm:text-sm focus:outline-none focus:border-primary focus:ring-0"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email *"
              {...register("email")}
              className="mt-1 block w-full py-3 text-primary placeholder-primary border-0 border-b-[1px] border-primary sm:text-sm focus:outline-none focus:border-primary focus:ring-0"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-primary text-sm font-GothamBook font-medium mt-1 md:text-base w-[90%] md:w-full">Please provide your preferred appointment date and time.</p>
            <textarea
              placeholder="Type here..."
              {...register("textArea")}
              className="w-full h-56 py-3 text-primary border border-primary sm:text-sm focus:outline-none focus:border-primary focus:ring-0 resize-none"
            />
            {errors.textArea && (
              <p className="text-red-500">{errors.textArea.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center pt-4 pb-6">
              <input
                id="consent"
                type="checkbox"
                {...register("consent")}
                className="h-4 w-4 border-2 text-primary border-gray-300 rounded-full focus:ring-0"
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-sm text-primary"
              >
                I would like to receive future e-communications from Marcon.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500">{errors.consent.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="font-americana-bold w-full bg-tertiary text-white py-4 px-4 border border-transparent shadow-sm text-xl leading-[20px] font-medium text-center hover:bg-primary"
          >
            Book Appointment
          </button>
          <div>
            <p className="text-[11px] text-[#AABCCE] mt-2 text-justify">
              By clicking the SUBMIT button, you consent to Marcon and their
              current and future affiliates and partners sending you emails with
              promotional messages such as newsletters, announcements, press
              releases and event invitations regarding their products and
              services; (2) receiving calls on behalf of Marcon to discuss
              products and services; and (3) the collection, use and disclosure of
              the personal information you have provided, by or on behalf of the
              members of the Rennie Marketing, for the above purposes, in
              accordance with Marcon’s Privacy Policy. You may withdraw your
              consent at any time.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
