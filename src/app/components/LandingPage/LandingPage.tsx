import { Link, Image } from "@nextui-org/react";
import React from "react";


export default function LandingPage() {

    const links = ["EVENT DETAILS", "GIFT TIPS", "A NOTE FROM US"]

    return (<>
        <div className="flex flex-col md:flex-row justify-center md:justify-between  w-screen min-h-[calc(100vh-65px)]"> {/**/}
            <div className="hidden justify-end items-end md:flex">
                <Image src="./wedding_asset_4.png" width={500} height={500}/>
            </div>


            <div className="flex items-center justify-center  flex-col p-3">
                <div className="flex-col flex items-center md:items-start">
                    <h1 className="text-center text-2xl tracking-widest pb-6">WE'RE GETTING MARRIED!</h1>

                    {links.map((link) => (
                        <Link href={link} underline="always" color="foreground" className="pb-6 text-xl">
                            {link}
                        </Link>
                    ))}
                    
                </div>
            </div>
            <div className="justify-end items-end md:flex">
                <Image src="./noahriley.jpeg" width={500} height={500}/>
            </div>
        </div>


    </>);
}
