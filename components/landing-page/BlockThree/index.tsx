import React from "react";
import Image from "next/image";
import svgBlogging from "../../../public/assets/images/landing-page/blogging.svg";

export default function BlockThree() {
  const [width, height] = [170, 170];
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-5 space-x-3 md:px-16"
      style={{
        marginTop: 0,
        background: "url('../../../assets/images/landing-page/bg-block-3.svg')",
        // backgroundSize: '100%'
      }}
    >
      <div className="col-span-3 mr-4">
        <Image src={svgBlogging} />
      </div>
      <div className="col-span-2 space-y-2">
        <h1 className="text-2xl font-nomal text-primary">
          What make us Great!
        </h1>
        <p className="text-3xl font-semibold text-black">
          Lorem ipsum dolor sit amet, consectetur adip, sed diam
        </p>
        <p className="text-md font-semibold text-gray-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatum reiciendis necessitatibus, fuga natus assumenda delectus
          maiores deleniti dolorum unde officiis.
        </p>
      </div>
    </div>
  );
}
