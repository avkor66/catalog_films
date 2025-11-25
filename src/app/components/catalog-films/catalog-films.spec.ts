import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFilms } from './catalog-films';

describe('CatalogFilms', () => {
  let component: CatalogFilms;
  let fixture: ComponentFixture<CatalogFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogFilms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogFilms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
