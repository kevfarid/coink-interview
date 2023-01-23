import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardsFilterComponent } from './request-cards-filter/request-cards-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestCardsTableComponent } from './request-cards-table/request-cards-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [RequestCardsFilterComponent, RequestCardsTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [RequestCardsFilterComponent, RequestCardsTableComponent],
})
export class ComponentsModule {}
