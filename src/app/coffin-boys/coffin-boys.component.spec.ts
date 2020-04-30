import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffinBoysComponent } from './coffin-boys.component';

describe('CoffinBoysComponent', () => {
  let component: CoffinBoysComponent;
  let fixture: ComponentFixture<CoffinBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffinBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffinBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
