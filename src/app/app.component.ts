import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yes= 0;
  no= 0;


  voter = ['manish','dakshita','ds','dakshi'];
  checkVote(vote){
    vote? this.yes++: this.no++;
  }

}
