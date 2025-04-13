import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  posts = Array(8).fill(0).map((_, i) => ({
    image: `https://picsum.photos/300/300?random=${i}`
  }));

  constructor(private location: Location) {}

  return(){
    this.location.back();
  }

}
