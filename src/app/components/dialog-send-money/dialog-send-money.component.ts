import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-dialog-send-money',
  templateUrl: './dialog-send-money.component.html',
  styleUrls: ['./dialog-send-money.component.scss']
})
export class DialogSendMoneyComponent implements OnInit {

  public form: FormGroup;
  public formConsult: FormGroup;
  public results: any = "";
  public type: string = "";
  constructor(private service: ServiceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.formConsult = new FormGroup({
      idRap: new FormControl('', Validators.required),
    });
    this.form = new FormGroup({
      idRap: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      denominations: this.formBuilder.array([]),
    });
  }

  get denominations(): FormArray {
    return this.form.get('denominations') as FormArray;
  }

  addConcept() {
    this.denominations.push(
      this.formBuilder.group({
        denominacion: '',
        cantidad: 0,
        tipo_denominacion: '',
      })
    );
  }

  removeConcept(i: number) {
    this.denominations.removeAt(i);
  }


  ngOnInit(): void {
  }

  async sendData() {
    var values = this.form.value;
    this.results = '';
    if (values.denominations.length == 0) {
      this.results = {
        code: 400,
        message: 'Ingrese al menos una denominación',
        response: null,
      }
      return;
    }

    try {
      this.results = await this.service.enviaNivelesEfectivo(values);

    } catch (error) {
      this.results = error;
    }
  }

  async consultData() {
    try {
      this.results = await this.service.consultaNivelesEfectivoxRAP(this.formConsult.value.idRap);
    } catch (error) {
      this.results = error;
    }
  }
}
