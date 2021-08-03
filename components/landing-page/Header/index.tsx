import React, { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "HOME", href: "#", current: true },
  { name: "CONTACT", href: "#", current: false },
  { name: "OVERVIEW", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    // <div className="justify-between mt-3 hidden md:flex">
    //   <div className="order-first">
    //     <h1 className="text-4xl text-primary font-bold">
    //       WJTAPP
    //     </h1>
    //   </div>
    //   <div className="order-last flex items-center space-x-10">
    //     <Link href="#">
    //       <a className="font-semibold text-secondary">HOME</a>
    //     </Link>
    //     <Link href="#">
    //       <a className="font-semibold text-secondary">CONTACT</a>
    //     </Link>
    //     <Link href="#">
    //       <a className="font-semibold text-secondary">OVERVIEW</a>
    //     </Link>
    //     <button
    //       type="button"
    //       className="btn btn-out-primary btn-rounded-py font-semibold hover:bg-primary hover:text-while"
    //     >
    //       GET STARTED
    //     </button>
    //   </div>
    // </div>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-3">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="block lg:hidden text-4xl text-primary font-bold">
                    WJTAPP
                  </h1>
                  <h1 className="hidden lg:block h-8 text-4xl text-primary font-bold">
                    WJTAPP
                  </h1>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <div className="flex items-center space-x-10 hidden md:block md:ml-6">
                      {navigation.map((item: any, index: number) => (
                        <Link href={item.href} key={index}>
                          <a className="font-semibold text-secondary">
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <button
                        type="button"
                        className="btn btn-out-primary btn-rounded-py font-semibold hover:bg-primary hover:text-while"
                      >
                        GET STARTED
                      </button>
                    </div>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <button
                type="button"
                className="btn btn-out-primary btn-rounded-py font-semibold hover:bg-primary hover:text-while"
              >
                GET STARTED
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
