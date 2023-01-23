import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardsFilterComponent } from './request-cards-filter.component';

describe('RequestCardsFilterComponent', () => {
  let component: RequestCardsFilterComponent;
  let fixture: ComponentFixture<RequestCardsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCardsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCardsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
