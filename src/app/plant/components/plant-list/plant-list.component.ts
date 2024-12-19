import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.loadPlants();
  }

  loadPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.filteredPlants = plants;
    });
  }

  filterPlants(category: string) {
    if (category === 'All') {
      this.filteredPlants = this.plants;
    } else {
      this.filteredPlants = this.plants.filter(plant => plant.category === category);
    }
  }
}