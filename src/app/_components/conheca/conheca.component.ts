import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conheca',
  standalone: false,
  templateUrl: './conheca.component.html',
  styleUrl: './conheca.component.scss'
})
export class ConhecaComponent {

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
