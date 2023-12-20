import React, { useState } from "react";
import Container from "../common/Container";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import CallToAction from "./CallToAction";

// navbar links
import { links } from "../../constants/links";

// framer inputs
import { AnimatePresence, motion } from "framer-motion";

// assets
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"

function Navbar() {
  // mobile navbar state
  const [open, setOpen] = useState(false);

  // mobile nav toggle
  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        {/* Navbar Component */}
        <nav className="py-4 flex items-center justify-between border-b-[1px] border-b-gray-200">
          {/* logo */}
          <Logo />

          <motion.div className="hidden justify-between items-center gap-8 md:flex">
            {/* navbar links */}
            <Navlinks />

            {/* cta button */}
            <CallToAction />
          </motion.div>

          {/* navbar toggler */}
          <div className="block md:hidden">
            <button
              className="block md:hidden cursor-pointer"
              onClick={() => handleToggle()}
              data-testid="toggle"
            >
              <span className="sr-only">Menu</span>
              <img src={menu} alt="menu" />
            </button>
          </div>
        </nav>
      </Container>

      {/* mobile nav */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 h-screen w-full z-20 bg-black/60 md:hidden justify-between items-center gap-8 flex"
            animate={{ opacity: 1 }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className={`fixed h-full overflow-x-hidden bg-white py-6 px-4 ${
                open ? "inset-0 w-[250px]" : ""
              }`}
              initial={{ width: 0 }}
              animate={{
                width: "250px",
              }}
              transition={{
                duration: 0.3,
              }}
              exit={{
                width: 0,
              }}
            >
              {/* close button */}
              <div className="flex w-full justify-end">
                <span className="sr-only">Close</span>
                <button
                  className="text-black"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img src={close} alt="close menu" />
                </button>
              </div>

              {/* navbar links */}
              <div className="mt-8 flex flex-col gap-6">
                  {links.map((link)=> (
                    <a href={`/${link.id}`} key={link.id} className="focus:underline hover:underline">{link.name}</a>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
