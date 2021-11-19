import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CardsService {
  

  private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }

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
  
 


getCards(){
  return this.cardsArray

}

sendMessage(body:any) : Observable<any> {
  return this._http.post("https://dulce-alma-deco.herokuapp.com/api/send-mail", body);
};


}
