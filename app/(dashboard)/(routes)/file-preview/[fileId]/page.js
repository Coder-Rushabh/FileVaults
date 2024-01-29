"use client";

import React from "react";


const FilePreview = ({params}) => {

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          FilePreview {params.fileId}
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
