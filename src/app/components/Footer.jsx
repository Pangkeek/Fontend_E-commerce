import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between mb-20 px-4 md:px-0 gap-10 lg:gap-0">
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
            alt="IG"
          />
          <Image
            className="mr-8"
            src="/linkedin-161-svgrepo-com.svg"
            width={20}
            height={100}
            alt="LikeIn"
          />
          <Image
            className="mr-8"
            src="/facebook-176-svgrepo-com.svg"
            width={20}
            height={100}
            alt="Facebook"
          />
          <Image
            className=""
            src="/twitter-154-svgrepo-com.svg"
            width={20}
            height={100}
            alt="Twitter"
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
        <form className="bg-gray-200 rounded-[25px] md:rounded-full mt-6 flex flex-col md:flex-row p-2 md:p-0">
            <input className="bg-transparent font-serif my-3 mx-4 md:my-5 md:mx-10 outline-none border-none w-full md:w-auto flex-1" placeholder="Enter Your Email"></input>
            <button className="font-serif bg-red-600 text-white rounded-full py-3 px-8 md:ml-3 w-full md:w-auto mt-2 md:mt-0">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
