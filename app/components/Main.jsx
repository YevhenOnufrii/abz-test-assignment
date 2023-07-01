import Image from 'next/image'
import ButtonPrimary from './ButtonPrimary'

export default function Main({ bgImage }) {
  return (
    <div className="main mb-[13.5%] ">
      <div className="main-bgImage my-0 mx-auto relative max-w-full">
        <Image
          className="w-full h-full object-cover absolute"
          width={1024}
          height={650}
          src={bgImage}
          alt="image"
        />
        <div className="main-text relative py-[14.7%] px-[15px] text-center max-w-[410px] my-0 mx-auto">
          <h1 className="text-[40px] text-white mb-[20px] leading-[1] ">
            Test assignment for front-end developer
          </h1>
          <h2 className="leading-[1.62] text-white mb-[30px]  ">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.{' '}
          </h2>
          <ButtonPrimary title={'Sign up'} />
        </div>
      </div>
    </div>
  )
}
