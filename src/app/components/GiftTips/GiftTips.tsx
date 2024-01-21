import { Link, Image } from "@nextui-org/react";
import React from "react";

export default function GiftTips() {
  const registries: { [key: string]: string } = {
    Amazon: "https://www.amazon.com/wedding/share/noahandrileyb",
    IKEA: "https://www.ikea.com/us/en/gift-registry/guest/?id=ebcc9399-cdb0-488a-b167-ae3b50d50085",
  };

  const cards: { [key: string]: string } = {
    Amazon: "https://www.amazon.com/gp/product/B07PCMWTSG",
    IKEA: "https://ikea-usa.cashstar.com/store/recipient?locale=en-us",
    "Hobby Lobby":
      "https://www.hobbylobby.com/Gift-Cards/c/14?HLNextGenEcommIndex_prd%5Bconfigure%5D%5BhitsPerPage%5D=12&HLNextGenEcommIndex_prd%5Bconfigure%5D%5Bfacets%5D%5B0%5D=*&HLNextGenEcommIndex_prd%5Bconfigure%5D%5Bfilters%5D=categoryKeys%3A14&HLNextGenEcommIndex_prd%5Bconfigure%5D%5Bdistinct%5D=true&HLNextGenEcommIndex_prd%5Bconfigure%5D%5BfacetingAfterDistinct%5D=true&HLNextGenEcommIndex_prd%5Bconfigure%5D%5BclickAnalytics%5D=true",
    "Harbor Freight": "https://www.harborfreight.com/digital-gift-card",
  };

  return (
    <div
      id="GIFT TIPS"
      className="flex p-14 flex-col items-center justify-center w-screen min-h-screen"
    >
      <div>
        <h1 className="text-center pb-6 text-2xl tracking-widest">GIFT TIPS</h1>
      </div>
      <div className="p-3 max-w-xl text-xl text-justify">
        <p>
          We greatly appreciate any gifts that you feel led to give to us. We
          have listed our registries below along with some other gifts that
          we&apos;d love!
        </p>
        <br />
        <p>
          If purchasing a giftcard, please use <i>nburnet1@duck.com</i> as the
          recipient email.
        </p>
      </div>

      <div className="flex flex-row">
        <div className=" flex flex-col  p-3">
          <h2 className="text-xl pb-6">Our Registries:</h2>

          {Object.keys(registries).map((key) => (
            <Link
              underline="always"
              color="foreground"
              href={registries[key]}
              className="text-lg"
              key={key}
            >
              {key}
            </Link>
          ))}
        </div>
        <div className="flex flex-col p-3">
          <h2 className="text-xl pb-6">Gift Card Ideas: </h2>
          {Object.keys(cards).map((key) => (
            <Link
              underline="always"
              color="foreground"
              href={cards[key]}
              className="text-lg"
              key={key}
            >
              {key}
            </Link>
          ))}
        </div>
      </div>
      <div className="justify-end items-end flex">
        <Image
          alt="Wedding Flowers"
          src="./wedding_asset_canva.svg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
