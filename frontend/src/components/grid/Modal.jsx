// icons
import { IoIosCloseCircle } from "react-icons/io";

// image - dummy
import rocket from "../../assets/rocket.jpeg";

// framer motion
import {motion} from "framer-motion"

function Modal({handleModal}) {
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
        <img src={rocket} alt="rocket" className="rounded-[5px]" />
      </div>

      {/* modal body */}
      <div className="mt-8 text-md flex flex-col gap-2">
        <h2 className="font-bold">CRS-1</h2>
        <div className="flex items-center justify-between">
          <p>Type: Dragon 1.1</p>
          <p>Flight: 36</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="tracking-wider">Status</span>
          <span className="px-2 text-xs py-1 bg-green-500 text-white rounded-full">
            Active
          </span>
        </div>
        <div className="mt-5">
          <span className="font-bold">Description: </span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem laborum maxime libero voluptas, amet sint velit quae, aspernatur facere asperiores distinctio. Esse atque dolores, autem molestiae harum quos saepe voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quaerat, amet explicabo dignissimos minima vitae. Ea qui enim dolores commodi. Aut nisi, ab maiores sunt praesentium temporibus veritatis optio incidunt dolores deserunt aspernatur numquam maxime nesciunt ipsam alias at eaque reiciendis officia quo blanditiis. Error similique eveniet necessitatibus explicabo doloremque?</span>
        </div>
      </div>

      {/* modal footer */}
    </motion.div>
  </motion.div>
  )
}

export default Modal