import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="lg:flex lg:flex-1">
            <button className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="logo">SARCASM</h1>
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => {
                console.log("Done");
                setToggleMenu(!toggleMenu);
              }}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <RxHamburgerMenu />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 BodySmall leading-6 text-gray-900"
                aria-expanded="false"
              >
                Product
              </button>
            </div>
            <button className="BodySmall text-gray-900">Features</button>
            <button className="BodySmall text-gray-900">Marketplace</button>
            <button className="BodySmall text-gray-900">Company</button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="BodyLarge text-gray-900">Log in</button>
            <button className="BodyLarge prim-color text-gray-900">
              Sign Up
            </button>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}

        {toggleMenu && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state. */}
            <div className="fixed inset-0 z-10" />
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex md:hidden items-center justify-between">
                <button className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h1 className="logo">SARCASM</h1>
                </button>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <IoIosClose />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        aria-controls="disclosure-1"
                        aria-expanded="false"
                      >
                        Product
                      </button>
                    </div>
                    <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Features
                    </button>
                    <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Marketplace
                    </button>
                    <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Company
                    </button>
                  </div>
                  <div className="py-6">
                    <button className="BodyLarge text-gray-900">Log in</button>
                    <button className="BodyLarge prim-color text-gray-900">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
