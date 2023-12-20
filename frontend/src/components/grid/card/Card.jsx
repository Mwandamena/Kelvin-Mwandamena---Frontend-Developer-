// card image - dummy
import rocket from "../../../assets/rocket.jpeg";

function Card({ name, status, type, flight, handleModal }) {
  return (
    <div className="flex flex-col gap-4 max-w-lg cursor-pointer" onClick={()=> handleModal()}>
      {/* image */}
      <div>
        <img src={rocket} alt="rocket" className="rounded-[10px] w-full" />
      </div>
      {/* card footer */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold tracking-wider">{name}</h3>
          <span className="px-2 text-xs py-1 bg-green-500 text-white rounded-full">
            {status}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p>Type: {type}</p>
          <p>Flight: {flight}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
