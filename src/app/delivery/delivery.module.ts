import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeliveryPageRoutingModule } from './delivery-routing.module';
import { DeliveryPage } from './delivery.page';
import { DeliveryTrackingComponent } from './components/delivery-tracking/delivery-tracking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPageRoutingModule
  ],
  declarations: [DeliveryPage, DeliveryTrackingComponent]
})
export class DeliveryPageModule {}