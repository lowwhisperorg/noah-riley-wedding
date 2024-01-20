"use client"
import React from "react";
import { Image } from "@nextui-org/react";

export default function Photos() {
    const image_urls = [
        "./Pictures/Engage_4.jpeg",
        "./Pictures/Engage_2.jpeg",
        "./Pictures/Engage_3.jpeg",
        "./Pictures/Engage_1.jpeg",
        "./Pictures/Engage_5.jpeg",
        "./Pictures/Engage_6.jpeg",
        "./Pictures/Engage_7.jpeg",
        "./Pictures/Engage_8.jpeg",
        "./Pictures/Engage_9.jpeg",
    ];
    const [index, setIndex] = React.useState(0);

    return (
        <div id="PHOTOS" className="flex flex-col justify-center items-center w-screen min-h-screen ">
            <div>
                <h1 className="text-center pb-6 text-2xl tracking-widest">PHOTOS</h1>
            </div>
            <div className="grid grid-cols-1 justify-center lg:grid-cols-3">
                {image_urls.map((url, i) => (
                    <div key={i} className="flex justify-center items-center p-2">
                        <Image alt="A picture of Noah and Riley" fallbackSrc={"odie_bw_600.png"} src={url} width={500} height={500} />
                    </div>
                ))}
            </div>
        </div>

    );
}
