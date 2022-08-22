import React from "react";
import Link from "next/link";
import Image from "next/image";
import propertyImage from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Crypto</h2>
          <h3>ReactJS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Projects</p>
          <h2>Overview</h2>
          <p>
            This is a cryptocurrency website which is powered by{" "}
            <span  className="underline"><Link href="https://www.coingecko.com/en/api">
            Coin gecko api
          </Link></span>
            . Basically the coin ranks all the coins and the first 10 are
            displayed on the page. It also gives a list of the trending coins
            where one can follow on the market trends. A user can create an
            account and save their details upon which they can be able to mark
            some coins as favourite upon clicking either of them. The database is created in <span  className="underline"><Link href="https://www.coingecko.com/en/api" className="underline">
            Firebase
          </Link></span>
          </p>
         <Link href="https://cryptowebsite.vercel.app/">
         <button className="px-8 py-2 mt-4 mr-8">
         Demo</button>
        </Link>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
