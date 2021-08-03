import React from "react";
import Image from "next/image";
import svgBlogging from "../../../public/assets/images/landing-page/blogging.svg";
import svgBgBlock3 from "../../../public/assets/images/landing-page/bg-block-3.svg";

export default function BlockThree() {
  const [width, height] = [170, 170];
  return (
    <div
      className="relative"
      style={{
        marginTop: '-6px',
      }}
    >
      <div className="absolute top-0" style={{ zIndex: -1 }}>
        <Image src={svgBgBlock3} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 space-x-3 md:px-16">
        <div className="col-span-3 mr-4">
          <Image src={svgBlogging} />
        </div>
        <div className="col-span-2 space-y-2">
          <h1 className="text-2xl font-nomal text-primary sm:text-xl md:text-2xl">
            What make us Great!
          </h1>
          <p className="text-2xl font-semibold text-black sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adip, sed diam
          </p>
          <p className="text-xl font-semibold text-gray-dark sm:text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptatum reiciendis necessitatibus, fuga natus assumenda delectus
            maiores deleniti dolorum unde officiis.
          </p>
        </div>
      </div>
      <div className="sm:h-16 md:40"></div>
    </div>
  );
}
