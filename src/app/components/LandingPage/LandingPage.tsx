import { Link, Image } from "@nextui-org/react";
import React from "react";

export default function LandingPage() {
  const links = ["EVENT DETAILS", "GIFT TIPS", "A NOTE FROM US", "PHOTOS"];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:min-h-[calc(100vh-128px)] overflow-x-hidden">
        <div className="hidden justify-end items-end md:flex">
          <Image
            alt="Wedding Flowers"
            src="./wedding_asset_4.png"
            width={450}
            height={450}
          />
        </div>

        <div className="flex items-center justify-center  flex-col p-3">
          <div className="flex-col flex items-center md:items-start">
            <h1 className="text-center text-2xl tracking-widest pb-6">
              WE&apos;RE GETTING MARRIED!
            </h1>

            {links.map((link) => (
              <Link
                href={"#" + link}
                key={link}
                underline="always"
                color="foreground"
                className="pb-6 text-xl"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="justify-end items-end md:flex">
          <Image
            alt="A picture of Noah and Riley"
            src="./noahriley.jpeg"
            width={450}
            height={450}
          />
        </div>
      </div>
    </>
  );
}
