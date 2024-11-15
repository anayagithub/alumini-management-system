import React from "react";
import servicesData from "@/data/ServicesData";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" h-auto text-black flex justify-center items-center">
      <div className=" bg-white w-11/12 max-w-7xl   p-10  shadow-lg overflow-y-auto mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className=" flex flex-col justify-start items-center mx-2 mb-6 text-center"
            >
              <Link href={service.link}>
                <img
                  className="rounded-2xl mb-4 w-full h-48 object-cover cursor-pointer"
                  src={service.image}
                  alt={service.title}
                />
              </Link>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
