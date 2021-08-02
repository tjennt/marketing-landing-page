import React from "react";
import Image from "next/image";
import { Block } from "./interface";

const data = [
  {
    name: "Active Downloads",
    value: 381,
  },
  {
    name: "Facebook Likes",
    value: 26.9,
  },
  {
    name: "Satisfied Customers",
    value: 7.5,
  },
  {
    name: "Instagram Follows",
    value: 150,
  },
];

export default function BlockFive() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-20 md:px-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-3 xl:px-0 sm:px-3">
      {data.map((item: Block) => (
        <div className="bg-gray shadow-xl text-center py-20 rounded-3xl cursor-pointer hover:ring-4 hover:ring-primary-light duration-300">
          <p className="text-4xl text-secondary font-semibold">{item.value}K</p>
          <p className="text-xl font-medium text-gray-dark">{item.name}</p>
          <div className="border-b-8 border-primary w-16 pt-3 md:border-b-4"></div>
        </div>
      ))}
    </div>
  );
}
