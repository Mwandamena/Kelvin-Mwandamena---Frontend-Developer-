// card image - dummy
import rocket from "../../../assets/rocket.jpeg";

function Card({ name, status, type, flight, handleRocket, handleClick, image, id }) {
  return (
    <div className="flex flex-col gap-4 max-w-lg cursor-pointer" onClick={()=> {handleRocket(id)}}>
      {/* image */}
      <div>
        <img src={image} alt="rocket" className="rounded-[10px] w-full xl:w-56" />
      </div>
      {/* card footer */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold tracking-wider">{name}</h3>
          <span className={`${status == true ? "bg-green-500" : "bg-blue-500"} px-2 text-xs py-1 text-white rounded-full`}>
            {status ? "Active" : "Retired"}
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
