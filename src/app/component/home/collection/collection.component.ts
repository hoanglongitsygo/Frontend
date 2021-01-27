import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { data as product } from '../../../../assets/data/product.json';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  products = product;

  sortKey = "";

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor() { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Giá CAO đến THẤP', value: '!price' },
      { label: 'Giá THẤP đến CAO', value: 'price' }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
