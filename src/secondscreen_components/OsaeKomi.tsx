import React from "react";

interface OsaeKomiProps {
	osaeKomi1: boolean;
	osaeKomiTime1: number;

	osaeKomi2: boolean;
	osaeKomiTime2: number;
}

function OsaeKomi({ osaeKomi1, osaeKomiTime1, osaeKomi2, osaeKomiTime2 }: OsaeKomiProps) {

    return(
        <div className="grid grid-cols-3 text-center">
			<div className={osaeKomi2 ? "rounded-lg grid-flow-row border-4 mx-32 border-zinc-100 bg-zinc-400" : "rounded-lg grid-flow-row border-4 mx-32 border-zinc-100"}>
				<p className="text-4xl text-green-400 py-4">{osaeKomiTime2}</p>
			</div>
			<div />
            <div className={osaeKomi1 ? "rounded-lg grid-flow-row border-4 mx-32 border-zinc-100 bg-zinc-400" : "rounded-lg grid-flow-row border-4 mx-32 border-zinc-100"}>
				<p className="text-4xl text-green-400 py-4">{osaeKomiTime1}</p>
			</div>
		</div>
    )
}

export default OsaeKomi;