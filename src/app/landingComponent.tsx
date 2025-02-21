export function LandingA() {
    //setup arrays for scrolling text animation
    let heading1: Array<string> = [],
        heading2: Array<string> = []
    for(let i = 0; i < 20; i++){
        heading1.push("SETUPS ");
        heading2.push(".BIKE ");
    }        

    return (
        <div className="size-full">
            <div className="sm:h-dvh h-[500px] sm:ml-[29%] sm:w-[71%] w-dvw z-20 top-0 absolute bg-gradient-to-t sm:bg-gradient-to-r from-[black]"></div>
            <div className="sm:h-dvh h-[500px] sm:ml-[30%] sm:w-[70%] w-dvw top-0 absolute bg-right-top bg-no-repeat bg-fill sm:bg-cover bg-[url(/bg1.jpg)]"></div>

            <div className="z-30 mt-9 relative overflow-hidden">
                <div className="w-full text-nowrap animate-loop-scroll flex flex-row text-6xl sm:text-9xl">
                    {heading1.map((e,i) => <div className="mr-9" key={i}>{e}</div>)}
                </div>
                <div className="w-full text-nowrap animate-loop-scroll-reverse flex flex-row text-6xl sm:text-9xl">
                    {heading2.map((e,i) => <div className="mr-9" key={i}>{e}</div>)}
                </div>

                <div className="ml-8 mt-[350px] sm:mt-[7%] w-fit">
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
        <div>idk a second landing idea</div>
    </div>
  );
}
