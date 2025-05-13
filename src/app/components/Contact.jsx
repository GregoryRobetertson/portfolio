"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Contact() {
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publickey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const form = useRef(null);

  console.log("Service ID:", service);
  console.log("Template ID:", template);
  console.log("Public Key:", publickey);
  console.log("Form Reference:", form.current);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(service, template, form.current, publickey);
      console.log("Success!");
    } catch (error) {
      console.error("Error sending message!", error);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#4B0F0F] to-[#120505]">
        <h1 className="mb-12 text-white text-3xl font-bold text-center">
          Contact
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#400101] to-[#1c0000 rounded-xl shadow-lg text-white space-y-4"
          id="Contact"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full mt-1 p-3 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id=" Your Email"
              required
              className="w-full mt-1 p-3 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full mt-1 p-3 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 rounded-md cursor-pointer font-semibold"
          />
        </form>
      </div>
    </>
  );
}
