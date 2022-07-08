import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-dialog-numbers',
  templateUrl: './dialog-numbers.component.html',
  styleUrls: ['./dialog-numbers.component.scss']
})
export class DialogNumbersComponent implements OnInit {
  public form: FormGroup;
  public results: any = "";
  constructor(private service: ServiceService) {
    this.form = new FormGroup({
      number_one: new FormControl('', Validators.required),
      number_two: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
  }


  async makeOperation() {
    this.results = "";
    try {
      this.results = this.service.addition({ number1: this.form.value.number_one, number2: this.form.value.number_two });
    } catch (error) {
      this.results = error;
    }
  }
}
