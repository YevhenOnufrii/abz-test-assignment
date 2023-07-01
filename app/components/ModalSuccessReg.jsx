import Image from 'next/image'
import successImg from '../assets/img/success_image.png'

export default function ModalSuccessReg({ toggleModal }) {
  return (
    <div
      onClick={() => toggleModal()}
      className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"
    >
      <div className="overlay w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[#2b2a2a] bg-opacity-60">
        <div className="modal-content absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f1f1f1] py-4 px-8 rounded-[3px] max-w-[1024px] min-w-[360px]">
          <h2 className="text-center text-[40px] mb-12">User successfully registered</h2>
          <Image
            src={successImg}
            className="max-w-[330px] mx-auto"
            alt="success registration image"
          />
        </div>
      </div>
    </div>
  )
}
