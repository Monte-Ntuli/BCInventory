import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemptonClassesComponent } from './kempton-classes.component';

describe('KemptonClassesComponent', () => {
  let component: KemptonClassesComponent;
  let fixture: ComponentFixture<KemptonClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemptonClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemptonClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
