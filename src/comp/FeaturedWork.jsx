import React from "react";

const FeaturedWork = ({ imgsrc, project_title, url }) => {
  return (
    <a href={url}>
      <div className="bg-[#1c1c1c] my-6 px-2 py-2 rounded-lg">
        <div>
          <img src={imgsrc} alt="project image" />
        </div>

        <div>{project_title}</div>
      </div>
    </a>
  );
};

export default FeaturedWork;
