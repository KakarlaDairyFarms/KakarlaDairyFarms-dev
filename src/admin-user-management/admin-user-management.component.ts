import { Component } from '@angular/core';
import { KFUser } from 'src/KDFModel/kfuser';
import { AdminService } from 'src/admin/admin.service';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent {
  users: KFUser[] = [];
  newUser: KFUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    this.adminService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' };
    });
  }

  updateUser(user: KFUser) {
    this.adminService.updateUser(user).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id ?? 0).subscribe(() => {
      this.users = this.users.filter(user => user.KFUId !== id);
    });
  }

}
