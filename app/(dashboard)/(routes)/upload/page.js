import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="sm:w-[32rem] shadow-blue-100 mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div class="relative bg-blue-600 py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
              Upload Files
             
            </div>
            <div class="space-y-4 px-8 py-10">
           

              <div class="flex flex-col items-center justify-center rounded-lg border-4 border-dashed px-4 py-10">
         
  <img src={'https://static.vecteezy.com/system/resources/previews/016/314/855/original/transparent-cloud-file-upload-icon-free-png.png'} height={100} width={100}/>

                <p class="mt-4 text-center text-xl font-medium text-gray-800">
                  Drop Files here or
                  <label class="shadow-blue-100 mt-2 block rounded-full border bg-white px-4 py-0.5 font-normal text-blue-500 shadow hover:bg-blue-50">
                    <input class="hidden" type="file" name="file" id="" />
                    browse
                  </label>
                </p>
              </div>

              <button class="mt-4 rounded-full bg-blue-600 px-10 py-2 font-semibold text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
