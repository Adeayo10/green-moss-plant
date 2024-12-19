import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories = ['All', 'Indoor', 'Outdoor', 'Succulents', 'Flowering'];//

  selectCategory(event: any) {
    const category = event.detail.value as string;
    this.categorySelected.emit(category);
  }
}