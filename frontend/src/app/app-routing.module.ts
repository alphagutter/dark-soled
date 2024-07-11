import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { AddEditCharacterComponent } from './components/add-edit-character/add-edit-character.component';



/*const routes: Routes = [
  { path: '', redirectTo: '/list-roles', pathMatch: 'full' },
  { path: 'list-characters', component: ListCharactersComponent },
  { path: 'list-roles', component: ListRolesComponent },
  { path: 'add-edit-character', component: AddEditCharacterComponent },
  { path: '**', redirectTo: '/list-characters' }
];
*/
const routes: Routes = [

    {path:'', component: ListRolesComponent},
    {path:'character-list', component: ListCharactersComponent},
    {path:'new-character', component: AddEditCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
