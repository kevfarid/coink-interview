import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardsComponent } from './request-cards.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RequestCardsRoutingModule } from './request-cards-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RequestCardsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RequestCardsRoutingModule,
    ComponentsModule,
    MatButtonModule
  ],

})
export class RequestCardsModule {}
