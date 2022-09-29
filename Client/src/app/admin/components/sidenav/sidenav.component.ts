import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { createUserDTO } from 'src/app/shared/models/register-user.';
var _ = require('lodash');
interface sideNav {
  link: string;
  icon: string;
  name: string;
  role: number;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  public user: createUserDTO = this.tokenStorage.getUser();

  isAdmin: boolean = true;

  public sidenavigation: sideNav[] = [
    {
      link: 'home',
      icon: 'home',
      name: 'Home',
      role: 3,
    },
    {
      link: 'profile',
      icon: 'person',
      name: 'Profile',
      role: 1,
    },

    {
      link: 'order',
      icon: 'shopping_cart',
      name: 'Order',
      role: 3,
    },
    {
      link: 'customers',
      icon: 'people',
      name: 'Customers',
      role: 2,
    },
    {
      link: 'employees',
      icon: 'people',
      name: 'Employees',
      role: 2,
    },
    {
      link: 'shops',
      icon: 'store',
      name: 'Shops',
      role: 2,
    },
    {
      link: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      role: 3,
    },
  ];
  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if (this.user?.roleId == 1) {
      this.isAdmin = false;
    }
    this.sidenavigation = this.sidenavigation.filter(
      (x) => x.role == 2 || x.role == 3
    );
  }
}
