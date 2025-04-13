import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: false,
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss'
})
export class NoticiaComponent {

  constructor(private location: Location) {}

  return(){
    this.location.back();
  }

}
