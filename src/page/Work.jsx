import React from "react";
import { llm, maps, realtimechat } from "../images/index";

const Work = () => {
  return (
    <div>
      <div>
        <div>Best Work</div>
        <p>lines of code converge into solution</p>
      </div>
      <div>
        <button>Book Call</button>
        <button>E-Mail</button>
      </div>
      <div>
        <div>
            <img src={llm}/>
            <div>PDF QueryBot: Ask Anything About Your PDF</div>
        </div>
        <div>
            <img src={maps}/>
            <div>MapLeads Pro: Extract and Format Business Leads from google map's</div>
        </div>
        <div>
            <img src={realtimechat}/>
            <div>RealTime ChatHub: Send msg to loved ones</div>
        </div>
        <div>
        <img/>
            <div></div>
        </div>
        <div>
        <img/>
            <div></div>
        </div>
        <div> <img/>
            <div></div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Work;
