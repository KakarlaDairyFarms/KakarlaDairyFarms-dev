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
  editedUser: KFUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' }; // Default initialization
  currentSection: string = 'userManagement';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe(data => {
      if (data.length === 0) {
        this.users = this.getDefaultUsers();
      } else {
        this.users = data;
      }
    });
  }

  addUser() {
    this.adminService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' };
      this.showSection('userManagement');
    });
  }

  startEditing(user: KFUser) {
    this.editedUser = { ...user };
    this.showSection('editUser');
  }

  updateUser() {
    this.adminService.updateUser(this.editedUser).subscribe(
      () => {
        this.loadUsers();
        this.editedUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' }; // Reset to default values
        this.showSection('userManagement');
      },
      error => {
        console.error('Error updating user:', error);
      }
    );
  }

  cancelEditing() {
    this.editedUser = { KFUId: 0, KFUserName: '', KFUserEmail: '' }; // Reset to default values
    this.showSection('userManagement');
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.KFUId !== id);
    });
  }

  getDefaultUsers(): KFUser[] {
    return [
      { KFUId: 1, KFUserName: 'John Doe', KFUserEmail: 'john.doe@kdf.com' },
      { KFUId: 2, KFUserName: 'Jane Smith', KFUserEmail: 'jane.smith@kdf.com' },
      { KFUId: 3, KFUserName: 'Alice Johnson', KFUserEmail: 'alice.johnson@kdf.com' }
    ];
  }

  showSection(section: string) {
    this.currentSection = section;
  }

}
