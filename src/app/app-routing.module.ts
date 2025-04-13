import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_components/home-page/home-page.component';
import { OuvidoriaComponent } from './_components/ouvidoria/ouvidoria.component';
import { SobreComponent } from './_components/sobre/sobre.component';
import { ConhecaComponent } from './_components/conheca/conheca.component';
import { ComunicacaoComponent } from './_components/comunicacao/comunicacao.component';
import { DocumentosComponent } from './_components/documentos/documentos.component';
import { NoticiasComponent } from './_components/noticias/noticias.component';
import { NoticiaComponent } from './_components/noticia/noticia.component';
import { FeedbackComponent } from './_components/feedback/feedback.component';
import { ForumComponent } from './_components/forum/forum.component';
import { TalentoComponent } from './_components/talento/talento.component';
import { TalentosComponent } from './_components/talentos/talentos.component';
import { ConhecaCargoComponent } from './_components/conheca-cargo/conheca-cargo.component';
import { ProfileComponent } from './_components/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ouvidoria', component: OuvidoriaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'conheca', component: ConhecaComponent },
  { path: 'comunicacao', component: ComunicacaoComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'talento', component: TalentoComponent },
  { path: 'talentos', component: TalentosComponent },
  { path: 'conheca/cargo', component: ConhecaCargoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
