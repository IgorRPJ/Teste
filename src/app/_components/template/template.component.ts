import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

interface Noticia {
  id: number;
  titulo: string;
  texto: string;
  imagem: string;
  templateId: number;
}

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent implements OnInit {

  noticia: Noticia | null = null;

  novaNoticia = {
    titulo: '',
    texto: '',
    imagem: '',
    templateId: 0
  };

  templateId!: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.templateId = +params['id'];
      console.log('Template ID recebido:', this.templateId);
      this.loadNoticia();
    });
  }

  loadNoticia() {
    this.noticia = {
      id: 1,
      titulo: '',
      texto: '',
      imagem: '',
      templateId: this.templateId
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.novaNoticia.imagem = reader.result as string;
        console.log('Imagem carregada:', this.novaNoticia.imagem);
      };
      reader.readAsDataURL(file);
    }
  }

  criarNoticia() {
    this.novaNoticia.templateId = this.templateId;

    if (this.novaNoticia.titulo && this.novaNoticia.texto && this.novaNoticia.templateId) {
      this.dataService.criarNoticia(this.novaNoticia).subscribe((res: any) => {
        console.log('Notícia criada:', res);
        const noticiaCriada = res.noticia;
        this.router.navigate(['/noticia', noticiaCriada.id]);
      });
    }
  }

  return() {
    this.location.back();
  }
}
