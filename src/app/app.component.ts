import { Component, OnInit } from '@angular/core';
import { KFUser } from 'src/KDFModel/kfuser';
import { KFUserService } from 'src/KFKUserService/kfuser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  

export class AppComponent implements OnInit {
  title = 'kakarlaDairyFarm-dev';
  users: KFUser[] = [];
  newUser: KFUser = { KFUId: 1, KFUserName: 'Username', KFUserEmail: 'email' };

  

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
      this.newUser = { KFUId:0, KFUserName: '', KFUserEmail: '' };
    });
  }

  getUser(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      console.log('User Details:', user);
    });
  }
}
export class app {

constructor (private router:Router){}

  navigateHome() {
    this.router.navigate(['/services-home']); // Redirects to the home page
  }
}
  

  
