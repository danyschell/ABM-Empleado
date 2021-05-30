import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Martin Lopez',
      telefono: 741258963,
      correo: 'marlo@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino'
    },
    {
      nombreCompleto: 'Lucas Perez',
      telefono: 258963147,
      correo: 'l_perez@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      sexo: 'Masculino'
    },
    {
      nombreCompleto: 'Flavia Gonsalez',
      telefono: 231456879,
      correo: 'flagon@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Femenino'
    },
    {
      nombreCompleto: 'Silvina Perez',
      telefono: 753159468,
      correo: 'silvinap@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      sexo: 'Femenino'
    },
    {
      nombreCompleto: 'David Fernandez',
      telefono: 164978532,
      correo: 'fernandez@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      sexo: 'Masculino'
    },
    {
      nombreCompleto: 'Leticia Sola',
      telefono: 463125789,
      correo: 'leticia_sola@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Femenino'
    },
    {
      nombreCompleto: 'Luisa Andreani',
      telefono: 964582317,
      correo: 'andreaniluisa@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      sexo: 'Femenino'
    },
    {
      nombreCompleto: 'Andrea Schell',
      telefono: 873249651,
      correo: 'schell_a@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Femenino'
    },
    {
      nombreCompleto: 'Hector Garcia',
      telefono: 273869451,
      correo: 'garcia.hector@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      sexo: 'Masculino'
    },
    {
      nombreCompleto: 'Fernando Malta',
      telefono: 789561243,
      correo: 'malta_f90@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
      sexo: 'Masculino'
    },
  ];

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
  }
}
