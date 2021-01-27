import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CollectionComponent } from './collection/collection.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CarouselModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    CollectionComponent,
    NewArrivalComponent,
  ],
  declarations: [
    CollectionComponent,
    NewArrivalComponent,
  ]
})
export class HomeModule { }
