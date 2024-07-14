import React from "react";
import Image from "next/image";

function Seven() {
  return (
    <div className="container mx-auto mt-36">
      <div className="text-center">
        <p className="text-5xl font-bold">Recent News</p>
        <p className="text-gray-500 mt-6">there are many variations passages</p>
      </div>
      <div className="flex justify-between mt-16">
        <div>
          <Image
            className="rounded-[25px]"
            src="/dFQROr7oWzulq5Fa5nocDzzu5KP6CD83AJ7CUWtyfmgASiinHC1FKsSgGLRzvAiqOcW.jpg"
            width={420}
            height={100}
            alt="News1"
          />
          <div className="mt-8">
            <p>October 20, 2024</p>
            <p className="text-lg font-bold mt-4">How to choose perfect gadgets</p>
            <p className="font-medium mt-2">
              Foxgloves in hedges, Surround the farms,<br/> Seatbelts are safe, And so are your<br/> arms ...
            </p>
          </div>
        </div>
        <div>
          <Image
            className="rounded-[25px]"
            src="/iphone_buy__chvehwtfgamq_og.jpg"
            width={450}
            height={100}
            alt="News2"
          />
          <div className="mt-8">
            <p>October 20, 2024</p>
            <p className="text-lg font-bold mt-4">How to choose perfect gadgets</p>
            <p className="font-medium mt-2">
              Foxgloves in hedges, Surround the farms,<br/> Seatbelts are safe, And so are your<br/> arms ...
            </p>
          </div>
        </div>
        <div>
          <Image
            className="rounded-[25px]"
            src="/_VR.jpg"
            width={430}
            height={100}
            alt="News3"
          />
          <div className="mt-8">
            <p>October 20, 2024</p>
            <p className="text-lg font-bold mt-4">How to choose perfect gadgets</p>
            <p className="font-medium mt-2">
              Foxgloves in hedges, Surround the farms,<br/> Seatbelts are safe, And so are your<br/> arms ...
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 my-20"></div>
    </div>
  );
}

export default Seven;
