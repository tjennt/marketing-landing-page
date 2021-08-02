import React from "react";
import Image from "next/image";
import socialDashboard from "../../../public/assets/images/landing-page/social-dashboard.svg";
import { FiPlay } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

export default function BlockOne() {
  return (
    <div className="grid grid-cols-1 gap-4 space-x-3 items-center md:grid-cols-5 px-3 xl:px-0">
      <div className="col-span-2 space-y-8">
        <h1 className="text-5xl font-bold">
          Setup your Mijuapp app account in no-time!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae
          debitis dolorum deleniti at, omnis soluta provident...
        </p>
        <div className="space-x-3 lg:space-x-3 md:space-y-3 md:space-x-0 sm:space-x-3">
          <button
            type="button"
            className="bg-primary text-while font-semibold py-3 px-7 rounded-3xl focus:ring-4 focus:ring-primary-light duration-300"
          >
            DOWNLOAD
            <FaDownload size="1em" className="inline mb-1 ml-1 text-while" />
          </button>

          <button
            type="button"
            className="text-secondary font-semibold border-2 py-3 px-7 rounded-3xl focus:ring-4 focus:ring-secondary-light duration-300"
          >
            PLAY VIDEO
            <FiPlay size="1em" className="inline mb-1 ml-1 text-secondary" />
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <Image src={socialDashboard} />
      </div>
    </div>
  );
}
