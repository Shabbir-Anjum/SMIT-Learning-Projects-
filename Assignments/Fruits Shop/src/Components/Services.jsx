import React from "react";
import ServicesData from "./Data/ServicesData";

export default function Services() {
  return (
    <>
      <section className=" flex flex-col gap-8 justify-center my-10 items-center container">
        <div className="text-center">
          <h2 className="heading">Our Services</h2>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quasi quisquam, accusantium consequuntur.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {ServicesData.map((value, index) => (
            <div key={index} className="flex  flex-col gap-4 p-5 items-center text-center border border-gray-300 justify-center">
              <div>
                <img src={value.src} alt="error" />
              </div>
              <div className="cardTitle">{value.title}</div>
              <div>
                {value.content}
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="btn bg-black">Read More</button>
        </div>
      </section>
    </>
  );
}
