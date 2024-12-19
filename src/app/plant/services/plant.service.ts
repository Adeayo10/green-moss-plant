import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plant } from '../models/plant.model';

import { MOCK_PLANTS } from '../plantdb';

@Injectable({
    providedIn: 'root'
})
export class PlantService {
    constructor() {}

    getPlants(): Observable<Plant[]> {
        return of(MOCK_PLANTS);
    }

    getPlantById(id: string): Observable<Plant> {
        const plant = MOCK_PLANTS.find(p => p.id === id);
        return of(plant as Plant);
    }

    searchPlants(query: string): Observable<Plant[]> {
        const filteredPlants = MOCK_PLANTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        return of(filteredPlants);
    }
    addToCart(plant: Plant) {
        console.log('Plant added to cart:', plant);
    }
}