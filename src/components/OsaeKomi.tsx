import React from "react";

interface OsaeKomiProps {
	osaeKomi1: boolean;
	setOsaeKomi1: (e: boolean) => void;
	osaeKomiTime1: number;

	osaeKomi2: boolean;
	setOsaeKomi2: (e: boolean) => void;
	osaeKomiTime2: number;
}

function OsaeKomi({ osaeKomi1, setOsaeKomi1, osaeKomiTime1, osaeKomi2, setOsaeKomi2, osaeKomiTime2 }: OsaeKomiProps) {

    return(
        <div className="grid grid-cols-3 text-center">
			<div className="rounded-lg grid-flow-row border-4 mx-32 border-zinc-100">
				<p className="text-4xl text-green-400 py-4">{osaeKomiTime1}</p>
				<button onClick={() => setOsaeKomi1(!osaeKomi1)} className="rounded-lg w-full font-bold text-lg p-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-700">{!osaeKomi1? "Osae Komi" : "Toketa" }</button>
			</div>
			<div />
			<div className="rounded-lg grid-flow-row border-4 mx-32 border-zinc-100">
				<p className="text-4xl text-green-400 py-4">{osaeKomiTime2}</p>
				<button onClick={() => setOsaeKomi2(!osaeKomi2)} className="rounded-lg w-full font-bold text-lg p-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-700">{!osaeKomi2? "Osae Komi" : "Toketa" }</button>
			</div>
		</div>
    )
}

export default OsaeKomi;