import React from "react";
import FruitsData from "./Data/Fruitsdata";

export default function Fruits() {
  return (
    <>
      <section className=" flex flex-col gap-8 justify-center my-10 items-center container">
        <div className="text-center">
          <h2 className="heading">Fresh Fruits</h2>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quasi quisquam, accusantium consequuntur.
          </div>
        </div>
        <div className="flex  gap-16 justify-center flex-col">
         {FruitsData.map((value, index)=>(<div className="flex gap-16 ">
            <div key={index} className=" flex flex-col gap-8" >
                <div className=" font-Kanit text-2xl ">
                   {value.title}
                </div>
                <div>
                   {value.content}
                </div>
                <div>
                    <button className="btn bg-black">Buy Now</button>
                </div>
            </div>
            <div className="">
                <img src={value.src} alt="error" />
            </div>
        </div>))}
        </div>
      </section>
    </>
  );
}
