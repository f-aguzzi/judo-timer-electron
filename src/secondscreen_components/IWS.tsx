import React from "react";

interface IWSProps {
    ippon: number;
	wazaari: number;
	shido: number;
}

function IWS({ ippon, wazaari, shido }: IWSProps) {
    return(
        <div className="text-center grid grid-cols-3 mx-10 border-8 border-zinc-400 p-4 rounded-lg">
            <div className="p-2 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-6xl text-zinc-100 mx-auto my-auto font-bold">{ ippon }</p>
                    <p className="text-4xl text-center text-zinc-300 mx-auto my-auto font-bold">I</p>
                </div>
            </div>

            <div className="p-2 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-6xl text-zinc-100 mx-auto my-auto font-bold">{ wazaari }</p>
                    <p className="text-4xl text-center text-zinc-300 mx-auto my-auto font-bold">W</p>
                </div>
            </div>

            <div className="p-2 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-6xl text-zinc-100 mx-auto my-auto font-bold">{ shido }</p>
                    <p className="text-4xl text-center text-zinc-300 mx-auto my-auto font-bold">S</p>
                </div>
            </div>
        </div>
    )
}

export default IWS;