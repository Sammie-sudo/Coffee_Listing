import { Component } from '@angular/core';
import { Collection } from '../collection/collection';

@Component({
  selector: 'app-main-page',
  imports: [
    Collection
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
