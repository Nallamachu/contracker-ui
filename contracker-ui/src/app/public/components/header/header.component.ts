import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isAuthenticated: boolean = false;
  constructor(private router: Router, public authService: AuthService) {
    authService.loginStatusChange().subscribe(loggedIn => {
      this.isAuthenticated = loggedIn
    });
  }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
   // this.router.navigate(['../../']);
  this.authService.logout().pipe(
    tap(() => this.router.navigate(['login']))
  ).subscribe();
  }
}
