import { Component } from '@angular/core';
import { Users } from './components/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercitazione';

  user: Users[] = [
    { name: "Mario", cognome: "Rossi", eta: 12, colore:"yellow"},
    { name: "Luca", cognome: "Bianchi", eta: 25, colore:"red"},
    { name: "Paola", cognome: "Verdi", eta: 34, colore:"blue"},
    { name: "Giovanni", cognome: "Neri", eta: 45, colore:"purple"},
  ];

  show : boolean = true;
}

