import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant | undefined;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.loadPlant();
  }

  loadPlant() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.plantService.getPlantById(id).subscribe(plant => {
        this.plant = plant;
      });
    }

  }

  addToCart(plant: Plant) {
    this.plantService.addToCart(plant);
  }
}