import Image from 'next/image'
import { useState } from 'react'

function User({ props }) {
  const [tooltip, setTooltip] = useState(false)
  const { name, photo, position, email, phone } = props

  return (
    <div className="userCard p-[5px] w-[270px] min-w-[240px] flex flex-col justify-center items-center relative">
      <div className="user-image my-[20px] rounded-full overflow-hidden ">
        <Image className="w-[70px] h-[70px]" src={photo} alt="user image" width={70} height={70} />
      </div>
      <h3 className="user-name max-w-[240px] truncate mb-[20px] ">{name}</h3>
      <div className="user-info text-center leading-[2]">
        <h3 className=" max-w-[240px] truncate">{position}</h3>
        <h3
          id="email-text"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          className=" max-w-[240px] truncate"
        >
          {email}
          {tooltip && (
            <span className="absolute top-[62%] left-0 text-[white] z-10 px-[5px] py-[5px] bg-black text-base rounded-md">
              {email}
            </span>
          )}
        </h3>
        <h3 className=" max-w-[240px] truncate">{phone}</h3>
      </div>
    </div>
  )
}

export default User
