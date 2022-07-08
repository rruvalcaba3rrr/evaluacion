import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendMoneyComponent } from './dialog-send-money.component';

describe('DialogSendMoneyComponent', () => {
  let component: DialogSendMoneyComponent;
  let fixture: ComponentFixture<DialogSendMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSendMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSendMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
