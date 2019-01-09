import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

const routes: Routes = [
  {path:"", component:WhoWeAreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
