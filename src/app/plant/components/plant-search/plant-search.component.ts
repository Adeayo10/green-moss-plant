import { Component } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.scss']
})
export class PlantSearchComponent {
  query: string = '';
  results: Plant[] = [];

  constructor(private plantService: PlantService) {}

  onSearchChange(event: any) {
    this.query = event.target.value;
    if (this.query.length > 2) {
      this.plantService.searchPlants(this.query).subscribe((results: Plant[]) => {
        this.results = results;
      });
    } else {
      this.results = [];
    }
  }
}