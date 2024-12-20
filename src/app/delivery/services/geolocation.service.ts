import { Injectable } from '@angular/core';
import { Geolocation, PositionOptions, WatchPositionCallback } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }

  async watchPosition(callback: WatchPositionCallback) {
    const watchId = await Geolocation.watchPosition({}, (position, err) => {
      if (position) {
        callback(position);
      } else if (err) {
        console.error('Geolocation watch error:', err);
      }
    });
    return watchId;
  }

  async clearWatch(watchId: string) {
    await Geolocation.clearWatch({ id: watchId });
  }
}