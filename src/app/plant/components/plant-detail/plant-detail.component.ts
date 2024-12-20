

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../services/plant.service';
import { Plant, Review } from '../../models/plant.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant | undefined;
  newReview: Review = { userId: '', rating: 0, comment: '', date: new Date() };

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private cartService: CartService
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

  addToCart() {
    if (this.plant) {
      this.cartService.addToCart({
        plantId: this.plant.id,
        name: this.plant.name,
        price: this.plant.price,
        quantity: 1,
        imageUrl: this.plant.imageUrl
      });
    }
  }

  addReview() {
    if (this.plant) {
      this.plantService.addReview(this.plant.id, this.newReview).subscribe(updatedPlant => {
        this.plant = updatedPlant;
        this.newReview = { userId: '', rating: 0, comment: '', date: new Date() };
      });
    }
  }
}