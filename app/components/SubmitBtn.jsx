import React from 'react'

export default function SubmitBtn({ title, ...props }) {
  return (
    <button
      {...props}
      className='"min-w-[100px] h-[34px] px-[20px] py-1 max-phone:px-[10px] bg-primary rounded-[80px] leading-7 whitespace-nowrap transition duration-[400] ease-in-out hover:bg-[#c3b441] disabled:bg-btn_disabled "'
    >
      {title}
    </button>
  )
}
