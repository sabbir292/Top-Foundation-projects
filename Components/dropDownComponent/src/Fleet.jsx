import { useState } from "react";
import FleetData from "./FleetData";

const Fleet = () => {
  const [visibleCar, setVisibleCar] = useState(6);

  function handleShowMore() {
    setVisibleCar((prev) => prev + 6);
  }

  const carEls = FleetData.slice(0, visibleCar).map((item) => {
    const { id, brand, model, category, price, url } = item;
    return (
      <div
        key={id}
        className="rounded-lg bg-slate-900 text-gray-300 mb-4 shadow-md  transition-transform ease-in-out duration-300 hover:-translate-y-5 h-fit"
      >
        <div className="h-[70%] object-cover bg-slate-300">
          <img
            className="object-cover w-full h-56 rounded-lg p-6"
            src={url}
            alt=""
          />
        </div>

        <div className="flex gap-8 mt-6 p-4 justify-between">
          <div className="flex flex-col items-start gap-4">
            <p className="font-semibold text-xl">{`$${price}`}</p>
            <h3 className="font-bold text-xl">{model}</h3>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-xl font-semibold">{category}</p>
            <button className="px-6 py-2 bg-slate-200 rounded-md text-gray-800 font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="spacing grid place-items-center">
      <div className="grid place-items-center mb-10 md:mb-24">
        <h3 className="text-md font-medium text-center md:text-start">
          Our Collections
        </h3>
        <h1 className="text-2xl font-bold text-center md:text-start">
          Our fleets with more than 150+ cars
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{carEls}</div>
      {visibleCar < FleetData.length && (
        <button
          className="mx-auto px-10 py-4 my-8 rounded-lg font-bold text-lg bg-sky-800 hover:bg-transparent outline-none border border-transparent hover:border-rose-800 duration-300"
          onClick={handleShowMore}
        >
          View all cars
        </button>
      )}
    </section>
  );
};

export default Fleet;
