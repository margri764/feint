import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CardsService {


  cardsArray= [
    {
    title:"Desarrollo Web",
    img: "./assets/marketing.png",
    description: "Nuestro core está en la web, brindamos soluciones a medida o pretesteadas a la altura de los resultados buscados Webs - Ecommerce - WebApps - WordPress - y más!"
   },
   {
    title:"Mobile App",
    img: "./assets/mobile.png",
    description: "Creamos Apps para móviles y Web Apps listas para tener tu producto digital en línea. Tanto para sistema operativo iOS (Apple / iPhone) o Android (Google)."
   },
   {
    title:"Servicios Digitales",
    img: "./assets/digital.png",
    description: "Nuestras disciplinas incluyen un servicio completo que abarca desde el diseño y la programación de proyectos con base tecnológica, hasta las estrategias de comunicación, marketing y contenidos."
   }
  ]  
  
  constructor() { }


getCards(){
  return this.cardsArray

}
}
