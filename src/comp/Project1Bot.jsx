import React from "react";

const Project1Bot = () => {
  return (
    <div>
      <div>Project Architecture</div>
      <div>
        <div>introduction</div>
        <p>
          outlines the overall architecture of the project and the workflow from
          file upload to response delivery.
        </p>

        <div>Workflow</div>
        <p>
          User sends file to Backend, Storing files on server This makes the
          process slow. To optimize your chat app, you can remove the writing
          text file and saving file on the server (both PDF files and text files
          will be saved in the public/temp folder).
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Project1Bot;
