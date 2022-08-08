import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedlistComponent } from './components/breedlist/breedlist.component';
import { ContactComponent } from './components/contact/contact.component'

const routes: Routes = [
  {path: 'breeds', component: BreedlistComponent},
  {path: 'contact', component: ContactComponent },
  {path:'', redirectTo:'breeds', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
