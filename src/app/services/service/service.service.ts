import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private DB_URL: string = ' http://localhost:3000/raps';
  constructor(private http: HttpClient) { }

  addition(numbers: { number1: string, number2: string }) {
    try {
      console.log(numbers);

      if (numbers.number1 == '' || numbers.number2 == '') {
        return {
          code: 400,
          message: 'se necesita ingresar ambos numeros para hacer la operación'
        }
      }

      let addplus = parseInt(numbers.number1) + parseInt(numbers.number2);

      return {
        code: 200,
        message: "Operación exitosa",
        response: `${numbers.number1} + ${numbers.number2} = ${addplus}`

      }
    } catch (error) {

      throw {
        code: 400,
        message: 'Ha ocurrido un error inesperado, intente de nuevo más tarde'
      }
    }
  }

  async consultaNivelesEfectivoxRAP(idRap: string) {
    try {
      let response: any = await this.http
        .get(`${this.DB_URL}?idRap=${idRap}`)
        .toPromise();

        console.log(response);
        

      if (response.length == 0) {
        return {
          code: 400,
          message: `El id Rap ingresado ${idRap} no existe`
        }
      }
      return {
        code: 200,
        message: "Operación realizada exitosamente",
        response: response[0]
      }

    } catch (error) {
      throw {
        code: 400,
        message: 'Ha ocurrido un error inesperado, intente de nuevo más tarde'
      }
    }
  }
  async enviaNivelesEfectivo(values: any) {
    try {
      var exist = await this.consultaNivelesEfectivoxRAP(values.idRap);

      if (exist.code == 200) {
        return {
          code: 400,
          message: `El id Rap ${values.idRap} ya existe`
        }
      }
      let data = {
        "id": parseInt(values.idRap),
        "idRap": values.idRap,
        "nombre": values.name,
        "monto": values.amont,
        "denominaciones": values.denominations
      }
      let request: any = await this.http
        .post(`${this.DB_URL}`, data)
        .toPromise();
      return {
        code: 200,
        message: "Operación realizada exitosamente"
      }
    } catch (error) {
      throw {
        code: 400,
        message: 'Ha ocurrido un error inesperado, intente de nuevo más tarde'
      }
    }
  }
}
