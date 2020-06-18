import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddnotesComponent } from './addnotes/addnotes.component';


const routes: Routes = [
  {
    path: '',
    component: AddnotesComponent
  },
  {
    path: 'notes',
    component: NotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
