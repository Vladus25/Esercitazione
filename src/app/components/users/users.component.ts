import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
 @Input() user!:Users;

 @Input() showDescription = true;

}
export interface Users{
  name:string;
  cognome:string;
  eta:number;
  colore:string;
}
