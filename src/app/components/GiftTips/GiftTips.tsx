import { Link, Image } from "@nextui-org/react";
import React from "react";

export default function GiftTips() {
    const registries: { [key: string]: string } = {
        "Amazon": "https://www.amazon.com/",
        "IKEA": "https://www.ikea.com/us/en/",
    }

    const cards: { [key: string]: string } = {
        "Amazon": "https://www.amazon.com/",
        "IKEA": "https://www.ikea.com/us/en/",
        "Hobby Lobby": "https://www.hobbylobby.com/",
        "Harbor Freight": "https://www.harborfreight.com/",
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            <div className="p-3">
                <h1 className="text-center text-2xl tracking-widest">GIFT TIPS</h1>
            </div>
            <div className="p-3 max-w-lg">
                <p>
                    We greatly appreciate any gifts that you feel led to give to us.
                    We have listed our registries below along with some other gifts that we'd love!
                </p>
            </div>

            <div className="flex flex-row">
                <div className=" flex flex-col p-3">
                    <h2 className="text-xl pb-6">Our Registries:</h2>

                    {Object.keys(registries).map((key) => (
                        <Link underline="always" color="foreground" href={registries[key]} className="text-lg" key={key}>{key}</Link>
                    ))}

                </div>
                <div className="flex flex-col p-3">
                    <h2 className="text-xl pb-6">Gift Card Ideas: </h2>
                    {Object.keys(cards).map((key) => (
                        <Link underline="always" color="foreground" href={cards[key]} className="text-lg" key={key}>{key}</Link>
                    ))}
                </div>
                <div>
                    <div className="justify-end items-end flex">
                        <Image src="./wedding_asset_canva.svg" width={125} height={125} />
                    </div>
                </div>
            </div>
        </div>
    )
}