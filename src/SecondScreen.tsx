import React from "react";
import OsaeKomi from "./secondscreen_components/OsaeKomi";
import BottomBar from "./secondscreen_components/BottomBar";
import TopBar from "./secondscreen_components/TopBar"

function SecondScreen() {
    return (
    	<div className="App">
    		<div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar seconds={0} />
				</div>
                <div className="my-10">
                    <OsaeKomi 
                        osaeKomi1={false}
                        osaeKomi2={true}
                        osaeKomiTime1={0}
                        osaeKomiTime2={0}
                    />
                </div>
                <div className="my-10">
					<BottomBar
                        ippon1={1}
                        wazaari1={1}
                        shido1={1}
                        ippon2={2}
                        wazaari2={2}
                        shido2={2}
                    />
				</div>
      		</div>
   		</div>
  	);
}

export default SecondScreen;