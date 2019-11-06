import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../core/User';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  navbarOpen = false;
  currentUser: User;
  currentUserSubscription: Subscription;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private router: Router, private authService: AuthService) {
    debugger
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    debugger
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
