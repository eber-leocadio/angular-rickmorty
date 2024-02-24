import { Component, Input } from '@angular/core';

interface Character {
    id: number,
    name       : string,
    status     : string,
    species    : string,
    type       : string,
    gender     : string,
    origin     : string,
    iconStatus : string,
    image      : string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data!: Character;

  constructor() { }

  ngOnInit(): void {}
}
