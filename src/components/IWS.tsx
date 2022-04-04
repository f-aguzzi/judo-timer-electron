import React from "react";

interface IWSProps {
    ippon: number;
	wazaari: number;
	shido: number;

    setIppon: React.Dispatch<React.SetStateAction<number>>;
	setWazaari: React.Dispatch<React.SetStateAction<number>>;
	setShido: React.Dispatch<React.SetStateAction<number>>;
}

function IWS({ ippon, wazaari, shido, setIppon, setWazaari, setShido }: IWSProps) {
    return(
        <div className="text-center grid grid-cols-3 mx-10 border-8 border-zinc-400 p-4 rounded-lg">
            <div className="grid grid-cols-2 p-2 border-2 border-zinc-100 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-3xl text-zinc-100 mx-auto my-0 h-3/4 font-bold">{ ippon }</p>
                    <p className="text-md text-center text-zinc-300 mx-auto my-0 h-1/4 font-bold">I</p>
                </div>
                <div className="grid grid-rows-2 text-center">
                    <button onClick={() => setIppon(ippon + 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> + </button>
                    <button onClick={() => setIppon(ippon - 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> - </button>
                </div>
            </div>

            <div className="grid grid-cols-2 p-2 border-2 border-zinc-100 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-3xl text-zinc-100 mx-auto my-0 h-3/4 font-bold">{ wazaari }</p>
                    <p className="text-md text-center text-zinc-300 mx-auto my-0 h-1/4 font-bold">W</p>
                </div>
                <div className="grid grid-rows-2 text-center">
                    <button onClick={() => setWazaari(wazaari + 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> + </button>
                    <button onClick={() => setWazaari(wazaari - 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> - </button>
                </div>
            </div>

            <div className="grid grid-cols-2 p-2 border-2 border-zinc-100 mx-1">
                <div className="border-2 border-zinc-100">
                    <p className="text-3xl text-zinc-100 mx-auto my-0 h-3/4 font-bold">{shido }</p>
                    <p className="text-md text-center text-zinc-300 mx-auto my-0 h-1/4 font-bold">S</p>
                </div>
                <div className="grid grid-rows-2 text-center">
                    <button onClick={() => setShido(shido + 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> + </button>
                    <button onClick={() => setShido(shido - 1)} className="m-1 p-2 text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700"> - </button>
                </div>
            </div>
        </div>
    )
}

export default IWS;