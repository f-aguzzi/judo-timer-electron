import { API } from "../preload";

declare global {
	interface Window {
        api: typeof API
    }

    type DataBlock = {
        time: number,
        osaekomi1: boolean,
        osaekomi1_time: number,
        osaekomi2: boolean,
        osaekomi2_time: number,
        ippon1: number,
        ippon2: number,
        wazaari1: number,
        wazaari2: number,
        shido1: number,
        shido2: number
    }

}