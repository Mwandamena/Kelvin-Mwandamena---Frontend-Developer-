// componets
import Container from "../common/Container";
import Search from "./search/Search";
import Filter from "./search/Filter";
import Card from "../grid/card/Card";
import Pagination from "./search/Pagination";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function Grid() {
  // modal state
  const [active, setActive] = useState(false);

  // modal function
  const handleModal = () => {
    setActive(current => !current)
  }

  // dummy rocket data
  const data = [
    {
      id: 1,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 2,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 3,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 4,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 5,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 6,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 7,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
    {
      id: 8,
      name: "CRS-10",
      status: "Active",
      type: "Dragon 1.1",
      flight: "36",
    },
  ];
  return (
    <section className="mt-12 mb-12 relative border-t-[1px] border-t-gray-200">
      <Container>
        <main className="mt-8">
          {/* filter and search componets */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Search />
            <Filter />
          </div>
          {/* grid section */}
          <div className="mt-6">
            <p>Showing all results</p>

            {/* cards */}
            <div className="mt-8 place-items-center grid gap-12 grid-cols-x md:grid-cols-3 lg:grid-cols-4">
              {data.map((item) => (
                <Card
                  name={item.name}
                  type={item.type}
                  flight={item.flight}
                  status={item.status}
                  key={item.id}
                  handleModal={handleModal}
                />
              ))}
            </div>

            {/* pagination */}
            <Pagination />
          </div>

          {/* modal */}
          <AnimatePresence>{active ? <Modal handleModal={handleModal} /> : null}</AnimatePresence>
        </main>
      </Container>
    </section>
  );
}

export default Grid;
