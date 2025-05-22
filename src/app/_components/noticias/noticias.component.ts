import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticias',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent implements OnInit{

  lista: any[] = [];

  constructor(private location: Location, private dataService: DataService, private router: Router) {}

  ngOnInit() {
    // Aguardar o carregamento das notícias no DataService
    this.dataService.noticias$.subscribe(data => {
      this.lista = data;
      console.log('Notícias recebidas:', data);
    });
  }

  return() {
    this.location.back();
  }

  abrirNoticia(id: number) {
    this.router.navigate(['/noticia', id]);
  }

}
