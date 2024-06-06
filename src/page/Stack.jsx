import React from "react";
import {
  js,
  nextjs,
  tailwind,
  tools,
  openai,
  gemini,
  react,
} from "../images/index.js";
import Navbar from "../comp/Navbar.jsx";
import Footer from "../comp/Footer.jsx";
const Stack = () => {
  return (
    <>
      <div className="w-full">
       

        <div className="text-white py-40">
          <div className="border-[0.2px] mx-4 border-[#282828] rounded-md border-solid px-4 py-4">
            <div>
              <div>Stack</div>
              <p className="font-thin text-xs">Tools I use daily & love that should check out</p>
            </div>

            <div className="">
              <ul className="flex flex-col gap-8 px-4 py-4">
                <div className=" flex gap-4">
                  <img src={js} className="w-8 h-8" />
                  <li>Js & Ts</li>
                </div>

                <div className=" flex gap-4">
                  <img src={react} className="w-8 h-8" />
                  <li>React</li>
                </div>

                <div className=" flex gap-4">
                  <img src={nextjs} className="w-8 h-8" />
                  <li>Next js</li>
                </div>

                <div className="w-8 h-8 flex gap-4">
                  <img src={tailwind} />
                  <li>Tailwind css</li>
                </div>

                <div className="w-8 h-8 flex gap-4">
                  <img src={openai} />
                  <li className="text-sm">OPEN API</li>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={gemini} className="w-10 h-8"/>
                  <li className="text-sm">GEMINI API</li>
                </div>

                <li>postgres</li>
                <li>MongoDB</li>

                <li>Park UI</li>
                <li>ShadCN</li>

                <li>RAG</li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Stack;
