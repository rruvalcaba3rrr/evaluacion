import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//angular material
import { MaterialModule } from './material/material.module';
//components
import { DialogNumbersComponent } from './components/dialog-numbers/dialog-numbers.component';
import { DialogSendMoneyComponent } from './components/dialog-send-money/dialog-send-money.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogNumbersComponent,
    DialogSendMoneyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
