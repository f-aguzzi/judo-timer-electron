import React from "react";

interface SettingsBarProps {
    toggleSettings: boolean;

    totalTime: number;
    wazaariTime: number;
    ipponTime: number;
    goldenScore: boolean;

    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
    setWazaariTime: React.Dispatch<React.SetStateAction<number>>;
    setIpponTime: React.Dispatch<React.SetStateAction<number>>;
    setGoldenScore: React.Dispatch<React.SetStateAction<boolean>>;
}

function SettingsBar({ 
    toggleSettings,
    totalTime, wazaariTime, ipponTime, goldenScore,
    setTotalTime, setWazaariTime, setIpponTime, setGoldenScore
    }: SettingsBarProps) {

    const bar = () => {

        if (toggleSettings) {
            return (
                <div className="text-center mx-auto z-0 drop-shadow shadow-zinc-100">
                    <div className="bg-zinc-100 text-zinc-700 rounded-lg p-2 px-2">
                        <p className="text-4xl font-bold p-4">Settings</p>
                        <div className="mx-2">
                            <p className="text-xl">Match ⏱ </p>
                            <textarea
                                onChange={e => setTotalTime(parseInt(e.target.value))}
                                className="rounded-md bg-zinc-200 text-center" 
                                placeholder={ totalTime.toString() }
                            />
                        </div>
                        <div className="m-2">
                            <p className="text-xl">Osae komi waza ari ⏱ </p>
                            <textarea
                                onChange={e => setWazaariTime(parseInt(e.target.value))}
                                className="rounded-md bg-zinc-200 text-center"
                                placeholder={ wazaariTime.toString() }
                            />
                        </div>
                        <div className="m-2">
                            <p className="text-xl">Osae komi ippon ⏱ </p>
                            <textarea
                                onChange={e => setIpponTime(parseInt(e.target.value))}
                                className="rounded-md bg-zinc-200 text-center"
                                placeholder={ ipponTime.toString() }
                            />
                        </div>
                        <div className="m-2">
                            <p className="text-xl">Golden Score ⚔️: {goldenScore ? "✅" : "⛔️"} </p>
                            <div className="grid grid-cols-2">
                                <button className="text-2xl" onClick={() => setGoldenScore(false)}> ⛔️ </button>
                                <button className="text-2xl" onClick={() => setGoldenScore(true)}> ✅ </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }

    return ( 
        <>
        { bar() }
        </>
    )
}

export default SettingsBar;