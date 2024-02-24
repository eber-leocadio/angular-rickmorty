import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
