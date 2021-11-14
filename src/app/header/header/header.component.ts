import { Component, OnInit } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

  showToolbar(){
    this.show= !this.show

}
}
