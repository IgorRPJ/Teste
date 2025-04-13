import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  posts = Array(8).fill(0).map((_, i) => ({
    image: `https://picsum.photos/300/300?random=${i}`
  }));

  constructor(private location: Location) {}

  return(){
    this.location.back();
  }

}
