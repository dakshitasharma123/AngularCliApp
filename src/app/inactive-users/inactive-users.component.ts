import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  users: string[]

  constructor(private userservice: UserService) {
    this.users = this.userservice.inactiveuser;
  }

  // ngOnInit() {
  //   //this.users = this.userService.inactiveUsers;
  //   console.log("inactive");
  // }

  onSetToActive(id: number) {
    this.userservice.activeuser.push(this.userservice.inactiveuser[id]);
    this.userservice.inactiveuser.splice(id,1);
  }
}
