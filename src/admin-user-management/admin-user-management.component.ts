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
  //editedUser: { KFUId: number; KFUserName: string; KFUserEmail: string; };
  editedUser: KFUser | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe(data => {
       this.users = data;
    });
  }
  //   this.adminService.getAllUsers().subscribe(
  //     data => {
  //       console.log('Service response:', data);
  //       if (data.length === 0) {
  //         this.users = this.getDefaultUsers();
  //         console.log('Default users assigned:', this.users);
  //       } else {
  //         this.users = data;
  //       }
  //     },
  //     error => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

  addUser() {
    this.adminService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' };
    });
  }

  // updateUser(user: KFUser) {
  //   this.adminService.updateUser(user).subscribe(() => {
  //     this.loadUsers();
  //   });
  // }

  startEditing(user: KFUser) {
    this.editedUser = { ...user }; // Create a copy of the user to edit
  }

  updateUser() {
    if (this.editedUser) {
      this.adminService.updateUser(this.editedUser).subscribe(
        () => {
          this.loadUsers();
          this.editedUser = null;
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  cancelEditing() {
    this.editedUser = null;
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id ?? 0).subscribe(() => {
      this.users = this.users.filter(user => user.KFUId !== id);
    });
  }

  getDefaultUsers(): KFUser[] {
    return [
      { KFUId: 1, KFUserName: 'John Doe', KFUserEmail: 'john.doe@example.com' },
      { KFUId: 2, KFUserName: 'Jane Smith', KFUserEmail: 'jane.smith@example.com' },
      { KFUId: 3, KFUserName: 'Alice Johnson', KFUserEmail: 'alice.johnson@example.com' }
    ];
  }

}
