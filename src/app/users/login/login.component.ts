import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersList: User[];
  user: User;
  constructor(
    private userService: UsersService,
    private route: Router
  ) { }

  ngOnInit() {
    this.user = {
      id: 0,
      username: '',
      password: '',
      email: ''
    };
    this.userService.getUsersList()
    .subscribe( users => {
      this.usersList = users;
      this.usersList.forEach( user => {
        user.password = '123';
      });
    });
  }
  onLogin(): void {
    let found;
    found = this.usersList.find( singleUser => {
      console.log(singleUser);
      return singleUser.email === this.user.email && singleUser.password === this.user.password;
    });
    if (found !== undefined) {
      console.log('redirect');
      this.route.navigate(['posts']);
    }
  }
}
