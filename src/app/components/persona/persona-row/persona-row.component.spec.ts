import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaRowComponent } from './persona-row.component';

describe('PersonaRowComponent', () => {
  let component: PersonaRowComponent;
  let fixture: ComponentFixture<PersonaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
