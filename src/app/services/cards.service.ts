import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CardsService {


  cardsArray= [
    {
    title:"Desarrollo Web",
    img: "./assets/new_image.jpg",
    description: "Nuestro core está en la web, brindamos soluciones a medida o pretesteadas a la altura de los resultados buscados Webs - Ecommerce - WebApps - WordPress - y más!"
   },
   {
    title:"Desarrollo Web",
    img: "./assets/new_image.jpg",
    description: "Nuestro core está en la web, brindamos soluciones a medida o pretesteadas a la altura de los resultados buscados Webs - Ecommerce - WebApps - WordPress - y más!"
   },
   {
    title:"Desarrollo Web",
    img: "./assets/new_image.jpg",
    description: "Nuestro core está en la web, brindamos soluciones a medida o pretesteadas a la altura de los resultados buscados Webs - Ecommerce - WebApps - WordPress - y más!"
   },

  ]  
  
  constructor() { }


getCards(){
  return this.cardsArray

}
}
