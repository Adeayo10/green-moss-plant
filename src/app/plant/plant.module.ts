import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantSearchComponent } from './components/plant-search/plant-search.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { PlantService } from './services/plant.service';
import { PlantPageRoutingModule } from './plant-routing.module';
import { PlantPage } from './plant.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PlantPageRoutingModule
  ],
  declarations: [
    PlantPage,
    PlantListComponent,
    PlantDetailComponent,
    PlantSearchComponent,
    CategoryFilterComponent
  ],
  providers: [
    PlantService
  ]
})
export class PlantPageModule {}