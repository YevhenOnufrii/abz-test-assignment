import Link from 'next/link'

export default function ButtonPrimary({ href, title, ...props }) {
  // return (
  //   <button
  //     href="#name"
  //     className="btn-primary min-w-[100px] h-[34px]  px-[20px] py-1 max-phone:px-[10px] bg-[#F4E041] rounded-[80px] leading-7 whitespace-nowrap transition duration-[400] ease-in-out hover:bg-[#c3b441] disabled:bg-[#B4B4B4]"
  //     {...props}
  //   >
  //     {props.title}
  //   </button>
  // )

  return (
    <>
      <Link
        {...props}
        href={href ? href : ''}
        className="btn-primary  min-w-[100px] h-[34px]  px-[20px] py-1 max-phone:px-[10px] bg-[#F4E041] rounded-[80px] leading-7 whitespace-nowrap transition duration-[400] ease-in-out hover:bg-[#c3b441] disabled:bg-[#B4B4B4]"
      >
        {title}
      </Link>
    </>
  )
}
