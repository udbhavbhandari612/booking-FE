import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFleetsComponent } from './our-fleets.component';

describe('OurFleetsComponent', () => {
  let component: OurFleetsComponent;
  let fixture: ComponentFixture<OurFleetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFleetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
