import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardsTableComponent } from './request-cards-table.component';

describe('RequestCardsTableComponent', () => {
  let component: RequestCardsTableComponent;
  let fixture: ComponentFixture<RequestCardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCardsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
