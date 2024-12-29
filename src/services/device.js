/**
 * https://capacitorjs.com/docs/apis/geolocation
 */

import { Geolocation } from '@capacitor/geolocation';

class DeviceService {

  h_debug = false;


  async getLocation() {

    // Call Natice - Get Geo Location
    const coordinates = await Geolocation.getCurrentPosition();

    // Log
    if (this.h_debug) {
      console.log('[device.service] getLocation', {
        coordinates: coordinates,
      });
    }

    // Return
    return {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
      accuracy: coordinates.coords.accuracy,
    };
  }

};
window.mtDevice = new DeviceService();