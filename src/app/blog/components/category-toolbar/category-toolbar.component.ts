import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toxic-category-toolbar',
  templateUrl: './category-toolbar.component.html',
  styleUrls: ['./category-toolbar.component.scss']
})
export class CategoryToolbarComponent implements OnInit {

  @Input() categories: any[];
  @Input() selectedCategory: number;
  @Output() clickedCategory = new EventEmitter<number>();

  defaultCategories = [
    { id: 0, title: 'Recent' }
  ];

  constructor() {}

  isActive(category) {
    if (category.id === this.selectedCategory) {
      return 'active';
    } else {
      return '';
    }
  }

  onClickedCategory(categoryId) {
    this.clickedCategory.emit(categoryId);
  }

  ngOnInit() {}

}
