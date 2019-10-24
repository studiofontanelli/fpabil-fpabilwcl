import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RielipogoComponent } from './rielipogo.component';

describe('RielipogoComponent', () => {
  let component: RielipogoComponent;
  let fixture: ComponentFixture<RielipogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RielipogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RielipogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
