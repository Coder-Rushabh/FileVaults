"use client";

import React, { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../firebase";
import ProgressBar from "./ProgressBar";
import { UserAuth } from "@/app/context/AuthContext";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import FileUploaded from "./FileUploaded";

const Upload = () => {
  const router = useRouter();
  const { user } = UserAuth();
  const db = getFirestore(app);

  const [fileDocId, setFileDocId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);

  const onFileSelect = (file) => {
    if (file && file.size > 2000000) {
      setError("Maximum file upload size is 2MB");
      return;
    }
    setError(null);
    setFile(file);
    console.log(file);
  };

  const storage = getStorage(app);
  const uploadFile = (file) => {
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", async (snapshot) => {
      try {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);

        if (progress === 100) {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Download URL:", downloadURL);
          setUploadCompleted(true);
          await saveInfo(file, downloadURL);
        }
      } catch (error) {
        console.log("Error during file upload:", error);
      }
    });
  };

  const saveInfo = async (file, fileUrl) => {
    try {
      const docId = generateRandomString();
      await setDoc(doc(db, "uploadedFiles", docId), {
        fileName: file?.name || "",
        fileSize: file?.size || 0,
        fileType: file?.type || "",
        fileUrl: fileUrl || "",
        id: docId,
        userName: user.displayName,
        userEmail: user.email,
        password: "", // You might want to handle password logic here
        shortUrl: `http://localhost:3000/${docId}`,
      });
      setFileDocId(docId);
    } catch (error) {
      console.error("Error saving file information:", error);
      // You might want to handle errors more gracefully, e.g., show a user-friendly message
    }
  };

  useEffect(() => {
    uploadCompleted &&
      setTimeout(() => {
        setUploadCompleted(false);
        router.push("/file-preview/" + fileDocId);
      }, 2000);
  }, [uploadCompleted]);

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="sm:w-[32rem] shadow-blue-100 mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div class="relative bg-blue-600 py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
              Upload Files
            </div>
            <div className="ml-6 mt-2">Max size 2mb</div>
            <div class="space-y-4 px-8 py-5">
              <div class="flex flex-col items-center justify-center rounded-lg border-4 border-dashed px-4 py-5">
                {file ? (
                  <FilePreview file={file} removeFile={() => setFile(null)} />
                ) : (
                  <>
                    {" "}
                    <img
                      src={
                        "https://static.vecteezy.com/system/resources/previews/016/314/855/original/transparent-cloud-file-upload-icon-free-png.png"
                      }
                      height={100}
                      width={100}
                    />
                    <p class="mt-4 text-center text-xl font-medium text-gray-800">
                      Drop Files here or
                      <label class="shadow-blue-100 mt-2 block rounded-full border bg-white px-4 py-0.5 font-normal text-blue-500 shadow hover:bg-blue-50">
                        <input
                          class="hidden"
                          type="file"
                          name="file"
                          id=""
                          onChange={(event) =>
                            onFileSelect(event.target.files[0])
                          }
                        />
                        browse
                      </label>
                    </p>
                  </>
                )}
              </div>
              {error ? <AlertMessage msg={"Max file size is 2 MB"} /> : null}

              {progress > 0 ? (
                <>
                  <ProgressBar progress={progress} />
                  {uploadCompleted == true ? <FileUploaded /> : null}
                </>
              ) : (
                <button
                  onClick={() => uploadFile(file)}
                  disabled={!file}
                  class="mt-4 rounded-full bg-blue-600 px-10 py-2 font-semibold text-white disabled:bg-gray-400 disabled:text-gray-700"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
