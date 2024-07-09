import { Component, OnInit } from '@angular/core';
import { KFUser } from 'src/KDFModel/kfuser';
import { KFUserService } from 'src/KFKUserService/kfuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kakarlaDairyFarm-dev';
  users: KFUser[] = [];
  newUser: KFUser = { KFUserName: 'Username', KFUserEmail: 'email' };

  constructor(private userService: KFUserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { KFUserName: '', KFUserEmail: '' };
    });
  }

  getUser(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      console.log('User Details:', user);
    });
  }
}
