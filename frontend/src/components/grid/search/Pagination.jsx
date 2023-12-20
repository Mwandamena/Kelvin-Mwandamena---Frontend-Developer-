import React from "react";

function Pagination() {
  return (
    <div className="mt-8 flex justify-end">
      <div className="flex items-center gap-4">
          <span className="py-2 px-4 border-b-[1px] border-b-black">1</span>
          <span className="py-2 px-4 rounded-[10px]">2</span>
          <span className="py-2 px-4 rounded-[10px]">3</span>
          <span className="py-2 px-4 rounded-[10px]">4</span>
          <span className="py-2 px-4 rounded-[10px]">5</span>
      </div>
    </div>
  );
}

export default Pagination;
