import React, { useEffect, useState } from 'react';
import SettingsBar from "./components/SettingsBar"
import BottomBar from './components/BottomBar';
import OsaeKomi from './components/OsaeKomi';
import TopBar from './components/TopBar';
import VictoryBar from './components/VictoryBar';
import { VictoryType, Winner } from './types/VictoryTypes';

function JudoApp() {

	// Settings
	const [totalTime, setTotalTime] = useState(120);
	const [wazaariTime, setWazaariTime] = useState(10);
	const [ipponTime, setIpponTime] = useState(20);

	// State
	const [seconds, setSeconds] = useState(totalTime);
	const [active, setActive] = useState(false);
	const [winner, setWinner] = useState(Winner.None);
	const [victory, setVictory] = useState(VictoryType.None);
	const [toggleSettings, setToggleSettings] = useState(false);

	// State - White Belt
	const [osaeKomi1, setOsaeKomi1_t] = useState(false);
	const [osaeKomiTime1, setOsaeKomiTime1] = useState(0);
	const [ippon1, setIppon1] = useState(0);
	const [wazaari1, setWazaari1] = useState(0);
	const [shido1, setShido1] = useState(0);

	// State - Red Belt
	const [osaeKomi2, setOsaeKomi2_t] = useState(false);
	const [osaeKomiTime2, setOsaeKomiTime2] = useState(0);
	const [ippon2, setIppon2] = useState(0);
	const [wazaari2, setWazaari2] = useState(0);
	const [shido2, setShido2] = useState(0);

	// Custom hooks: OsaeKomi cancel each other out
	const setOsaeKomi1 = (e: boolean) => {
		if (osaeKomi2 && e) {
			setOsaeKomi2_t(false)
		}
		setOsaeKomi1_t(e);
	}

	const setOsaeKomi2 = (e: boolean) => {
		if (osaeKomi1 && e) {
			setOsaeKomi1_t(false)
		}
		setOsaeKomi2_t(e);
	}

	const reset = () => {

		// Main state
		setSeconds(totalTime);
		setActive(false);
		setWinner(Winner.None);
		setVictory(VictoryType.None);

		// White belt - state
		setIppon1(0);
		setWazaari1(0);
		setShido1(0);
		setOsaeKomi1_t(false);
		setOsaeKomiTime1(0);

		// Red belt  - state
		setIppon2(0);
		setWazaari2(0);
		setShido2(0);
		setOsaeKomi2_t(false);
		setOsaeKomiTime2(0);
	}

	const toggle = () => {
		if (active === false) {
			setOsaeKomi1_t(false);
			setOsaeKomi2_t(false);
			setOsaeKomiTime1(0);
			setOsaeKomiTime2(0);
		}

		setActive(!active);
	}

	// Main timer
	useEffect(() => {
		let interval: any;
		if (active && seconds > 0) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds - 1);
		  	}, 1000);
		} else if (!active && seconds !== 0) {
			clearInterval(interval);
		} else if (active && seconds === 0) {
			// End of the game with advantages
			if (wazaari1 > wazaari2) {
				setVictory(VictoryType.WazaAri);
				setWinner(Winner.White);
			}
			if (wazaari2 > wazaari1) {
				setVictory(VictoryType.WazaAri);
				setWinner(Winner.Red);
			}
			// Stop the clock
			return;
		}
		return () => clearInterval(interval);
	}, [active, seconds]);

	// OsaeKomi for white belt
	useEffect(() => {
		let interval1: any;
		if (osaeKomi1 && (active === true)) {
			interval1 = setInterval(() => {
				setOsaeKomiTime1(seconds => seconds + 1);
		  	}, 1000);
		} else if (!osaeKomi1 && osaeKomiTime1 !== 0) {
			clearInterval(interval1);
			setOsaeKomiTime1(0);
		} else if (osaeKomi1 && (active === false)) {
			return;
		}
		return () => clearInterval(interval1);
	}, [osaeKomi1, osaeKomiTime1, active]);

	// OsaeKomi for red belt
	useEffect(() => {
		let interval2: any;
		if (osaeKomi2 && (active === true)) {
			interval2 = setInterval(() => {
				setOsaeKomiTime2(seconds => seconds + 1);
		  	}, 1000);
		} else if (!osaeKomi2 && osaeKomiTime2 !== 0) {
			clearInterval(interval2);
			setOsaeKomiTime1(0);
		} else if (osaeKomi2 && (active === false)) {
			return;
		}
		return () => clearInterval(interval2);
	}, [osaeKomi2, osaeKomiTime2, active]);

	// Automatic scoring based on OsaeKomi time
	useEffect(() => {
		if (osaeKomi1) {
			if (osaeKomiTime1 === wazaariTime) {
				setWazaari1(w => w + 1);
			}
			if (osaeKomiTime1 === ipponTime) {
				setIppon1(1);
				toggle();
				setOsaeKomi1_t(false);
			}
		}
		if (osaeKomi2) {
			if (osaeKomiTime2 === wazaariTime) {
				setWazaari2(w => w + 1);
			}
			if (osaeKomiTime2 === ipponTime) {
				setIppon2(1);
				toggle();
				setOsaeKomi2_t(false);
			}
		}
	}, [osaeKomi1, osaeKomiTime1, osaeKomi2, osaeKomiTime2]);

	// An ippon stops the game
	useEffect(() => {
		if (ippon1 === 1) {
			setActive(false);
			if (wazaari1 === 2) {
				setVictory(VictoryType.WazaAriAwaSete);
			} else {
				setVictory(VictoryType.Ippon);
			}
			setWinner(Winner.White);
		}
		if (ippon2 === 1) {
			setActive(false);
			if (wazaari2 === 2) {
				setVictory(VictoryType.WazaAriAwaSete);
			} else {
				setVictory(VictoryType.Ippon);
			}
			setWinner(Winner.Red);
		}
	},[ippon1, ippon2]);
	
	// 2 waza ari make an ippon
	useEffect(() => {
		if (wazaari1 === 2) {
			setIppon1(1);
		}
		if (wazaari2 === 2) {
			setIppon2(1);
		}
	}, [wazaari1, wazaari2]);

	// 3 shido end the game
	useEffect(() => {
		if (shido1 === 3) {
			setActive(false);
			setVictory(VictoryType.HansokuMake);
			setWinner(Winner.Red);
		}
		if (shido2 === 3) {
			setActive(false);
			setVictory(VictoryType.HansokuMake);
			setWinner(Winner.White);
		}
	}, [shido1, shido2]);

	return (
    	<div className="App">
    		<div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar toggle={toggle} seconds={seconds} />
				</div>
				<SettingsBar 
					toggleSettings={toggleSettings}

					totalTime={totalTime}
					wazaariTime={wazaariTime}
					ipponTime={ipponTime}

					setTotalTime={setTotalTime}
					setWazaariTime={setWazaariTime}
					setIpponTime={setIpponTime}
				/>
				<VictoryBar
					victory={victory}
					winner={winner}
				/>
        		<div className="my-auto">
					<OsaeKomi
						osaeKomi1={osaeKomi1}
						setOsaeKomi1={setOsaeKomi1}
						osaeKomiTime1={osaeKomiTime1}
						
						osaeKomi2={osaeKomi2}
						setOsaeKomi2={setOsaeKomi2}
						osaeKomiTime2={osaeKomiTime2}
					/>
				</div>
				<div className="my-10">
					<BottomBar
						reset={reset}
						setToggleSettings={setToggleSettings}

						ippon1={ippon1}
						wazaari1={wazaari1}
						shido1={shido1}
						setIppon1={setIppon1}
						setWazaari1={setWazaari1}
						setShido1={setShido1}

						ippon2={ippon2}
						wazaari2={wazaari2}
						shido2={shido2}
						setIppon2={setIppon2}
						setWazaari2={setWazaari2}
						setShido2={setShido2}
					/>
				</div>
      		</div>
   		</div>
  	);
}

export default JudoApp;