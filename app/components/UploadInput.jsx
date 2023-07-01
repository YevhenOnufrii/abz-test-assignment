import { useState } from 'react'

export default function UploadInput({ errors, setFieldValue, onChange, ...props }) {
  const [fileTitle, setFileTitle] = useState(props.placeholder)

  const getFileName = event => {
    if (event.target.files.length) {
      const fileName = event.target.files[0].name
      const fileSize = (event.target.files[0].size / 1_000_000).toFixed(2)
      setFileTitle(`${fileName} (${fileSize} MB)`)
    }
  }
  return (
    <>
      <label
        className="flex justify-center items-center cursor-pointer w-full h-14  text-[#7E7E7E] rounded-md mb-12"
        htmlFor={props.id}
      >
        <span className=" w-[80px] h-full border-[1px] border-black rounded-l-md text-black text-center self-center p-4 max-phone:p-2  ">
          Upload
        </span>
        <span className="w-full h-full p-4 max-phone:p-2 border-[1px] border-l-0 border-[#D0CFCF] rounded-r-md focus:color-green whitespace-nowrap truncate">
          {fileTitle}
        </span>
        <input
          onInput={e => getFileName(e)}
          onChange={e => setFieldValue(props.id, e.target.files[0])}
          {...props}
        />
      </label>
      {errors[props.id] && <p className="pl-4 text-[red] mt-[-40px] mb-4">{errors[props.id]}</p>}
    </>
  )
}
