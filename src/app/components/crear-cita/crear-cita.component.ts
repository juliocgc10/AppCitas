import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;


  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addCita(): void {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
    }
    else {
      this.formularioIncorrecto = false;
      // se crea objeto para enviarse al apdre
      const cita = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      }

      console.log(cita);
      this.nuevaCita.emit(cita);
      this.resetCampos();
    }
  }

  resetCampos(): void {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';


  }

}
