import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
id:number;
name="manish";
Activate=true;
  constructor(private route:ActivatedRoute,private userservice:UserService) { }

  ngOnInit() {
  	this.route.params
  	.subscribe(
  		(param:Params)=>{this.id=param['id'];}
  		);
  }
  onActivate(){
  	this.userservice.userActivated.next(this.id);
  }
    onActivate1(){
  	this.userservice.username.next("this is manish");
  }
}

