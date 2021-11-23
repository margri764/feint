import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

quantity:any;
// start:true;  
array: any []=[] 
string:any;
clicked:boolean= true;
hidden: boolean = true;



myForm:FormGroup = this.fb.group({
name:    ['',[Validators.required]],
phone:   [''],
email:   [''],
message :['']
});

  constructor(
              public messageService: CardsService,
              private router : Router,
              private fb : FormBuilder,



  ) { }

  ngOnInit(): void {
  }

  
    sendForm (){
     
      console.log('funciona el buttom')
  
        this.messageService.sendMessage(this.myForm.value).subscribe( (res) => {
            if (res=='true') {
            alert('se mando!!')
       
           }
          })    
              
   }
}