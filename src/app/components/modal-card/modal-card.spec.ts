import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCard } from './modal-card';

describe('ModalCard', () => {
  let component: ModalCard;
  let fixture: ComponentFixture<ModalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
