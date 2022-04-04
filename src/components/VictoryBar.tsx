import React from "react";
import { VictoryType, Winner } from "../types/VictoryTypes";

interface VictoryBarProps {
    victory: VictoryType;
    winner: Winner;
}

function VictoryBar({ victory, winner }: VictoryBarProps) {

    const winnerSide = () => {
        if (winner === Winner.White) {
            return " ⬅️ ";
        } else if (winner === Winner.Red) {
            return " ➡️ ";
        }
    }

    const causeOfVictory = () => {
        if (victory === VictoryType.Ippon) {
            return "Ippon";
        } else if (victory === VictoryType.WazaAri) {
            return "Waza Ari";
        } else if (victory === VictoryType.WazaAriAwaSete) {
            return "Waza Ari Awasete";
        }

        // Hansoku Make
        if (winner === Winner.Red && victory === VictoryType.HansokuMake) {
            return "Hansoku Make ⚪️ "
        } else if (winner === Winner.White && victory === VictoryType.HansokuMake) {
            return "Hansoku Make 🔴 "
        }
    }

    const victoryCard = () => {
        if (victory !== VictoryType.None) {
            return (
            <div className="bg-zinc-100 rounded-lg p-2">
                <p className="text-6xl p-4">🏆</p>
                <p className="text-3xl"> { winnerSide() } </p>
                <br />
                <p className="text-xl text-zinc-700 p-4"> { causeOfVictory() } </p>
            </div>
            )
        }
    }

    return( 
        <div className="text-center mx-auto">
            { victoryCard() }
        </div>
    )
}

export default VictoryBar;