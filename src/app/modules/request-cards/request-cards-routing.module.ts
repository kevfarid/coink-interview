import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCardsComponent } from './request-cards.component';

const routes: Routes = [
  {
    path: '',
    component: RequestCardsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestCardsRoutingModule { }
