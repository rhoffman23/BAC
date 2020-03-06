import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginService } from '../services/user-login.service';
import { userLogin } from '../models/userlogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userLogin$: Observable<userLogin[]>;

  constructor(private userLoginService: UserLoginService) {
  }

  ngOnInit() {
    this.loadUserLogin();
  }

  loadUserLogin() {
    this.userLogin$ = this.userLoginService.getUserLogins();
  }

  delete(u_id) {
    const ans = confirm('Do you want to delete blog post with id: ' + u_id);
    if (ans) {
      this.userLoginService.deleteUserLogin(u_id).subscribe((data) => {
        this.loadUserLogin();
      });
    }
  }
}