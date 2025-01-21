import { Injectable } from '@angular/core';
import { Istudent } from '../interface/istudent';
import { Icurso } from '../interface/icurso';
import { ALUMNOS } from '../db/students.db';
import { CURSOS } from '../db/course.db';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private arrAlumnos: Istudent[];
  private arrCurso: Icurso[];
  private id:number ;

  constructor() { 
    this.arrAlumnos= ALUMNOS;
    this.arrCurso=CURSOS;
    this.id= ALUMNOS.length + 1;

  }

  getAllStudents():Istudent[]{
    //Cuando tengo APIS la llamaremos desde esta función
    return this.arrAlumnos; 
  }

  getAllCourse():Icurso[]{
    return this.arrCurso;
  }

  getStudentById(id: number): Istudent | undefined { //undefined si no se encuentra ningún estudiante con el ID proporcionado
     return this.arrAlumnos.find //find: busca el primer elemento en un array que cumple con una condición.
    
    (student => //student: Representa el elemento actual del array (un objeto IStudent) NO ESTA PREDEFINIDO, EL PARAMETRO QUE DEVUELVE LA FUNCION FILTER EN ESTE CASO LO DEFINES TU .
    student.id == id);// Compara el ID del estudiante actual (student.id) con el ID proporcionado como parámetro (id). Si los valores son iguales, devuelve ese estudiante.
    }
    // Cuando usas el método find (o métodos como map, filter, etc.), este toma como parámetro una función de callback que se ejecuta para cada elemento del array. 
    // El nombre del parámetro en la callback lo defines tú, y representa el elemento actual del array que se está recorriendo.


    //OTRA FORMA DE HACERLO PARA QUE ENVEZDE QUE DEVUELVA UN UNDIFENED LA FUNCION, DEVUELVA UN IALUMNO VACIO.
    // getStudentById(id: number): IStudent {
    //   // Busca en el array de estudiantes un estudiante cuyo ID coincida con el proporcionado
    //   let response = this.arrAlumnos.find(student => student.id == id);
    
    //   // Si se encuentra un estudiante con el ID proporcionado
    //   if (response) {
    //     // Retorna el estudiante encontrado, asegurando que sea del tipo IStudent
    //     return (response as IStudent);
    //   } else {
    //     // Si no se encuentra el estudiante, se crea un estudiante vacío para retornar
    //     let noAlumno: IStudent = {
    //       nombre: "",  // Nombre vacío
    //       edad: -1,    // Edad por defecto (-1 indica que no es un valor válido)
    //       email: "",   // Correo vacío
    //       curso: "string"  // Curso como string genérico
    //     };
    //     // Retorna el objeto creado para indicar que no se encontró un estudiante
    //     return noAlumno;
    //   }


    
    }
  


