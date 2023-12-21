// icons
import { IoIosCloseCircle } from "react-icons/io";


// framer motion
import {motion} from "framer-motion"

function Modal({handleModal, rocket }) {

  console.log(rocket.rocket_name);


  return (
    <motion.div className="fixed h-screen px-4 w-full bg-black/60 inset-0 z-30 flex items-center justify-center" initial={{
        opacity: 0,
    }} animate={{
        opacity: 1,
    }} exit={{
        opacity: 0
    }}>
    {/* modal content */}
    <motion.div className="max-w-sm bg-white rounded-[10px] px-6 py-3 overflow-y-scroll max-h-[500px]" animate={{
        scale: 1,
        opacity: 1
    }} initial={{
        scale: 0,
        opacity: 0
    }} exit={{
        opacity: 0
    }}>
      {/* modal header */}
      <div className="flex justify-end" onClick={()=> handleModal()}>
        <button>
          <IoIosCloseCircle className="w-5 h-5" />
        </button>
      </div>

      {/* modal image */}
      <div className="mt-4 max-w-md">
        <img src={rocket.flickr_images[0]} alt="rocket" className="rounded-[5px]" />
      </div>

      {/* modal body */}
      <div className="mt-8 text-md flex flex-col gap-2">
        <h2 className="font-bold">{rocket.rocket_name}</h2>
        <div className="flex items-center justify-between">
          <p>Type: {rocket.rocket_type}</p>
          <p>Flight: {rocket.first_flight}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="tracking-wider">Status</span>
          <span className={`${rocket.active == true ? "bg-green-500" : "bg-blue-500"} px-2 text-xs py-1 text-white rounded-full`}>
            {rocket.active ? "Active" : "Retired"}
          </span>
        </div>
        <div className="mt-5">
          <span className="font-bold">Description: </span>
          <span>{rocket.description}</span>
        </div>
      </div>

      {/* modal footer */}
    </motion.div>
  </motion.div>
  )
}

export default Modal