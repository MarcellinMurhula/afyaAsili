import { MedicalLog } from "../types";
import { ApiService } from "./api.service";

export interface IoTDeviceStatus {
  id: string;
  name: string;
  type: "glucose" | "pressure" | "weight" | "watch";
  battery: number;
  status: "connected" | "disconnected" | "syncing";
  lastSync: string;
}

export class IoTService {
  private static devices: IoTDeviceStatus[] = [
    {
      id: "ble-glucose-01",
      name: "Glucomètre BLE Kivu-Health v4",
      type: "glucose",
      battery: 88,
      status: "connected",
      lastSync: "Il y a 10 min"
    },
    {
      id: "ble-pressure-02",
      name: "Tensiomètre Bras Connecté Omron",
      type: "pressure",
      battery: 74,
      status: "connected",
      lastSync: "Il y a 2h"
    },
    {
      id: "ble-scale-03",
      name: "Balance Smart IMC AfriScale",
      type: "weight",
      battery: 92,
      status: "connected",
      lastSync: "Hier soir"
    },
    {
      id: "ble-watch-04",
      name: "Montre d'Activité & Rythme Cardiaque",
      type: "watch",
      battery: 65,
      status: "connected",
      lastSync: "En continu"
    }
  ];

  static getDevices(): IoTDeviceStatus[] {
    return this.devices;
  }

  static async triggerBluetoothPairing(deviceType: "glucose" | "pressure" | "weight"): Promise<IoTDeviceStatus> {
    // Attempt Web Bluetooth API if available in browser
    if (typeof navigator !== 'undefined' && (navigator as any).bluetooth) {
      try {
        console.log("Recherche d'appareils Bluetooth BLE médicaux à proximité...");
        // This is optional and will show native browser pairing prompt if clicked by user
        /* await (navigator as any).bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ['battery_service', 'glucose', 'blood_pressure']
        }); */
      } catch (e) {
        console.log("Appariement Bluetooth annulé ou simulé en mode PWA");
      }
    }

    // Simulate instant connection and pairing
    const found = this.devices.find(d => d.type === deviceType);
    if (found) {
      found.status = "syncing";
      await new Promise(r => setTimeout(r, 1200));
      found.status = "connected";
      found.lastSync = "À l'instant";
      return found;
    }
    throw new Error("Périphérique introuvable");
  }

  static async pullInstantMeasurement(deviceType: "glucose" | "pressure" | "weight"): Promise<MedicalLog | null> {
    const dev = this.devices.find(d => d.type === deviceType);
    if (dev) {
      dev.status = "syncing";
    }
    
    // Call server to generate realistic medical device reading
    const result = await ApiService.simulateInstantRead(deviceType);
    
    if (dev) {
      dev.status = "connected";
      dev.lastSync = "À l'instant (Capteur BLE)";
    }
    return result;
  }
}
