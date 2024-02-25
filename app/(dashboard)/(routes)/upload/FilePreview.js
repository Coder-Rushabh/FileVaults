import React from 'react'
import { Image } from 'next/image';



const FilePreview = ({file, removeFile}) => {
  console.log(file);
  return (
    <div className='flex items-center justify-between'>
    <div>
        <Image  src={'/filevaults.png'} height={200} width={200} />
        <h2>{file.name}</h2>
        <h2 className='text-[12px] text-gray-400'>{file?.type} / {(file.size/1024/1024).toFixed(2)} MB</h2>
    </div>
    <div onClick={()=>removeFile()} className='mt-0 mb-auto cursor-pointer'>X</div>

    </div>
  )
}

export default FilePreview