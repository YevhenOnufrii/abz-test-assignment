'use client'
import Link from 'next/link'

export default function ButtonPrimary({ anchor, title, ...props }) {
  const scrollTo = event => {
    const target = document.querySelector(anchor)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    event.preventDefault()
  }
  return (
    <>
      <Link
        {...props}
        href="#"
        onClick={e => scrollTo(e)}
        className="min-w-[100px] h-[34px] px-[20px] py-1 max-phone:px-[10px] bg-primary rounded-[80px] leading-7 whitespace-nowrap transition duration-[400] ease-in-out hover:bg-[#c3b441]"
      >
        {title}
      </Link>
    </>
  )
}
