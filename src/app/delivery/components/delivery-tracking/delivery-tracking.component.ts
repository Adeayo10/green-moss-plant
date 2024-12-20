import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-delivery-tracking',
  templateUrl: './delivery-tracking.component.html',
  styleUrls: ['./delivery-tracking.component.scss']
})
export class DeliveryTrackingComponent implements OnInit, OnDestroy {
  currentPosition: GeolocationPosition | null = null;
  watchId: string | null = null;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {
    this.startTracking();
  }

  ngOnDestroy() {
    if (this.watchId) {
      this.geolocationService.clearWatch(this.watchId);
    }
  }

  async startTracking() {
    this.watchId = await this.geolocationService.watchPosition((position) => {
      if (position) {
        this.currentPosition = position as GeolocationPosition;
      }
    });
  }
}