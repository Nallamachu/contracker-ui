import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isAuthenticated: boolean = false;
  authService!: AuthService;
  ngOnInit(): void {
    if(this.authService!= undefined){
      this.authService.loginStatusChange().subscribe(loggedIn => {
        this.isAuthenticated = loggedIn
      });
    }
  }
}
