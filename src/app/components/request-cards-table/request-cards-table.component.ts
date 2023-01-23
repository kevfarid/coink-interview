import { Component, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Character, CharacterFilter } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-request-cards-table',
  templateUrl: './request-cards-table.component.html',
  styleUrls: ['./request-cards-table.component.scss'],
})
export class RequestCardsTableComponent implements OnChanges {
  characters: Character[] = [];
  displayedColumns: string[] = ['name', 'type', 'origin', 'status'];
  dataSource: MatTableDataSource<Character> = new MatTableDataSource();

  @Input() filters: CharacterFilter = {} as CharacterFilter;

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private CharacterService: CharacterService) {
    this.getCharacters({} as CharacterFilter);
  }

  getCharacters(filter: CharacterFilter) {
    this.CharacterService.getCharacters(filter).subscribe((data) => {
      this.characters = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnChanges(simpleChanges: any) {
    if (
      simpleChanges.filters.firstChange === false &&
      simpleChanges.filters.currentValue
    ) {
      this.getCharacters(this.filters);
    }
  }
}
