import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
   // this.router.navigate(['../../']);
  this.authService.logout().pipe(
    tap(() => this.router.navigate(['login']))
  ).subscribe();
  }

}
