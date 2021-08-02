import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mt-3">
      <div className="order-first">
        <h1 className="text-4xl text-primary font-bold">MIJUAPP</h1>
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
          className="text-primary font-semibold border-2 rounded-3xl py-3 px-6 hover:bg-primary hover:text-while focus:ring-4 focus:ring-primary-light duration-300"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}
