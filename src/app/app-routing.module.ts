import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';




  const routes: Routes = [
    { path: 'contact-us', component: ContactUsComponent}, 

    { path: '**', redirectTo: ''}
];


  @NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

