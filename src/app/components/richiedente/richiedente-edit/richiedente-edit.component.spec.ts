import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiedenteEditComponent } from './richiedente-edit.component';

describe('RichiedenteEditComponent', () => {
  let component: RichiedenteEditComponent;
  let fixture: ComponentFixture<RichiedenteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiedenteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiedenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
