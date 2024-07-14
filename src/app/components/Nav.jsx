import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div className="container mx-auto flex flex-row justify-between py-6">
      <div>
        <ul className="flex flex-row">
          <p className="text-red-600 text-2xl mr-10 content-center tracking-[8px]">PHLOX</p>
          <li className="mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Home
            </a>
          </li>
          <li className="mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Shop
            </a>
          </li>
          <li className="mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              About Us
            </a>
          </li>
          <li className="mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Blog
            </a>
          </li>
          <li className="mr-10 content-center">
            <a className="text-gray-400 hover:text-black transform transition hover:scale-125 inline-block">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row">
          <li className="ml-10 content-center">
            <a className="text-black">Login</a>
          </li>
          <Image
            className="ml-10"
            src="/search-svgrepo-com (1).svg"
            alt="search"
            width={30}
            height={30}
          />
          <Image
            className="ml-10"
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
