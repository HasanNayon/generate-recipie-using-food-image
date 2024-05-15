import React from "react";

export default function ContactUs() {
  return (
    <div className="grid sm:grid-cols-12 grid-cols-1 mt-[5rem] bg-neutral-200">
      <div className="sm:col-span-7 col-span-1 flex flex-col justify-center space-y-12 mx-auto">
        <h1 className="text-5xl font-bold text-neutral-800">Contact Us</h1>
        <p className="text-xl text-neutral-800">
          Need to get in touch with us? Fill out the form and we will get back
          to you ASAP!
        </p>
      </div>
      <div className="sm:col-span-5 col-span-1 drop-shadow-lg bg-white p-12 my-12 mx-8 h-fit rounded-lg">
        <form className="flex flex-col text-neutral-800 space-y-6">
          <div className="flex space-x-4">
            <div>
              <label htmlFor="first-name" className="font-bold">
                First name*
              </label>
              <input
                className="w-full bg-neutral-200 h-[3rem] rounded-lg border-[1px] border-neutral-400"
                type="text"
                id="first-name"
                name="first-name"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="font-bold">
                Last name*
              </label>
              <input
                className="w-full bg-neutral-200 h-[3rem] rounded-lg border-[1px] border-neutral-400"
                type="text"
                id="last-name"
                name="last-name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email*
            </label>
            <input
              className="bg-neutral-200 h-[3rem] rounded-lg border-[1px] border-neutral-400"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="font-bold">
              What can we help you with?
            </label>
            <textarea
              className="w-full bg-neutral-200 p-2 rounded-lg border-[1px] border-neutral-400"
              id="message"
              name="message"
              rows={8}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-400 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
