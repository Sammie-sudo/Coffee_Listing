import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardConfig } from './card.model';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  public cardConfig = input<CardConfig>();

  
}
