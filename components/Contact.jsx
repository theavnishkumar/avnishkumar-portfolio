import Image from "next/image";
import "../app/globals.css";

const Contact = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4"
      id="contact"
    >
      <section className="flex items-center gap-4 pt-2">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-2xl font-medium">&lt;Contact &nbsp;/&gt;</p>
      </section>
      {/* Contact Section */}
      <section className="flex justify-center items-center gap-12">
      <section className="p-1 lg:w-1/3 max-w-fit flex items-center max-lg:hidden">
              <Image
                className=""
                src="/contact/email.svg"
                alt="email"
                priority={false}
                height={300}
                width={650}
                style={{
                  width: "650px",
                  height: "auto",
                }}
              />
            </section>
        <section className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full p-6 rounded-xl card flex flex-col justify-center items-center max-sm:m-4 max-md:mt-8">
          

        <form className=" w-full p-1 lg:p-6">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                  >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                  placeholder="Enter your name here"
                  required
                  aria-label="Name Input Field"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                  placeholder="Enter your email here"
                  required
                  aria-label="Email Input Field"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  rows="5"
                  id="message"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none resize-none"
                  placeholder="Enter your message here"
                  required
                  aria-label="Message Input Field"
                />
              </div>
              
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" aria-label="Submit Button"
              >
               Submit
              </button>
            </form>

        </section>
      </section>
    </main>
  );
};
export default Contact;
