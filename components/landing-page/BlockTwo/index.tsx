import React from "react";
import Image from "next/image";
import { Block } from "./interface";
import svgJoyrideRe from "../../../public/assets/images/landing-page/joyride-re.svg";
import svgVideoGrapher from "../../../public/assets/images/landing-page/videographer.svg";
import svgGroupSelfie from "../../../public/assets/images/landing-page/group-selfie.svg";
import svgBgBlock2 from "../../../public/assets/images/landing-page/bg-block-2.svg";

const blocks = [
  {
    name: "Awesome Sticker",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...",
    image: svgJoyrideRe,
  },
  {
    name: "Video Chat",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...",
    image: svgVideoGrapher,
  },
  {
    name: "Conference Call",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...",
    image: svgGroupSelfie,
  },
];

export default function BlockTwo() {
  const [width, height] = [170, 170];
  return (
    <div
      className="space-x-3 bg-no-repeat bg-bottom"
      style={{
        minHeight: '416px',
        background: "url('../../../assets/images/landing-page/bg-block-2.svg')"
      }}
    >
      <h1 className="font-bold text-2xl text-center">
        Features loved by our users!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blocks.map((item: Block) => (
          <div className="col-span-1 text-center">
            <Image src={item.image} width={width} height={height} />
            <h2 className="text-secondary font-bold text-xl">{item.name}</h2>
            <p className="text-gray-dark">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="text-primary font-semibold border-2 rounded-3xl py-2 px-6 focus:ring-4 focus:ring-primary-light duration-300">
          BROWESE ALL FEATURES
        </button>
      </div>
      {/* <Image src={svgBgBlock2} className="" /> */}
    </div>
  );
}
