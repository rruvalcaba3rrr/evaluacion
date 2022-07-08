import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNumbersComponent } from './dialog-numbers.component';

describe('DialogNumbersComponent', () => {
  let component: DialogNumbersComponent;
  let fixture: ComponentFixture<DialogNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
