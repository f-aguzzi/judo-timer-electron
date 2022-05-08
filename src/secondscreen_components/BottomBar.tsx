import React from "react";
import IWS from "./IWS";

interface BottomBarProps {
	ippon1: number;
	wazaari1: number;
	shido1: number;

	ippon2: number;
	wazaari2: number;
	shido2: number;
}

function BottomBar({ ippon1, wazaari1, shido1, ippon2, wazaari2, shido2 }: BottomBarProps) {
    return(
        <div className="grid grid-cols-2 text-center">
			<IWS 
				ippon={ippon2}
				wazaari={wazaari2}
				shido={shido2}
			/>

            <IWS 
				ippon={ippon1}
				wazaari={wazaari1}
				shido={shido1}
			/>
        </div>
    )
}

export default BottomBar;