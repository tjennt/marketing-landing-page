import React from "react";
import Image from "next/image";
import socialDashboard from "../../../public/assets/images/landing-page/social-dashboard.svg";
import { FiPlay } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

export default function BlockOne() {
  return (
    <div className="grid grid-cols-1 gap-4 space-x-3 items-center md:grid-cols-5 px-3 xl:px-0">
      <div className="col-span-2 space-y-8">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Setup your Mijuapp app account in no-time!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae
          debitis dolorum deleniti at, omnis soluta provident...
        </p>
        <div className="space-x-3 lg:space-x-3 md:space-y-3 md:space-x-0 sm:space-x-3">
          <button
            type="button"
            className="btn btn-primary btn-rounded-py font-semibold"
          >
            DOWNLOAD
            <FaDownload size="1em" className="inline mb-1 ml-1 text-while" />
          </button>

          <button
            type="button"
            className="btn btn-out-secondary btn-rounded-py font-semibold"
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
