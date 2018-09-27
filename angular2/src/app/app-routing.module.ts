import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tareas', component: TareasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
