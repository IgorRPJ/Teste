import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

  lista: any = [
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
    {
      img: 'https://placehold.co/600x400', titulo: 'Titulo', texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eligendi cupiditate fugiat sint deleniti ipsam sequi velit, eius, ipsa iste vero? Quaerat exercitationem nam corrupti placeat ad! Ipsam, excepturi repellendus.'
    },
  ]

  formatarTexto(texto: string): string {
    return texto?.replace(/(.{100})/g, '$1<br>');
  }

  constructor(private location: Location) {}

  return(){
    this.location.back();
  }

}
