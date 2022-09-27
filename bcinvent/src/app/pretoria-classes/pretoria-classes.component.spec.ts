import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretoriaClassesComponent } from './pretoria-classes.component';

describe('PretoriaClassesComponent', () => {
  let component: PretoriaClassesComponent;
  let fixture: ComponentFixture<PretoriaClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretoriaClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretoriaClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
