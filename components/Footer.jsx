import Link from "next/link";
import { FaExternalLinkAlt, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const social = [
    {
      id: 1,
      name: "Linkedin",
      link: "https://linkedin.com/in/theavnishkumar",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/theavnishkumar",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://facebook.com/theavnishkumar",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 4,
      name: "X (Twitter)",
      link: "https://x.com/theavnishkumar",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 5,
      name: "Instagram",
      link: "https://instagram.com/theavnishkumar",
      icon: <FaExternalLinkAlt />,
    },
  ];

  const credit = [
    {
      id: 1,
      name: "Get Waves",
      link: "https://getwaves.io/",
      icon: <FaExternalLinkAlt />,
    },
    // {
    //   id: 2,
    //   name: "Shapes",
    //   link: "https://bgjar.com/animated-shape",
    //   icon: <FaExternalLinkAlt />,
    // },
    {
      id: 3,
      name: "React Icons",
      link: "https://www.npmjs.com/package/react-icons",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 4,
      name: "Image by storyset 1",
      link: "https://www.freepik.com/free-vector/message-sent-concept-illustration_9936445.htm#query=email%20illustration&position=3&from_view=keyword&track=ais&uuid=be172876-08bb-4d36-bf70-5b4b5ec3067d",
      icon: <FaExternalLinkAlt />,
    },
    {
      id: 5,
      name: "2",
      link: "https://www.freepik.com/free-vector/programmer-concept-illustration_8672698.htm",
      icon: <FaExternalLinkAlt />,
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="p-2 lg:p-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/footer/wave.svg')" }}
    >
      <section className="w-full lg:p-4 p-2 flex flex-col lg:flex-row gap-8">
        {/* Credit Section */}
        <section className="p-2 w-full flex flex-col items-center text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Hometown</span>
          <section className="p-2 flex flex-col items-center w-fit gap-2">
            <span className="flex gap-1 items-center ">
              <FaLocationDot />
              <address>Buxar, Bihar, India</address>
            </span>
            <span className="flex gap-2 items-center">
              <IoIosMail className="text-xl" />
              <Link href="mailto:hi@theavnishkumar.in">
                hi@theavnishkumar.in
              </Link>
            </span>
          </section>
        </section>

        {/* Social Media */}
        <section className="p-2 w-full flex flex-col items-center text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Social Links</span>
          <section className="p-2 flex flex-wrap w-4/5 justify-center gap-3">
            {social.map((e) => (
              <span key={e.id}>
                <Link
                  href={e.link}
                  className="flex gap-1 justify-center"
                  target="_blank"
                >
                  {e.name}&nbsp;{e.icon}
                </Link>
              </span>
            ))}
          </section>
        </section>

        {/* Credit Section */}
        <section className="p-2 w-full flex flex-col items-center max-lg:hidden text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Images/ Icons Credits</span>
          <section className="p-2 flex flex-wrap w-4/5 justify-center gap-3">
            {credit.map((e) => (
              <span key={e.id}>
                <Link
                  href={e.link}
                  className="flex gap-1 justify-center"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {e.name}&nbsp;{e.icon}
                </Link>
              </span>
            ))}
          </section>
        </section>
      </section>
      <section className="p-2 text-center text-gray-800 dark:text-gray-200">
        <p>
          &copy; {currentYear}{" "}
          <span className="text-black dark:text-white font-semibold underline">
            Avnish Kumar
          </span>
          . All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
