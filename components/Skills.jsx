import React from "react";
import Image from "next/image";
import HTML from "../public/assets/skills/html.png"
import CSS from "../public/assets/skills/css.png"
import Javascript from "../public/assets/skills/javascript.png"
import ReactJS from "../public/assets/skills/react.png"
import Nextjs from "../public/assets/skills/nextjs.png"
import Mongo from "../public/assets/skills/mongo.png"
import Firebase from "../public/assets/skills/firebase.png"
import Tailwind from "../public/assets/skills/tailwind.png"
import Nodejs from "../public/assets/skills/node.png"

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="tracking-widest text-xl uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={HTML}
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={CSS}
                alt="/"
                width="64px"
                height="64px"
              />
            </div>
            <div className="flex flex-col items-center justify-start">
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={Javascript}
              alt="/"
              width="64px"
              height="64px"
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>Javascript</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={Tailwind}
            alt="/"
            width="64px"
            height="64px"
          />
        </div>
        <div className="flex flex-col items-center justify-start">
          <h3>TAILWIND</h3>
        </div>
      </div>
    </div>
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <Image
          src={ReactJS}
          alt="/"
          width="64px"
          height="64px"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <h3>REACT</h3>
      </div>
    </div>
  </div>
  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
<div className="grid grid-cols-2 gap-4 justify-center items-center">
  <div className="m-auto">
    <Image
      src={Nextjs}
      alt="/"
      width="64px"
      height="64px"
    />
  </div>
  <div className="flex flex-col items-center justify-start">
    <h3>NextJS</h3>
  </div>
</div>
</div>
  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
  <div className="grid grid-cols-2 gap-4 justify-center items-center">
    <div className="m-auto">
      <Image
        src={Nodejs}
        alt="/"
        width="64px"
        height="64px"
      />
    </div>
    <div className="flex flex-col items-center justify-start">
      <h3>NODE</h3>
    </div>
  </div>
</div>
<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
<div className="grid grid-cols-2 gap-4 justify-center items-center">
  <div className="m-auto">
    <Image
      src={Mongo}
      alt="/"
      width="64px"
      height="64px"
    />
  </div>
  <div className="flex flex-col items-center justify-start">
    <h3>MONGO</h3>
  </div>
</div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
