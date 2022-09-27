import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZambiaClassesComponent } from './zambia-classes.component';

describe('ZambiaClassesComponent', () => {
  let component: ZambiaClassesComponent;
  let fixture: ComponentFixture<ZambiaClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZambiaClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZambiaClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
