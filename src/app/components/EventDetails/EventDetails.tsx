import React from "react";

import { Image, Link } from "@nextui-org/react";

export default function EventDetails() {
    const shower =["DATE: March 9th, 2024", "TIME: 2:00 p.m.", "LOCATION: Hendersonville Church", "1705 Spartanburg Hwy Hendersonville, NC"];
    const wedding = ["Private Ceremony.", "See invitation for details."];

    return (
        <div className="flex flex-row items-center justify-center w-screen min-h-screen">



            <div className="flex items-center flex-col p-3">
                <div className="flex-col flex">
                    <h1 className="text-center text-2xl tracking-widest pb-6">EVENT DETAILS</h1>
                </div>

                <div className="flex flex-col md:flex-row ">
                    <div className="p-3">
                        <h2 className="text-xl pb-6">THE SHOWER</h2>
                        
                        {shower.map((item) => (
                            <p className="text-lg">{item}</p>
                        ))}

                        <p className="text-lg" >See registry in <Link href="#" underline="always" color="foreground" >Gift Tips</Link></p>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl pb-6">THE WEDDING</h2>
                        {wedding.map((item) => (
                            <p className="text-lg">{item}</p>
                        ))}
                    </div>
                </div>

            </div>
            <div className="hidden justify-end md:flex items-end">
                <Image src="./wedding_asset_canva_3.svg" width={500} height={500}/>
            </div>

        </div>
    );
}