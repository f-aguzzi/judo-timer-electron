import React, { useState, useEffect} from "react";
import OsaeKomi from "./secondscreen_components/OsaeKomi";
import BottomBar from "./secondscreen_components/BottomBar";
import TopBar from "./secondscreen_components/TopBar"

function SecondScreen() {

    const [timer, setTimer] = useState(0);
    const [osaeKomi1, setOsaekomi1] = useState(false);
    const [osaeKomi2, setOsaekomi2] = useState(false);
    const [osaeKomiTime1, setOsaekomiTime1] = useState(0);
    const [osaeKomiTime2, setOsaekomiTime2] = useState(0);
    const [ippon1, setIppon1] = useState(0);
    const [wazaari1, setWazaari1] = useState(0);
    const [shido1, setShido1] = useState(0);
    const [ippon2, setIppon2] = useState(0);
    const [wazaari2, setWazaari2] = useState(0);
    const [shido2, setShido2] = useState(0);

    const getData = async () => {
        window.api.fetch().then((result: DataBlock) => {
            setTimer(result.time);
            setOsaekomi1(result.osaekomi1);
            setOsaekomiTime1(result.osaekomi1_time);
            setOsaekomi2(result.osaekomi2);
            setOsaekomiTime2(result.osaekomi2_time);
            setIppon1(result.ippon1);
            setWazaari1(result.wazaari1);
            setShido1(result.shido1);
            setIppon2(result.ippon2);
            setWazaari2(result.wazaari2);
            setShido2(result.shido2);
        })
    }


    useEffect(() => {
        let interval2: any;
        interval2 = setInterval(() => {
            getData();
        }, 50);
    }, []);


    return (
    	<div className="App">
    		<div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar seconds={timer} />
				</div>
                <div className="my-10">
                    <OsaeKomi 
                        osaeKomi1={osaeKomi1}
                        osaeKomi2={osaeKomi2}
                        osaeKomiTime1={osaeKomiTime1}
                        osaeKomiTime2={osaeKomiTime2}
                    />
                </div>
                <div className="my-10">
					<BottomBar
                        ippon1={ippon1}
                        wazaari1={wazaari1}
                        shido1={shido1}
                        ippon2={ippon2}
                        wazaari2={wazaari2}
                        shido2={shido2}
                    />
				</div>
      		</div>
   		</div>
  	);
}

export default SecondScreen;