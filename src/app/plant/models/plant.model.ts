export interface Review {
    userId: string;
    rating: number;
    comment: string;
    date: Date;
  }
  
  export interface PlantCareGuide {
    watering: string;
    sunlight: string;
    temperature: string;
    fertilizing: string;
    pestControl: string;
  }
  
  export interface Plant {
    id: string;
    name: string;
    scientificName: string;
    description: string;
    imageUrl: string;
    price: number;
    stock: number;
    category: string;
    featured: boolean;
    reviews: Review[];
    careGuide: PlantCareGuide;
  }