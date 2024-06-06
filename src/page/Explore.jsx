import React, { useState } from "react";
import { cyborg, call, email } from "../images/index";
import FeaturedWork from "../comp/FeaturedWork";
import { llm, maps, realtimechat } from "../images/index";
import Stacks from "../comp/Stacks";
import Footer from "../comp/Footer";

const Explore = () => {
  const [isCopied, setIsCopied] = useState(false);
  const emailcopy = () => {
    const email = "shiva92637@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  return (
    <div className="px-4 bg-black text-[#ffffff] w-full pt-32">
      <div className="flex gap-2 items-center">
        <div className="font-medium text-3xl flex">i'm an Engineer</div>
        <img src={cyborg} className="w-10 h-10 rounded-full" />
      </div>
      <div className="font-medium text-3xl flex">
        who build things from first principle.
      </div>
      <div>
        As, a full stack dev i've built <a>products</a> hands-on
      </div>

      <div className="flex items-center font-sans">
        <a href="https://calendly.com/shiva92637/15-minute-discovery-call">
          <button className="px-1 h-10 rounded-md bg-[#1c1c1c] flex gap-2 text-[14px] font-medium justify-center items-center">
            <img src={call} className="w-[18px] h-[17px]" />
            Book a Discovery Call
          </button>
        </a>

        <button
          className="h-10 px-4 py-2 text-sm bg-[#1c1c1c] flex gap-2 text-[14px] justify-center items-center rounded-md mx-2 my-2 animate-pulse"
          onClick={emailcopy}
        >
          <img src={email} className="w-[18px] h-[18px]" />
          {isCopied ? "Email Copied" : "E-Mail"}
        </button>
      </div>

      <div>Featured Work</div>
      <div>
        <div>
          <FeaturedWork
            imgsrc={llm}
            project_title={"PDF QueryBot: Ask Anything About Your PDF"}
            url={"https://github.com/VARUN-KUSH/WebApp-to-chat-with-PDFs"}
          />
        </div>
        <div>
          <FeaturedWork
            imgsrc={maps}
            project_title={"MapLeads Pro: Extract and Format Business Leads(google-map-s-scrapper)"}
            url={"https://github.com/VARUN-KUSH"}
          />
        </div>
        <div>
          <FeaturedWork
            imgsrc={realtimechat}
            project_title={"RealTime ChatHub"}
            url={"https://github.com/VARUN-KUSH"}
          />
        </div>

        <div>
          <Stacks />
        </div>
      </div>
    </div>
  );
};

export default Explore;
