import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterFilter } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-request-cards',
  templateUrl: './request-cards.component.html',
  styleUrls: ['./request-cards.component.scss'],
})
export class RequestCardsComponent {
  filters: CharacterFilter = {} as CharacterFilter;

  getFilters(filters: FormGroup) {
    this.filters = filters.value;
  }

  clearFilters() {
    this.filters = {} as CharacterFilter;
  }
}
