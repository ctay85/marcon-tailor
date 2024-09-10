"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export const homeTypeOptions = ["Penthouse", "Townhome"] as const;
export const homeTypeValues: Record<typeof homeTypeOptions[number], string> = {
  "Penthouse": "378427",
  "Townhome": "281562",
}

export const hearAboutUsOptions = [
  "Realtor",
  "Print Ad/Mail",
  "Online Search",
  "Other"
] as const;
export const hearAboutUsValues: Record<typeof hearAboutUsOptions[number], string> = {
  "Realtor": "240192",
  "Print Ad/Mail": "340499",
  "Online Search": "240194",
  "Other": "240200"
}

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
  phoneNumber: z.string({
    required_error: "Phone number is required"
  }).min(1, "Phone number is required"),
  zip: z.string({
    required_error: "Postal code is required"
  }).min(1, "Postal code is required"),
  homeType: z.enum(homeTypeOptions, { message: "You need to select an option" }),
  hearAboutUs: z.enum(hearAboutUsOptions, { message: "You need to select an option" }),
  isRealtor: z.string().toLowerCase().transform((x) => x === 'true').pipe(z.boolean()),
  consent: z.boolean().refine((val) => val, "Consent is required"),
})

type RegisterForm = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema)
  });

  function onSubmit(formData: RegisterForm) {
    const formattedData = {
      LassoUID: "8As8FGoXwa",
      ClientID: "374",
      ProjectID: "10032",
      RatingID: formData.isRealtor ? "31618" : "15627445",
      SignupThankyouLink: "https://marcon.ca/tailor/thank-you",
      SourceTypeID: "20327",

      FirstName: formData.firstName,
      LastName: formData.lastName,
      "Emails[Primary]": formData.email,
      "Phones[Home]": formData.phoneNumber,
      PostalCode: formData.zip,
      "Questions[94569]": homeTypeValues[formData.homeType],
      "Questions[59106]": hearAboutUsValues[formData.hearAboutUs],
      "Questions[10736]": formData.isRealtor ? "49630" : "49631",
      "Questions[59107]": formData.consent ? "240201" : "999999",
    }

    setIsLoading(true);
    axios.post("/api/register", formattedData)
      .then(() => toast.success("Registered successfully"))
      .catch(() => toast.error("Something went wrong during register"))
      .finally(() => setIsLoading(false))
      .then(() => router.push('/thank-you'));
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="300"
      className="w-full box-border py-32 px-4 md:px-8 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]"
      id="register-form"
    >
      <h1 className="text-white font-americana-bold text-2xl leading-[30px] lg:text-3xl lg:leading-10 font-bold mb-9 md:mb-10 lg:mb-12 w-1/2">
        Register for more details.
      </h1>
      <div className="flex w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name *"
                {...register("firstName")}
                className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
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
                className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                placeholder="Email *"
                {...register("email")}
                className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number *"
                {...register("phoneNumber")}
                className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Postal Code/Zip *"
              {...register("zip")}
              className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
            />
            {errors.zip && (
              <p className="text-red-500">{errors.zip.message}</p>
            )}
          </div>
          <div>
            <select
              {...register("homeType")}
              className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
            >
              <option value="" className="text-white bg-tertiary">
                What type of home are you looking for? *
              </option>
              {homeTypeOptions.map((option) => <option className="bg-tertiary text-white" key={option} value={option}>{option}</option>)}
            </select>
            {errors.homeType && (
              <p className="text-red-500">{errors.homeType.message}</p>
            )}
          </div>
          <div>
            <select
              {...register("hearAboutUs")}
              className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
            >
              <option value="" className="text-white bg-tertiary">
                How did you hear about us? *
              </option>
              {hearAboutUsOptions.map((option) => <option className="bg-tertiary text-white" key={option} value={option}>{option}</option>)}
            </select>
            {errors.hearAboutUs && (
              <p className="text-red-500">{errors.hearAboutUs.message}</p>
            )}
          </div>
          <div>
            <select
              {...register("isRealtor")}
              className="mt-1 block w-full py-3 text-white bg-transparent placeholder-white border-0 border-b border-white text-xs focus:outline-none focus:border-white focus:ring-0"
            >
              <option value="" className="text-white bg-tertiary">
                Are you a realtor? *
              </option>
              <option className="bg-tertiary text-white" value="true">Yes</option>
              <option className="bg-tertiary text-white" value="false">No</option>
            </select>
            {errors.isRealtor && (
              <p className="text-red-500">{errors.isRealtor.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center pt-4 pb-6">
              <input
                id="consent"
                type="checkbox"
                {...register("consent")}
                className="h-4 w-4 border-2 text-white bg-transparent border-gray-300 rounded-full focus:ring-0"
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-sm text-white bg-transparent"
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
            disabled={isLoading}
            className="font-americana-bold w-full bg-white text-tertiary py-4 px-4 border border-transparent shadow-sm text-xl leading-[20px] font-medium text-center hover:bg-white/80"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          <p className="text-tiny text-[#AABCCE] mt-2 text-justify">
            By clicking the SUBMIT button, you consent to Marcon and their
            current and future affiliates and partners sending you emails with
            promotional messages such as newsletters, announcements, press
            releases and event invitations regarding their products and
            services; (2) receiving calls on behalf of Marcon to discuss
            products and services; and (3) the collection, use and disclosure of
            the personal information you have provided, by or on behalf of the
            members of Marcon, for the above purposes, in
            accordance with Marcon’s Privacy Policy. You may withdraw your
            consent at any time.
          </p>
        </form>
      </div>
    </div>
  );
}
