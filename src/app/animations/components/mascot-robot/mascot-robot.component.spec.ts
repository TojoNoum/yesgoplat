import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotRobotComponent } from './mascot-robot.component';

describe('MascotRobotComponent', () => {
  let component: MascotRobotComponent;
  let fixture: ComponentFixture<MascotRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotRobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
