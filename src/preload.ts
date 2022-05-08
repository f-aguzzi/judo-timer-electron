import { contextBridge, ipcRenderer } from "electron"

export const API = {
    setTimer: (time: number) => ipcRenderer.send('time', time),
    setOsaekomi1: (bool: boolean) => ipcRenderer.send('osaekomi1', bool),
    setOsaekomiTimer1: (time: number) => ipcRenderer.send('osaekomi1_time', time),
    setOsaekomi2: (bool: boolean) => ipcRenderer.send('osaekomi2', bool),
    setOsaekomiTimer2: (time: number) => ipcRenderer.send('osaekomi2_time', time),
    setIppon1: (ippon: number) => ipcRenderer.send('ippon1', ippon),
    setWazaari1: (wazaari: number) => ipcRenderer.send('wazaari1', wazaari),
    setShido1: (shido: number) => ipcRenderer.send('shido1', shido),
    setIppon2: (ippon: number) => ipcRenderer.send('ippon2', ippon),
    setWazaari2: (wazaari: number) => ipcRenderer.send('wazaari2', wazaari),
    setShido2: (shido: number) => ipcRenderer.send('shido2', shido),
    reset: () => ipcRenderer.send('reset'),
    fetch: () => ipcRenderer.invoke('fetch')
}

contextBridge.exposeInMainWorld("api", API);