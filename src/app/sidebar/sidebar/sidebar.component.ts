import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() emitShow= new EventEmitter<boolean>()

show: boolean = true;

  constructor(
        
  ) { }

  ngOnInit(): void {
  }

  showToolbar(){
    this.emitShow.emit(this.show);
   
  }

  
}
