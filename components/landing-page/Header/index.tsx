import React from "react";
import Link from "next/link";
// import { isMD } from "../../../common/detectScreen";

export default function Header() {
  return (
    <div className="justify-between mt-3 flex">
      <div className="order-first">
        <h1 className="text-4xl text-primary font-bold">
          {/* {isMD ? "TIEN" : "HEHE"} */}
        </h1>
      </div>
      <div className="order-last flex items-center space-x-10">
        <Link href="#">
          <a className="font-semibold text-secondary">HOME</a>
        </Link>
        <Link href="#">
          <a className="font-semibold text-secondary">FEATURES</a>
        </Link>
        <Link href="#">
          <a className="font-semibold text-secondary">CONTACT</a>
        </Link>
        <Link href="#">
          <a className="font-semibold text-secondary">OVERVIEW</a>
        </Link>
        <Link href="#">
          <a className="font-semibold text-secondary">SCREENS</a>
        </Link>
        <button
          type="button"
          className="btn btn-out-primary btn-rounded-py font-semibold hover:bg-primary hover:text-while"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}
