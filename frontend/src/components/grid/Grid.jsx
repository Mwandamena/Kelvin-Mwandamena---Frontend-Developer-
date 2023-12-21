// componets
import Container from "../common/Container";
import Search from "./search/Search";
import Filter from "./search/Filter";
import Card from "../grid/card/Card";
import Pagination from "./search/Pagination";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Grid() {
  // modal state
  const [active, setActive] = useState(false);

  // single rocket
  const [rocket, setRocket] = useState({});

// all rockets
  const [rockets, setRockects] = useState([]);

  const api = "https://api.spacexdata.com/v3/rockets"
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VyIjoiTXdhbmRhbWVuYSIsInJvbGUiOiJhZG1pbiJ9.XrX2vLm4zDE6zLXnQiqVP5jYWi2TYQ2ZvLJH3Toet1A"

  // fetch call to get all rockets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:80/space-x/server/api/rockets.php", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });

        if (res.ok) {
          console.log("Data fetched");
        }
        const data = await res.json();
        console.log(data);
        setRockects([...data]);
        return;
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };

    fetchData();
  }, []);

  const setRocketId = (id) => {
    const item = rockets.filter((rocket)=> rocket)
    const modalItem = item.filter((filteredItem)=> filteredItem.rocket_id === id)
    setRocket(...modalItem)
    setActive(true)
    console.log("Modal Item", modalItem);
  };

  // modal function
  const handleModal = () => {
    setActive((current) => !current);
  };

  // search function
  const handleSearch = (query) => {
    
  }

  console.log(rocket);

  return (
    <section className="mt-12 mb-12 relative border-t-[1px] border-t-gray-200">
      <Container>
        <main className="mt-8">
          {/* filter and search componets */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Search handleSearch={handleSearch} />
            <Filter />
          </div>
          {/* grid section */}
          <div className="mt-6">
            <p>Showing all results</p>

            {/* cards */}
            <div className="mt-8 place-items-center grid gap-12 grid-cols-x md:grid-cols-3 lg:grid-cols-4">
              {rockets.map((item) => (
                <Card
                  id={item.rocket_id}
                  name={item.rocket_name}
                  type={item.rocket_type}
                  flight={item.first_flight}
                  status={item.active}
                  key={item.id}
                  image={item.flickr_images[0]}
                  handleRocket={setRocketId}
                />
              ))}
            </div>

            {/* pagination */}
            <Pagination />
          </div>

          {/* modal */}
          <AnimatePresence>
            {active ? <Modal rocket={rocket} handleModal={handleModal} /> : null}
          </AnimatePresence>
        </main>
      </Container>
    </section>
  );
}

export default Grid;
