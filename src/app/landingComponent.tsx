import Image from "next/image";
//import { configureServerSideGrowthBook } from "./growthbookServer";
//import { GrowthBook } from "@growthbook/growthbook";


export function LandingA() {
    let heading1: Array<string> = [],
        heading2: Array<string> = []

    for(let i = 0; i < 40; i++){
        heading1.push("SETUPS ");
        heading2.push(".BIKE ");
    }        
    return (
        <div className="size-full">
            <div className="h-dvh ml-[30%] w-[70%] z-20 top-0 absolute bg-gradient-to-r from-[black]"></div>
            <div className="h-dvh ml-[30%] w-[70%] top-0 absolute bg-right-top bg-no-repeat bg-cover bg-[url(/bg1.jpg)] bg-linear-to-l from-black to-white"></div>

            <div className="z-30 mt-5 relative overflow-hidden">
                <div className="w-full text-nowrap animate-loop-scroll flex flex-row text-9xl">
                    {heading1.map(i =>{ return i})}
                </div>
                <div className="w-full text-nowrap animate-loop-scroll-reverse flex flex-row text-9xl">
                    {heading2.map(i =>{ return i})}
                </div>

                <div className="mx-4 my-8 w-fit">
                    <div className="text-2xl">Let us remember the clicks</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-2 mt-8 bg-blue-400/50 rounded border border-gray-500 shadow-gray-500 shadow-sm">Sign Up!</button>
                        <button className="px-6 py-2 mt-8 mx-4 bg-gray-500/30 rounded border border-gray-500 shadow-gray-500 shadow-sm">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function LandingB() {

  return (
    <div >
        <div>B</div>
    </div>
  );
}
