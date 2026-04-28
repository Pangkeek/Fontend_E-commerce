import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between py-6 px-4 md:px-0 items-center">
      <div className="mb-6 md:mb-0 w-full md:w-auto flex flex-col md:flex-row items-center">
        <ul className="flex flex-wrap justify-center md:flex-row items-center gap-y-4 md:gap-y-0">
          <p className="text-red-600 text-2xl md:mr-10 content-center tracking-[8px] w-full text-center md:w-auto md:text-left mb-4 md:mb-0">PHLOX</p>
          <li className="mr-4 md:mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Home
            </a>
          </li>
          <li className="mr-4 md:mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Shop
            </a>
          </li>
          <li className="mr-4 md:mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              About Us
            </a>
          </li>
          <li className="mr-4 md:mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Blog
            </a>
          </li>
          <li className="mr-0 md:mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row items-center">
          <li className="ml-4 md:ml-10 content-center">
            <a className="text-black">Login</a>
          </li>
          <Image
            className="ml-4 md:ml-10"
            src="/search-svgrepo-com (1).svg"
            alt="search"
            width={30}
            height={30}
          />
          <Image
            className="ml-4 md:ml-10"
            src="/bag-shopping-svgrepo-com (2).svg"
            alt="search"
            width={30}
            height={30}
          />
        </ul>
      </div>
    </div>
  );
}

export default Nav;
