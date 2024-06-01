import React, {useState} from "react";
//import loadinggif from "../assets/icons8-explore.gif"
import {
  explore,
  work,
  programming,
  coding,
  resume,
  twitter,
  Bookcall,
  profile,
  Linkdin,
  github,
  menu,
} from "../images/index";

//image work remaining
//slight animation below name
//menu true sidebar open false closes
const Navbar = () => {
  const [menubuttonvalue, setMenubuttonvalue] = useState(false);
  return (
    <div className="relative">
      <div className="w-full -z-0 absolute flex justify-between bg-[#161616] text-white px-4 py-4 items-center">
        <div className="flex gap-2 items-center">
          <div>
            <img
              src={profile}
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
          <div className="leading-5">
            <div className="font-sans font-[1100]">V.G</div>

            <div className="font-[10] text-[12px] whitespace-nowrap">
              Full Stack Engineer
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setMenubuttonvalue((prev) => (!prev));
          }}
        >
          <div className="bg-[#2b2b2b] px-2 py-2 rounded-md">
            <img src={menu} className="w-4 h-4" />
          </div>
        </button>
      </div>
      
      
      {menubuttonvalue ? (
        <div className="absolute z-10 m-0 p-0">
        <div className="flex flex-col snap-mandatory snap-y bg-black text-zinc-400 w-52 h-full px-8 py-8 gap-8 ">
          <div className="flex gap-4 justify-center items-center">
            <div className="">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            <div className="leading-5">
              <div className="font-sans font-[1100]">V.G</div>

              <div className="font-[10] text-[12px] whitespace-nowrap">
                Full Stack Engineer
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-4 w-44">
            <div className="flex gap-2 items-center">
              <img src={explore} className="w-4 h-4 rounded-full " />
              <a href="">
                <div className="hover:bg-zinc-900">Explore</div>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <img src={work} className="w-4 h-4 rounded-full bg-white" />
              <a href="">
                <div>Work</div>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <img src={coding} className="w-4 h-4 rounded-full bg-white" />

              <a href="">
                <div>Boutique</div>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <img
                src={programming}
                className="w-4 h-4 rounded-full bg-white"
              />
              <a href="">
                <div>Stack</div>
              </a>
            </div>
          </div>

          <div>
            <div className="font-[10] text-[10px] mb-4">RESOURCES</div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <img src={resume} className="w-4 h-4 rounded-full bg-black" />
                <div>Resume</div>
              </div>

              <div className="flex gap-2 items-center">
                <img src={Bookcall} className="w-4 h-4 rounded-full bg-white" />
                <div>Book a call</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-[10] text-[10px] mb-4 ">SOCIALS</div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <img src={twitter} className="w-4 h-4 rounded-full bg-white" />

                <div>Twitter</div>
              </div>
              <div className="flex gap-2 items-center">
                <img src={Linkdin} className="w-4 h-4 rounded-full bg-white" />
                <div>Linkedin</div>
              </div>
              <div className="flex gap-2 items-center">
                <img src={github} className="w-4 h-4 rounded-full bg-white" />

                <div>Github</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : (
        ''
      )}
   

    </div>
  );
};

export default Navbar;
