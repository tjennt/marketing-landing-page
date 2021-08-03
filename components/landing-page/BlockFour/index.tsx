import React from "react";
import Image from "next/image";
import { Block } from "./interface";
import svgJoyrideRe from "../../../public/assets/images/landing-page/joyride-re.svg";
import svgVideoGrapher from "../../../public/assets/images/landing-page/videographer.svg";
import svgGroupSelfie from "../../../public/assets/images/landing-page/group-selfie.svg";
import svgComingHome from "../../../public/assets/images/landing-page/coming-home.svg";

const blocks = [
  {
    name: "Awesome Stickers",
    value:
      "Duis aute irure dolor in reprehend in voluptate velit cillum dolore",
    image: svgJoyrideRe,
  },
  {
    name: "Video Chat",
    value: "Nulla pariatur excepteur cupidatat proident, sunt in",
    image: svgVideoGrapher,
  },
  {
    name: "Conference Call",
    value: "Nulla pariatur excepteur cupidatat proident, sunt in",
    image: svgGroupSelfie,
  },
  {
    name: "Company Wit",
    value:
      "Duis aute irure dolor in reprehend in voluptate velit cillum dolore",
    image: svgComingHome,
  },
];

export default function BlockFour() {
  const [width, height] = [160, 160];

  return (
    <div className="grid grid-cols-1 gap-4 md:px-16 md:grid-cols-3 px-3 xl:px-0 sm:px-3">
      <div className="space-y-8 md:col-span-1">
        <h1 className="text-3xl font-bold md:text-3xl lg:sm:text-5xl">Awesome app for business to grow</h1>
        <p className="text-gray-dark font-semibold">
          Duis aute irure dolor in reprehend in voluptate velit cill cillum
          cupidatat non proident sunt in cillum Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button className="bg-primary rounded-3xl text-while font-semibold py-3 px-8 focus:ring-4 focus:ring-primary-light duration-300">
          LEARN MORE
        </button>
      </div>
      <div className="w-full grid grid-cols-2 gap-10 md:col-span-2">
        {blocks.map((item: Block, index: number) => (
          <div key={index} className="text-center">
            <Image src={item.image} width={width} height={height} />
            <p className="text-xl text-secondary font-semibold">{item.name}</p>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
