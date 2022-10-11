import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor() { }
  private preguntasBasicas: preguntasBasica [] = [
    {
    name: "1",
    pregunta: "En las ultimas 24/7 horas. ¿Ha convivido con alguna persona enferma o sospechosa  de COVID-19?",
    si:"SI",
    no: "No"
    },
    {
      name: "2",
      pregunta: "En las ultimas 24/7 horas. ¿Le han practicado pruebas de laboratorio para diagnosticar COVID-19?",
      si: "Si",
      no: "No"
    },
    {
      name: "3",
      pregunta:"En las ultimas 24 horas, le han tomado estudio de los pulmones (radiografias, ultrasonidos, tomografia) ¿Los resultados son positivos a COVID-19?",
      si:"Si",
      no:"No"
    },
    {
      name: "4",
      pregunta: "¿Tiene dificultad respiratoria?",
      si: "Si",
      no: "No"
    },
    {
      name: "5",
      pregunta: "¿Tiene dolor o presion en el pecho?",
      si: "Si",
      no: "No"
    },
    {
      name: "6",
      pregunta: "¿Tiene Confusion?",
      si: "Si",
      no: "No"
    },
    {
      name: "7",
      pregunta: "¿Color azulado en labios o rostros?",
      si: "Si",
      no: "No"
    },
    {
      name: "8",
      pregunta: "¿Tiene toz?",
      si: "Si",
      no: "No"
    },
    {
      name: "9",
      pregunta: "¿Tiene fiebre?",
      si: "Si",
      no: "No"
    },

    {
      name: "10",
      pregunta: "¿Tiene dolor de cabeza?",
      si: "Si",
      no: "No"
    },
    {
      name: "11",
      pregunta: "¿Tiene Cansancio?",
      si: "Si",
      no: "No"
    },
    {
      name: "12",
      pregunta: "¿Escurrimiento nasal?",
      si: "Si",
      no: "No"
    },
    {
      name: "13",
      pregunta: "¿Ojos rojos?",
      si: "Si",
      no: "No"
    },

    {
      name: "14",
      pregunta: "¿Tiene dolor de garganta ?",
      si: "Si",
      no: "No"
    },
    {
      name: "15",
      pregunta: "¿Tiene diarrea?",
      si: "Si",
      no: "No"
    },
    {
      name: "16",
      pregunta: "¿Perdida de sabor?",
      si: "Si",
      no: "No"
    },
    {
      name: "17",
      pregunta: "¿Perdida de ofalto?",
      si: "Si",
      no: "No"
    },

  ]

  
  getPreguntas():preguntasBasica[]{
    return this.preguntasBasicas;
      }
}
export interface preguntasBasica{
  name: string
  pregunta: string
  si: string
  no: string
}
