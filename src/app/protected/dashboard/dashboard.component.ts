import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { tap } from 'rxjs';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {}

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
   // this.router.navigate(['../../']);
  this.authService.logout().pipe(
    tap(() => this.router.navigate(['login']))
  ).subscribe();
  }

  sites = [
    {
      "site":"Kamalapuram",
      "engineer":"Samba",
      "company":"SAND",
      "contact":"9502251950"
    },
    {
      "site":"Siddavatam",
      "engineer":"Ayyawar Reddy",
      "company":"SAND",
      "contact":"9502342250"
    },
    {
      "site":"Pushpagiri",
      "engineer":"Pardhu",
      "company":"SAND",
      "contact":"1234567786"
    },
    {
      "site":"Chennur",
      "engineer":"Shivareddy",
      "company":"SAND",
      "contact":"9502242350"
    }
  ]

  equipments = [
    {
      "brand":"XCMG",
      "chasis":"42342",
      "engine":"232223",
      "model":"2022",
      "type":"Excavator",
      "hp":"210"
    },
    {
      "brand":"HYUNDAI",
      "chasis":"453543",
      "engine":"3453453",
      "model":"2017",
      "type":"Excavator",
      "hp":"140"
    }
  ]

}
