import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RichiedenteEditComponent } from './components/richiedente/richiedente-edit/richiedente-edit.component';
import { OperatoreEditComponent } from './components/operatore/operatore-edit/operatore-edit.component';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';
import { RielipogoComponent } from './components/rielipogo/rielipogo.component';
import { PersonaEditComponent } from './components/persona/persona-edit/persona-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/richiedente', pathMatch: 'full' },
  { path: 'richiedente', component: RichiedenteEditComponent },
  { path: 'operatore', component: OperatoreEditComponent },
  { path: 'persona', component: PersonaListComponent },
  { path: 'persona/:id/edit', component: PersonaEditComponent },
  { path: 'persona/new', component: PersonaEditComponent },
  { path: 'riepilogo', component: RielipogoComponent }


];
/*

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];
*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
