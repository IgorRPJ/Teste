import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comunicacao',
  standalone: false,
  templateUrl: './comunicacao.component.html',
  styleUrl: './comunicacao.component.scss'
})
export class ComunicacaoComponent {

  lista: any = [
    { cargo: 'PRESIDÊNCIA', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'SEC ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DICOM ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIFIN ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
    { cargo: 'DIRETORIA ', nome: 'Random', idade: 0, biografia: 'sem biografia' },
  ]

  constructor(private location: Location) {}

  return(){
    this.location.back();
  }

}
