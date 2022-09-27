import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellenboschClassesComponent } from './stellenbosch-classes.component';

describe('StellenboschClassesComponent', () => {
  let component: StellenboschClassesComponent;
  let fixture: ComponentFixture<StellenboschClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellenboschClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellenboschClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
