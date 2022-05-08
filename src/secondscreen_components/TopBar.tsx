import React from "react";

interface TopBarProps {
    seconds: number;
}

function TopBar({ seconds }: TopBarProps) {

    const timer = () => {
        let min = Math.floor(seconds / 60).toString();
        let sec: string;
        
        if (seconds % 60 < 10) {
            sec = "0" + (seconds % 60);
        } else {
            sec = (seconds % 60).toString();
        }

        return (min + ":" + sec);
    }

    return (
        <div className="grid grid-cols-3">
            <div className="text-center align-middle h-1/2 m-2 p-2 rounded-lg bg-red-500">
                <div className="font-bold my-auto text-xl" />
            </div>
            <div className="text-6xl font-bold text-center font-mono border-4 m-2 p-2 py-6 rounded-lg border-zinc-100 text-orange-400">
                { timer() }
            </div>
            <div className="text-center align-middle h-1/2 m-2 p-2 rounded-lg bg-zinc-100">
                <div className="font-bold my-auto text-xl" />
            </div>
            
        </div>
    )
}

export default TopBar;