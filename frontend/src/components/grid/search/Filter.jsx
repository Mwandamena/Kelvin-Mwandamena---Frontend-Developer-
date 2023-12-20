import React, { useState } from "react";
import Button from "../../common/Button";

// filter icon
import { MdTune } from "react-icons/md";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function Filter() {
  // dropdown status state
  const [open, setOpen] = useState(false);

  // function to show dropdown
  const handleClick = () => {
    setOpen((current) => !current);
  };

  // filters
  const filters = [
    {
      id: 1,
      label: "Status",
    },
    {
      id: 2,
      label: "Original launch",
    },
    {
      id: 3,
      label: "Type",
    },
  ];

  return (
    <div className="relative">
      <Button label={"Filter"} icon={<MdTune />} handleClick={handleClick} />

      {/* dropdown component */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute bg-white right-0 flex flex-col items-start mt-2 w-[150px] gap-2 border-[1px] rounded-[10px] shadow-md z-10"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                className="p-2 text-start hover:bg-gray-200 transition w-full rounded-[10px]"
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Filter;
