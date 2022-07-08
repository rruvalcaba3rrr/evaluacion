import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNumbersComponent } from './components/dialog-numbers/dialog-numbers.component';
import { DialogSendMoneyComponent } from './components/dialog-send-money/dialog-send-money.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialogRef: MatDialog) {

  }
  openDialog(type: string) {
    switch (type) {
      case 'numbers':
        this.dialogRef.open(DialogNumbersComponent);
        break;
      case 'send':
        this.dialogRef.open(DialogSendMoneyComponent,
          { data: { type: 'send' }, }
        );
        break;
      case 'consult':
        this.dialogRef.open(DialogSendMoneyComponent,
          { data: { type: 'consult' }, }
        );
        break;
      default:
        break;
    }
  }
}
