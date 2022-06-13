import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) return true;

      this.router.navigateByUrl('/login');
      return false;
  }

}
