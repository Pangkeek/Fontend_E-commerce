import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto flex justify-between mb-20">
      <div>
        <p className="text-red-600 text-2xl mr-10 content-center tracking-[8px]">
          PHLOX
        </p>
        <p className="text-gray-500 mt-8">
          there are many variants<br/>
          passages of lorem ipsum avaliable,<br/>
          but the majority have
        </p>
        <div className="flex items-center mt-8">
          <Image
            className="mr-8"
            src="/instagram-svgrepo-com.svg"
            width={25}
            height={100}
          />
          <Image
            className="mr-8"
            src="/linkedin-161-svgrepo-com.svg"
            width={20}
            height={100}
          />
          <Image
            className="mr-8"
            src="/facebook-176-svgrepo-com.svg"
            width={20}
            height={100}
          />
          <Image
            className=""
            src="/twitter-154-svgrepo-com.svg"
            width={20}
            height={100}
          />
        </div>
      </div>
      <div className="">
        <p className="font-bold">Quick links</p>
        <div className="flex flex-col mt-8 font-medium">
          <a className=" font-medium">Home</a>
          <a className=" font-medium mt-1">About</a>
          <a className=" font-medium mt-1">Shop</a>
          <a className=" font-medium mt-1">Contact</a>
        </div>
      </div>
      <div>
        <p className="font-bold">Contact</p>
        <p className="mt-8"> 401-73-6114 Manley Rosenbaum</p>
        <p className="mt-1">2526 W Davison Detroit Michigan</p>
        <p className="mt-1">United States 48238</p>
      </div>
      <div>
        <p className="font-bold">Subscribe To Our Email</p>
        <p className="text-3xl font-bold mt-6">For Lastest News & Updates</p>
        <form className="bg-gray-200 rounded-full mt-6">
            <input className="bg-transparent font-serif my-5 mx-10 outline-none border-none" placeholder="Enter Your Email"></input>
            <button className="font-serif bg-red-600 text-white rounded-full py-3 px-8 ml-3">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
