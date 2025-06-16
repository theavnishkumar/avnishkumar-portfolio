import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Avnish Kumar – Full Stack Web Developer | MERN & JavaScript Developer",
  description:
    "Avnish Kumar is a Full Stack Web Developer from Buxar, Bihar, and a 2024 Computer Science graduate from Gyan Ganga Institute of Technology and Sciences, Jabalpur. He builds fast, clean, and responsive web apps using React, Node.js, Express, MongoDB, NestJS, and TypeScript.",
  keywords: [
    "Avnish",
    "Avnish Kumar",
    "theavnishkumar",
    "Avnish Kumar web developer",
    "Avnish Kumar full stack developer",
    "Avnish Kumar MERN developer",
    "Avnish Kumar NestJS",
    "Avnish Kumar JavaScript",
    "Avnish Kumar Jabalpur",
    "Avnish Kumar Buxar",
    "Avnish Kumar portfolio",
    "Full Stack Developer India",
    "MERN Stack Developer Bihar",
    "JavaScript Developer India",
    "React Node Developer",
  ],
  authors: [
    { name: "Avnish kumar" },
    { name: "Avnish Kumar", url: "https://theavnishkumar.in" },
  ],
  creator: "Avnish Kumar",
  publisher: "Avnish Kumar",
  category: "Technology",
  metadataBase: new URL("https://theavnishkumar.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Avnish Kumar – Full Stack Developer | React, Node, MongoDB",
    description:
      "Explore the portfolio of Avnish Kumar, a Full Stack Developer skilled in MERN stack, TypeScript, Java, and more. Based in Bihar, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://theavnsihkumar.in",
    siteName: "Avnish Kumar",
    images: [
      {
        url: "/avnishkumar/avnish.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/avnishkumar/avnishkumar.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Kumar – Full Stack Developer | React & Node.js",
    description:
      "Avnish Kumar is a Full Stack Web Developer from Bihar, India. Skilled in JavaScript, React, Node.js, MongoDB, NestJS, and more. Visit portfolio to know more.",
    siteId: "",
    creator: "@theavnishkumar",
    creatorId: "@theavnishkumar",
    images: ["/avnishkumar/avnishkumar.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
