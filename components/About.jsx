import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am full stack developer mainly specialized in MERN stack in web
            development. This also includes front end technologies like HTML,
            CSS, Javascript and UI frameworks i.e tailwind and bootstrap. I love
            working with ReactJs and NextJs in creating dynamic content and
            managing data especially when communicating with the database.
            Nodejs and Mongodb are also among the languages I mainly use for
            creating APIs and database respectively. I have a working knowledge
            of firebase and Sanity.
          </p>
          <p className="py-2 text-gray-600">
            I love challenges, and in the tech world it serves you just that.
            Exploring different languages gives a programmer new tools in
            problem solving, and with this idea in mind a few months ago I
            started learning haskell as i had learnt about its purely functional
            implementation. I recently started doing some{" "}
            <span className="underline">
              <Link
                href="https://www.coingecko.com/en/api"
                className="underline"
              >
                projects
              </Link>
            </span>{" "}
            in the language fascinated in its unique approach in problem
            solving.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="https://github.com/Itsmevick">
              Check out some of my projects
            </Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
