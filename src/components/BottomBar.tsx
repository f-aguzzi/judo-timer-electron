import React from "react";
import IWS from "./IWS";

interface BottomBarProps {
	reset: () => void;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;

	ippon1: number;
	wazaari1: number;
	shido1: number;
	setIppon1: React.Dispatch<React.SetStateAction<number>>;
	setWazaari1: React.Dispatch<React.SetStateAction<number>>;
	setShido1: React.Dispatch<React.SetStateAction<number>>;

	ippon2: number;
	wazaari2: number;
	shido2: number;
	setIppon2: React.Dispatch<React.SetStateAction<number>>;
	setWazaari2: React.Dispatch<React.SetStateAction<number>>;
	setShido2: React.Dispatch<React.SetStateAction<number>>;

}

function BottomBar({
	reset, setToggleSettings,
	ippon1, wazaari1, shido1,
	setIppon1, setWazaari1, setShido1,
	ippon2, wazaari2, shido2,
	setIppon2, setWazaari2, setShido2
	}: BottomBarProps) {
    return(
        <div className="grid grid-cols-3 text-center">
			<IWS 
				ippon={ippon1}
				wazaari={wazaari1}
				shido={shido1}

				setIppon={setIppon1}
				setWazaari={setWazaari1}
				setShido={setShido1}
			/>
			<div className="grid grid-rows-3 mx-10">
				<button onClick={() => reset()} className="text-center text-md text-zinc-700 font-bold bg-yellow-400 hover:bg-yellow-300 p-4 my-auto rounded-md">Reset</button>
				<button onClick={() => setToggleSettings(s => !s)} className="text-4xl text-zinc-300 mx-auto my-auto hover:text-white">⚙</button>
			</div>
			<IWS 
				ippon={ippon2}
				wazaari={wazaari2}
				shido={shido2}

				setIppon={setIppon2}
				setWazaari={setWazaari2}
				setShido={setShido2}
			/>
        </div>
    )
}

export default BottomBar;