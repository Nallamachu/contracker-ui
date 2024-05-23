import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppModule } from 'src/app/app.module';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor( public router: Router) { }

    canActivate(): boolean {

        if (localStorage.getItem('token_key') == null) {
            this.router.navigate(['dashboard']);
            return false;
        }
        return true;
    }
}