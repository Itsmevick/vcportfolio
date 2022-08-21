import React from "react";
import Image from "next/image";
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad alias
            tenetur praesentium distinctio iusto, debitis nam? Perferendis qui
            illum animi cumque autem, nesciunt delectus impedit esse a sint sunt
            earum, facere aliquid deserunt ipsum corrupti iure sapiente
            inventore laborum consectetur voluptatibus eos soluta facilis!
            Itaque illum, est consequatur voluptatum quibusdam unde quidem ad
            porro dolores esse.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quisquam iusto ex! Tempore earum iure amet accusamus officia
            provident. Sequi quae voluptatibus soluta accusantium, debitis
            dolores tempore dolore mollitia! Quos molestiae sunt nostrum quas,
            aliquam quo eius vitae voluptatem possimus, ad repellendus dicta
            minus odit illo est aspernatur earum eos excepturi eligendi
            voluptate officia. A, veniam?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
