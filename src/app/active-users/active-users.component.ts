import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

constructor (private userservice: UserService){
  this.users = this.userservice.activeuser;
}

  ngOnInit() {
    console.log("active");
  }

  onSetToInactive(id: number) {
    // this.userService.setToInactive(id);
    this.userservice.inactiveuser.push(this.userservice.activeuser[id]);
    this.userservice.activeuser.splice(id,1);

  }
}
